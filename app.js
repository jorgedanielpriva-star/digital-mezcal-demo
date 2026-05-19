const sources = mezcalSources;
const cards = mezcalCards;

const searchInput = document.querySelector("#searchInput");
const stageFilter = document.querySelector("#stageFilter");
const regionFilter = document.querySelector("#regionFilter");
const typeFilter = document.querySelector("#typeFilter");
const topicFilter = document.querySelector("#topicFilter");
const cardsNode = document.querySelector("#cards");
const sourcesList = document.querySelector("#sourcesList");
const resultCount = document.querySelector("#resultCount");
const pendingList = document.querySelector("#pendingList");
const pendingCount = document.querySelector("#pendingCount");
const actorMap = document.querySelector("#actorMap");
const actorCount = document.querySelector("#actorCount");
const videoList = document.querySelector("#videoList");
const videoCount = document.querySelector("#videoCount");

const pendingStatuses = ["Por contrastar", "Por revisar", "Buscar PDF original"];
const actorTypes = [
  "Asociacion mezcalera",
  "Asociacion formativa",
  "Asociacion nacional",
  "Consejo estatal",
  "Sistema producto",
  "Organismo regulador",
  "Universidad oaxaquena"
];
const hiddenFromDemoStatuses = ["No publicar demo"];
const visibleCards = cards.filter((card) => !hiddenFromDemoStatuses.includes(card.status));

function uniqueValues(key) {
  return [...new Set(visibleCards.map((card) => card[key]))].sort((a, b) => a.localeCompare(b));
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function getSource(sourceId) {
  return sources.find((source) => source.id === sourceId);
}

function confidenceClass(confidence) {
  return confidence === "Alta" ? "confidence-high" : "confidence-medium";
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key] || "Sin clasificar";
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, {});
}

function renderCards() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedStage = stageFilter.value;
  const selectedRegion = regionFilter.value;
  const selectedType = typeFilter.value;
  const selectedTopic = topicFilter.value;

  const filtered = visibleCards.filter((card) => {
    const source = getSource(card.sourceId);
    const haystack = [
      card.title,
      card.summary,
      card.stage,
      card.region,
      card.sourceType,
      card.agave,
      card.topic,
      card.status,
      source?.title,
      source?.note
    ].join(" ").toLowerCase();

    return (
      haystack.includes(query) &&
      (selectedStage === "all" || card.stage === selectedStage) &&
      (selectedRegion === "all" || card.region === selectedRegion) &&
      (selectedType === "all" || card.sourceType === selectedType) &&
      (selectedTopic === "all" || card.topic === selectedTopic)
    );
  });

  resultCount.textContent = `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}`;
  cardsNode.innerHTML = "";

  if (filtered.length === 0) {
    cardsNode.innerHTML = '<p class="summary">No hay fichas con esos filtros. Prueba con otro tema o etapa.</p>';
    return;
  }

  filtered.forEach((card) => {
    const source = getSource(card.sourceId);
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <div class="card-header">
        <h3>${card.title}</h3>
        <span class="badge">${card.topic}</span>
      </div>
      <p class="summary">${card.summary}</p>
      <div class="meta" aria-label="Metadatos">
        <span>${card.stage}</span>
        <span>${card.region}</span>
        <span>${card.agave}</span>
        <span>${card.sourceType}</span>
        <span>${card.status}</span>
      </div>
      <div class="source-note">
        <strong>Fuente:</strong> ${source.title}
      </div>
      <div class="card-footer">
        <span class="confidence ${confidenceClass(card.confidence)}">Confiabilidad: ${card.confidence}</span>
        <a href="${source.url}" target="_blank" rel="noreferrer">Ver fuente</a>
      </div>
    `;
    cardsNode.appendChild(article);
  });
}

function renderSources() {
  sourcesList.innerHTML = "";
  sources.forEach((source) => {
    const item = document.createElement("article");
    item.className = "source-item";
    item.innerHTML = `
      <h3>${source.title}</h3>
      <p>${source.note}</p>
      <div class="meta">
        <span>${source.type}</span>
        <span>${source.region}</span>
        <span>${source.year}</span>
        <span>${source.use}</span>
      </div>
      <p><a href="${source.url}" target="_blank" rel="noreferrer">Abrir enlace</a></p>
    `;
    sourcesList.appendChild(item);
  });
}

function renderPending() {
  const pendingCards = cards
    .filter((card) => pendingStatuses.includes(card.status) || card.confidence === "Baja" || hiddenFromDemoStatuses.includes(card.status))
    .sort((a, b) => a.region.localeCompare(b.region) || a.status.localeCompare(b.status));

  pendingCount.textContent = `${pendingCards.length} pendiente${pendingCards.length === 1 ? "" : "s"}`;
  pendingList.innerHTML = "";

  if (pendingCards.length === 0) {
    pendingList.innerHTML = '<p class="summary">No hay pendientes por ahora.</p>';
    return;
  }

  pendingCards.forEach((card) => {
    const source = getSource(card.sourceId);
    const item = document.createElement("article");
    item.className = "pending-item";
    item.innerHTML = `
      <div>
        <h3>${card.title}</h3>
        <p>${source.title}</p>
      </div>
      <div class="meta">
        <span>${card.region}</span>
        <span>${card.status}</span>
        <span>Confianza: ${card.confidence}</span>
      </div>
      <a href="${source.url}" target="_blank" rel="noreferrer">Revisar fuente</a>
    `;
    pendingList.appendChild(item);
  });
}

function renderActorMap() {
  const actorSources = sources
    .filter((source) => actorTypes.includes(source.type))
    .sort((a, b) => a.region.localeCompare(b.region) || a.title.localeCompare(b.title));
  const grouped = groupBy(actorSources, "region");

  actorCount.textContent = `${actorSources.length} actor${actorSources.length === 1 ? "" : "es"}`;
  actorMap.innerHTML = "";

  Object.entries(grouped).forEach(([region, regionSources]) => {
    const regionCards = visibleCards.filter((card) => card.region === region || card.region.includes(region));
    const panel = document.createElement("article");
    panel.className = "region-actor";
    panel.innerHTML = `
      <div class="region-actor-header">
        <h3>${region}</h3>
        <span>${regionSources.length} fuente${regionSources.length === 1 ? "" : "s"}</span>
      </div>
      <div class="actor-list">
        ${regionSources.map((source) => `
          <a href="${source.url}" target="_blank" rel="noreferrer">
            <strong>${source.title}</strong>
            <span>${source.type}</span>
          </a>
        `).join("")}
      </div>
      <div class="region-footnote">
        ${regionCards.length} ficha${regionCards.length === 1 ? "" : "s"} relacionadas en la base
      </div>
    `;
    actorMap.appendChild(panel);
  });
}

function renderVideos() {
  const videos = typeof mezcalVideos === "undefined" ? [] : mezcalVideos;
  videoCount.textContent = `${videos.length} video${videos.length === 1 ? "" : "s"}`;
  videoList.innerHTML = "";

  videos.forEach((video) => {
    const article = document.createElement("article");
    article.className = "video-card";
    const canEmbed = video.rightsStatus === "Embebible revisado" && video.embedUrl;
    article.innerHTML = `
      ${canEmbed ? `<iframe src="${video.embedUrl}" title="${video.title}" loading="lazy" allowfullscreen></iframe>` : ""}
      <div class="video-card-body">
        <div class="card-header">
          <h3>${video.title}</h3>
          <span class="badge">${video.rightsStatus}</span>
        </div>
        <p class="summary">${video.note}</p>
        <div class="meta">
          <span>${video.region}</span>
          <span>${video.stage}</span>
          <span>${video.topic}</span>
          <span>${video.channel}</span>
        </div>
        <div class="source-note"><strong>Uso:</strong> ${video.use}</div>
        <div class="card-footer">
          <span class="confidence">Revision de derechos requerida</span>
          <a href="${video.url}" target="_blank" rel="noreferrer">Abrir video</a>
        </div>
      </div>
    `;
    videoList.appendChild(article);
  });
}

fillSelect(stageFilter, uniqueValues("stage"));
fillSelect(regionFilter, uniqueValues("region"));
fillSelect(typeFilter, uniqueValues("sourceType"));
fillSelect(topicFilter, uniqueValues("topic"));

document.querySelector("#sourceCount").textContent = sources.length;
document.querySelector("#cardCount").textContent = visibleCards.length;

[searchInput, stageFilter, regionFilter, typeFilter, topicFilter].forEach((control) => {
  control.addEventListener("input", renderCards);
});

renderCards();
renderSources();
renderPending();
renderActorMap();
renderVideos();
