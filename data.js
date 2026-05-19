const mezcalSources = [
  {
    id: "frontiers-2022",
    title: "Mezcal Production in Mexico: Between Tradition and Commercial Exploitation",
    type: "Articulo academico",
    region: "Mexico",
    year: "2022",
    url: "https://www.frontiersin.org/articles/10.3389/fsufs.2022.832532/full",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Revision academica sobre proceso, categorias, clases, tradicion, regulacion y presiones comerciales."
  },
  {
    id: "frontiers-ai-2025",
    title: "Management of scientific and ancestral knowledge: a decision-making model in mezcal industry in Mexico",
    type: "Articulo academico",
    region: "Mexico",
    year: "2025",
    url: "https://www.frontiersin.org/articles/10.3389/frai.2025.1570617/full",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Organiza conocimiento cientifico y ancestral para decisiones en la industria del mezcal."
  },
  {
    id: "conabio-agaves",
    title: "Fichas tecnicas de los agaves de Oaxaca",
    type: "Documento tecnico",
    region: "Oaxaca",
    year: "s/f",
    url: "https://www.conabio.gob.mx/institucion/proyectos/resultados/NE012_Anexo_Fichas_agave.pdf",
    use: "Consulta tecnica",
    reliability: "Alta",
    note: "Fichas botanicas y de uso para especies de magueyes de Oaxaca, incluidas especies mezcaleras."
  },
  {
    id: "conabio-ne012",
    title: "Informe final del Proyecto NE012",
    type: "Documento tecnico",
    region: "Oaxaca",
    year: "s/f",
    url: "https://www.conabio.gob.mx/institucion/proyectos/resultados/InfNE012.pdf",
    use: "Consulta tecnica",
    reliability: "Alta",
    note: "Catalogo e informacion de agaves de Oaxaca, cultivares y registros botanicos."
  },
  {
    id: "dof-nom-070",
    title: "NOM-070-SCFI-2016, Bebidas alcoholicas-Mezcal-Especificaciones",
    type: "Norma oficial",
    region: "Mexico",
    year: "2017",
    url: "https://sidof.segob.gob.mx/notas/5472787",
    use: "Referencia normativa",
    reliability: "Alta",
    note: "Norma oficial para especificaciones, categorias, clases, etiquetado y evaluacion del mezcal."
  },
  {
    id: "comercam-home",
    title: "COMERCAM: Denominacion de Origen Mezcal",
    type: "Organismo regulador",
    region: "Mexico",
    year: "2026",
    url: "https://comercam-dom.org.mx/home/",
    use: "Referencia institucional",
    reliability: "Media",
    note: "Sitio del organismo regulador con informacion de denominacion, certificacion y estados incluidos."
  },
  {
    id: "sader-cadena",
    title: "Agroindustria del mezcal y pequenos productores del Sur-Sureste",
    type: "Fuente oficial",
    region: "Sur-Sureste",
    year: "s/f",
    url: "https://www.gob.mx/agricultura/prensa/contribuye-agroindustria-del-mezcal-al-desarrollo-productivo-de-pequenos-productores-del-sur-sureste-del-pais-sader",
    use: "Resumen y enlace",
    reliability: "Media",
    note: "Contexto institucional sobre cadena productiva, pequenos productores, denominacion y exportacion."
  },
  {
    id: "mdpi-rewilding",
    title: "Rewilding the Mezcal Market: Cultural Practices and the Conservation of Agaves in Oaxaca, Mexico",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2025",
    url: "https://www.mdpi.com/3042-4526/2/2/20",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Analiza practicas culturales, mercado y conservacion de agaves en Oaxaca."
  },
  {
    id: "ap-2026",
    title: "Mezcal producers in Oaxaca reflect on economic impacts of the drink",
    type: "Periodismo",
    region: "Oaxaca",
    year: "2026",
    url: "https://apnews.com/article/b22bd5f1c32c280f8194e1909616c907",
    use: "Resumen breve y enlace",
    reliability: "Media",
    note: "Reportaje reciente sobre productores, crecimiento del mercado y presiones ambientales."
  },
  {
    id: "maguey-exchange",
    title: "Maguey Exchange Video Library",
    type: "Video / entrevista",
    region: "Oaxaca",
    year: "s/f",
    url: "https://www.magueyexchange.com/videos",
    use: "Enlace o incrustacion permitida",
    reliability: "Media",
    note: "Biblioteca audiovisual con conversaciones, productores y procesos."
  },
  {
    id: "maguey-melate",
    title: "Maguey Melate: producer profiles",
    type: "Perfil publicado",
    region: "Oaxaca",
    year: "s/f",
    url: "https://www.magueymelate.com/",
    use: "Resumen breve y enlace",
    reliability: "Media",
    note: "Perfiles narrativos de maestras y maestros mezcaleros publicados en web."
  },
  {
    id: "scielo-consumidores-2019",
    title: "Factores de valoracion en consumidores de mezcal en Oaxaca",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2019",
    url: "https://www.scielo.org.mx/scielo.php?pid=S2395-91692019000200109&script=sci_arttext",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Analiza valoracion del consumidor, disposicion a pagar y oportunidades para pequenos productores."
  },
  {
    id: "scielo-pluriactividad-2008",
    title: "Agricultura y pluriactividad de pequenos productores de agave en la region del mezcal",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2008",
    url: "https://www.scielo.org.mx/scielo.php?pid=S0568-25172008000400007&script=sci_arttext",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Estudia unidades domesticas, ingresos, agricultura y sistemas de produccion de agave mezcalero."
  },
  {
    id: "scielo-sustentabilidad-2012",
    title: "Sustentabilidad y agricultura en la region del mezcal de Oaxaca",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2012",
    url: "https://www.scielo.org.mx/scielo.php?pid=S2007-09342012000100001&script=sci_arttext",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Describe region mezcalera, tecnologia tradicional, transmision de conocimiento y sustentabilidad agricola."
  },
  {
    id: "scielo-bagazo-2020",
    title: "Generation and basic characterization of bagasse from the mezcal agribusiness in Oaxaca",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2020",
    url: "https://www.scielo.org.mx/scielo.php?pid=S2007-09342020000601437&script=sci_arttext&tlng=en",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Caracteriza residuos solidos de la agroindustria del mezcal y aporta coeficientes para manejo de bagazo."
  },
  {
    id: "redalyc-innovacion-oaxaca",
    title: "Innovacion en la cadena agroindustrial de mezcal en tres municipios en Oaxaca",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2020",
    url: "https://www.redalyc.org/journal/290/29063446010/html/",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Analiza actores, innovacion, transferencia de conocimiento y cadena agroindustrial en municipios productores."
  },
  {
    id: "scielo-sensorial-2025",
    title: "Caracterizacion sensorial para diferenciar mezcal ancestral de dos zonas productoras de Oaxaca",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2025",
    url: "https://www.scielo.org.mx/scielo.php?lng=es&nrm=iso&pid=S1405-27682025000200459&script=sci_arttext",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Estudia diferenciacion sensorial de mezcales ancestrales en Santa Maria Ixcatlan y Santa Catarina Minas."
  },
  {
    id: "scielo-agroforestry-2024",
    title: "Cultural value of tree species with potential to restore agroforestry systems with Agave in Oaxaca",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2024",
    url: "https://www.scielo.org.mx/scielo.php?lng=es&nrm=iso&pid=S2007-11322024000500004&script=sci_arttext&tlng=en",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Relaciona agave, restauracion agroforestal, arboles con valor cultural y region mezcalera."
  },
  {
    id: "scielo-vivero-2025",
    title: "Fertilizacion en la produccion de Agave angustifolia Haw en vivero de Sola de Vega",
    type: "Articulo academico",
    region: "Oaxaca",
    year: "2025",
    url: "https://www.scielo.org.mx/article_plus.php?lng=es&pid=S2007-90282025000200013&tlng=es",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Evalua fertilizacion en vivero para Agave angustifolia, especie clave para produccion de mezcal."
  },
  {
    id: "scielo-ftmir-2024",
    title: "Differentiation of mezcales from four agave species using FT-MIR and multivariate analysis",
    type: "Articulo academico",
    region: "Mexico",
    year: "2024",
    url: "https://www.scielo.org.mx/scielo.php?pid=S1665-14562024000100134&script=sci_arttext",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Diferencia mezcales de distintas especies y origenes mediante espectroscopia y analisis multivariado."
  },
  {
    id: "scielo-zacatecas-supply",
    title: "La cadena de suministro del mezcal",
    type: "Articulo academico",
    region: "Zacatecas",
    year: "2014",
    url: "https://www.scielo.org.mx/pdf/cya/v59n2/v59n2a10.pdf",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Estudia cadena de suministro del mezcal en Zacatecas y condiciones de actores agricolas e industriales."
  },
  {
    id: "oaxaca-sedeco-perla",
    title: "Perla, productora de mezcal y embajadora de Oaxaca en el Festival Internacional Cervantino",
    type: "Fuente oficial",
    region: "Oaxaca",
    year: "2024",
    url: "https://www.oaxaca.gob.mx/sedeco/perla-productora-de-mezcal-y-embajadora-de-oaxaca-en-el-festival-internacional-cervantino/",
    use: "Resumen breve y enlace",
    reliability: "Media",
    note: "Perfil institucional sobre productora, empresa familiar y promocion del mezcal oaxaqueno."
  },
  {
    id: "tesis-utm-proceso-2006",
    title: "El proceso de elaboracion del mezcal y la importancia economica de la industria",
    type: "Tesis UTM localizada",
    region: "Oaxaca",
    year: "2006",
    url: "https://www.eumed.net/cursecon/ecolat/mx/2006/mcro-mezcal2.htm",
    use: "Resumen y enlace",
    reliability: "Media",
    note: "Trabajo de Martin Carlos Ramales Osorio y Eric Gilberto Ortiz Bravo, Universidad Tecnologica de la Mixteca; version consultable en Eumed."
  },
  {
    id: "tesis-utm-yodoyuxi-2003",
    title: "Evaluacion economica de la produccion integral de mezcal en San Pedro Yodoyuxi",
    type: "Tesis UTM localizada",
    region: "Mixteca",
    year: "2003",
    url: "https://studylib.es/doc/7901234/evaluacion-econ%C3%B3mica-de-la-producci%C3%B3n-integral-de-mezcal-...",
    use: "Resumen y enlace",
    reliability: "Media",
    note: "Tesis de Asis Vianey Katt Salvador, Universidad Tecnologica de la Mixteca; incluye estudio de mercado, tecnico y financiero."
  },
  {
    id: "tesis-utm-proceso-2005-citada",
    title: "El proceso de elaboracion del mezcal",
    type: "Tesis UTM citada",
    region: "Oaxaca",
    year: "2005",
    url: "https://www.stps.gob.mx/bp/secciones/dgsst/publicaciones/prac_seg/prac_chap/PS%20mezcal.pdf",
    use: "Referencia secundaria",
    reliability: "Baja",
    note: "Tesis profesional de Ortiz-Bravo E.G. y Salas-Coronado R.; aparece citada en publicacion STPS, falta localizar PDF original."
  },
  {
    id: "tesis-utm-tobala-2006-citada",
    title: "Influencia de la glicina o sulfato de amonio en la fermentacion de Agave potatorum Zucc (Tobala)",
    type: "Tesis UTM citada",
    region: "Oaxaca",
    year: "2006",
    url: "https://www.scielo.org.mx/scielo.php?pid=S1665-27382015000300005&script=sci_arttext",
    use: "Referencia secundaria",
    reliability: "Baja",
    note: "Tesis profesional de Ortiz Bravo E.G., Universidad Tecnologica de la Mixteca; aparece citada en articulo de SciELO."
  },
  {
    id: "tesis-utm-destilacion-potatorum-citada",
    title: "Destilacion y rectificacion del mezcal obtenido de Agave potatorum Zucc",
    type: "Tesis UTM citada",
    region: "Oaxaca",
    year: "2000",
    url: "https://ciatej.repositorioinstitucional.mx/jspui/bitstream/1023/429/1/Sergio%20Erick%20Garc%C3%ADa%20Barr%C3%B3n.pdf",
    use: "Referencia secundaria",
    reliability: "Baja",
    note: "Tesis para Ingeniero en Alimentos atribuida a Johnson D., Universidad Tecnologica de la Mixteca; aparece en bibliografia de tesis CIATEJ."
  },
  {
    id: "uabjo-lab-subproductos",
    title: "Laboratorio de Subproductos del Mezcal",
    type: "Universidad oaxaquena",
    region: "Oaxaca",
    year: "2026",
    url: "https://fasbit.uabjo.mx/laboratorio-de-subproductos-del-mezcal",
    use: "Referencia institucional",
    reliability: "Media",
    note: "Linea universitaria UABJO sobre caracterizacion y aprovechamiento de residuos fibrosos del mezcal."
  },
  {
    id: "uabjo-ess-matatlan-2026",
    title: "Economia social y solidaria con microproductores de mezcal en Santiago Matatlan",
    type: "Universidad oaxaquena",
    region: "Santiago Matatlan",
    year: "2026",
    url: "https://fca.uabjo.mx/media/3/2026/01/Libro_Aportes_de_nuevo_conocimiento_FINAL.pdf",
    use: "Resumen y enlace",
    reliability: "Media",
    note: "Capitulo academico UABJO sobre economia informal, ESS y microproductores de mezcal en Santiago Matatlan."
  }
];

const mezcalCards = [
  {
    title: "Durango como cadena de valor regional",
    stage: "Comercializacion",
    region: "Durango",
    sourceType: "Tesis nacional localizada",
    agave: "Varios",
    topic: "Mercado",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "tesis-chapingo-durango-2014",
    summary:
      "La tesis de Chapingo permite mapear actores, eslabones y determinantes de la cadena de valor. Es una base para comparar Durango con Oaxaca, Michoacan o Zacatecas."
  },
  {
    title: "Vinazas como indicador ambiental",
    stage: "Posproduccion",
    region: "Durango",
    sourceType: "Tesis nacional localizada",
    agave: "Varios",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "tesis-ipn-durango-2017",
    summary:
      "Las vinazas deben registrarse como residuo liquido critico. Una ficha ambiental nacional debe incluir generacion, caracterizacion y manejo por unidad productiva."
  },
  {
    title: "Michoacan requiere regiones productoras propias",
    stage: "Comercializacion",
    region: "Michoacan",
    sourceType: "Tesis nacional localizada",
    agave: "Varios",
    topic: "Productores",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "tesis-umsnh-michoacan-2017",
    summary:
      "La caracterizacion de la cadena productiva michoacana ayuda a separar zonas, estrategias, ventajas y problemas locales, sin tratar a todo el mezcal nacional como extension de Oaxaca."
  },
  {
    title: "Fermentacion de Agave cupreata e inaequidens",
    stage: "Fermentacion",
    region: "Michoacan",
    sourceType: "Tesis nacional localizada",
    agave: "Agave cupreata / Agave inaequidens",
    topic: "Calidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "tesis-umsnh-fermentacion-2021",
    summary:
      "Las condiciones de fermentacion modifican rasgos fisicoquimicos y sensoriales. La app debe permitir registrar especie, mosto, tiempo y condiciones de fermentacion."
  },
  {
    title: "Zacatecas y analisis de ciclo de vida",
    stage: "Proceso general",
    region: "Zacatecas",
    sourceType: "Tesis nacional localizada",
    agave: "Varios",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "tesis-upaep-zacatecas-2022",
    summary:
      "El analisis de ciclo de vida permite comparar impactos por etapa. Para una app nacional conviene guardar energia, agua, residuos y recomendaciones de produccion mas limpia."
  },
  {
    title: "Puebla y aprovechamiento de residuos artesanales",
    stage: "Posproduccion",
    region: "Puebla",
    sourceType: "Tesis nacional localizada",
    agave: "Varios",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "tesis-buap-mezcal-residuos-2022",
    summary:
      "Los residuos del mezcal pueden analizarse desde biologia, cultura y comunidad. Esto abre fichas sobre aprovechamiento local, no solo disposicion final."
  },
  {
    title: "Percepcion ambiental de productores del Estado de Mexico",
    stage: "Cultivo y monte",
    region: "Estado de Mexico",
    sourceType: "Tesis nacional localizada",
    agave: "Agave-mezcal",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "tesis-uaemex-productores-2018",
    summary:
      "La percepcion de productores sobre deterioro ambiental permite registrar cambios observados en suelo, agua, monte y agave, no solo mediciones tecnicas externas."
  },
  {
    title: "Mujeres como actor organizativo del mezcal michoacano",
    stage: "Historia familiar",
    region: "Michoacan",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Voces",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "mujeres-mezcaleras-michoacan",
    summary:
      "Los colectivos de mujeres permiten documentar trayectorias, cuidado cultural y liderazgo productivo. La app debe tratarlos como actores organizativos, no solo perfiles individuales."
  },
  {
    title: "Asociacion civil y cadena completa",
    stage: "Comercializacion",
    region: "Michoacan",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Productores",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "mujeres-productoras-mezcal",
    summary:
      "La asociacion Mujeres Productoras de Mezcal muestra que la organizacion puede abarcar maestras mezcaleras, comercio, cultura y promocion regional."
  },
  {
    title: "Guerrero como region promocional y productiva",
    stage: "Comercializacion",
    region: "Guerrero",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Mercado",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "opta-guerrero",
    summary:
      "Las asociaciones de promocion ayudan a ubicar marcas y narrativa territorial. Deben contrastarse con datos oficiales y testimonios de productores."
  },
  {
    title: "Municipios y organizaciones de mezcal guerrerense",
    stage: "Metodo",
    region: "Guerrero",
    sourceType: "Fuente oficial estatal",
    agave: "Varios",
    topic: "Productores",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "guerrero-ficha-mezcal",
    summary:
      "La ficha estatal aporta municipios, productores y organizaciones. Es util para construir un mapa nacional de actores por estado y detectar vacios de informacion."
  },
  {
    title: "Puebla como expansion de denominacion y certificacion",
    stage: "Comercializacion",
    region: "Puebla",
    sourceType: "Fuente oficial estatal",
    agave: "Agave mezcalero",
    topic: "Regulacion",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "puebla-agave-mezcal",
    summary:
      "Las fuentes estatales permiten registrar municipios con denominacion, hectareas, produccion y certificacion. Conviene cruzarlas con tesis y asociaciones locales."
  }
];

mezcalSources.push(
  {
    id: "tesis-chapingo-durango-2014",
    title: "Determinantes de la cadena de valor mezcal en Durango",
    type: "Tesis nacional localizada",
    region: "Durango",
    year: "2014",
    url: "https://repositorio.chapingo.edu.mx/handle/20.500.12098/864",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Tesis de maestria de la Universidad Autonoma Chapingo sobre cadena de valor del mezcal en Durango."
  },
  {
    id: "tesis-ipn-durango-2017",
    title: "Generacion y caracterizacion de vinazas del proceso de elaboracion de mezcal en Durango",
    type: "Tesis nacional localizada",
    region: "Durango",
    year: "2017",
    url: "https://tesis.ipn.mx/handle/123456789/25040",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Tesis IPN-CIIDIR Durango sobre vinazas, contaminacion y caracterizacion de residuos liquidos."
  },
  {
    id: "tesis-umsnh-michoacan-2017",
    title: "Caracterizacion de la cadena productiva del mezcal en el estado de Michoacan",
    type: "Tesis nacional localizada",
    region: "Michoacan",
    year: "2017",
    url: "http://bibliotecavirtual.dgb.umich.mx:8083/xmlui/handle/DGB_UMICH/2661",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Tesis UMSNH sobre regiones productoras, potencial productivo, estrategias y ventajas competitivas."
  },
  {
    id: "tesis-umsnh-fermentacion-2021",
    title: "Efecto de condiciones de fermentacion sobre caracteristicas fisicoquimicas y sensoriales de mezcal de Michoacan",
    type: "Tesis nacional localizada",
    region: "Michoacan",
    year: "2021",
    url: "http://bibliotecavirtual.dgb.umich.mx:8083/xmlui/handle/DGB_UMICH/5352",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Tesis UMSNH sobre fermentacion de mosto de Agave cupreata y Agave inaequidens."
  },
  {
    id: "tesis-upaep-zacatecas-2022",
    title: "Analisis del ciclo de vida y produccion mas limpia del mezcal artesanal en Zacatecas",
    type: "Tesis nacional localizada",
    region: "Zacatecas",
    year: "2022",
    url: "https://repositorioinstitucional.upaep.mx/entities/publication/8cb946fd-32c8-4943-bfee-cb8344f08ef3",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Tesis de doctorado UPAEP sobre ciclo de vida, produccion mas limpia y estrategias ambientales para mezcal artesanal en Zacatecas."
  },
  {
    id: "tesis-buap-mezcal-residuos-2022",
    title: "Aspectos biologicos y culturales para el aprovechamiento de residuos del proceso de elaboracion de mezcal artesanal en San Diego la Mesa Tochimiltzingo",
    type: "Tesis nacional localizada",
    region: "Puebla",
    year: "2022",
    url: "https://repositorioinstitucional.buap.mx/items/b9c0393c-f25f-4618-9b3f-dcbe76ec4618",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Tesis BUAP sobre residuos, bagazo y aprovechamiento local en una comunidad productora de mezcal."
  },
  {
    id: "tesis-uaemex-productores-2018",
    title: "Percepcion de productores de agave-mezcal sobre el deterioro ambiental en la region sur del Estado de Mexico",
    type: "Tesis nacional localizada",
    region: "Estado de Mexico",
    year: "2018",
    url: "https://ri.uaemex.mx/entities/publication/c7d6d513-71f4-4555-87bf-6503111275d8",
    use: "Resumen y enlace",
    reliability: "Alta",
    note: "Tesis UAEMex sobre percepcion ambiental de productores en Zumpahuacan, Malinalco, Zacualpan y Tenancingo."
  },
  {
    id: "mujeres-mezcaleras-michoacan",
    title: "Mujeres Mezcaleras de Michoacan",
    type: "Asociacion mezcalera",
    region: "Michoacan",
    year: "2026",
    url: "https://mujeresmezcalerasmichoacan.com/",
    use: "Referencia organizativa",
    reliability: "Media",
    note: "Colectivo de mujeres que preserva y promueve el mezcal michoacano desde experiencias productivas y culturales."
  },
  {
    id: "mujeres-productoras-mezcal",
    title: "Mujeres Productoras de Mezcal A.C.",
    type: "Asociacion mezcalera",
    region: "Michoacan",
    year: "2026",
    url: "https://www.mujeresproductorasdemezcal.com/",
    use: "Referencia organizativa",
    reliability: "Media",
    note: "Asociacion civil con origen en 2020, formada por maestras mezcaleras y mujeres de distintos eslabones de la cadena."
  },
  {
    id: "opta-guerrero",
    title: "Opta por Guerrero A.C.: mezcal guerrerense",
    type: "Asociacion mezcalera",
    region: "Guerrero",
    year: "2026",
    url: "https://optaporguerrero.org.mx/el-mezcal-guerrerense/",
    use: "Referencia organizativa",
    reliability: "Media",
    note: "Organizacion de promocion del mezcal guerrerense; documenta oferta, marcas y narrativa regional."
  },
  {
    id: "guerrero-ficha-mezcal",
    title: "Ficha tecnica: Mezcal guerrerense",
    type: "Fuente oficial estatal",
    region: "Guerrero",
    year: "s/f",
    url: "https://guerrero.gob.mx/wp-content/uploads/2022/10/Mezcal.pdf",
    use: "Referencia institucional",
    reliability: "Media",
    note: "Ficha estatal con municipios productores, variedades de maguey, volumen, productores y organizaciones."
  },
  {
    id: "puebla-agave-mezcal",
    title: "Puebla impulsa agave mezcalero",
    type: "Fuente oficial estatal",
    region: "Puebla",
    year: "2023",
    url: "https://www.puebla.gob.mx/index.php/noticias/item/12881-con-estrategia-interinstitucional-gobierno-de-puebla-impulsa-agave-mezcalero",
    use: "Referencia institucional",
    reliability: "Media",
    note: "Informacion estatal sobre denominacion de origen, municipios, produccion, certificacion y estrategia interinstitucional."
  }
);

mezcalSources.push(
  {
    id: "amma-oaxaca",
    title: "Asociacion de Maguey y Mezcal Artesanal A.C.",
    type: "Asociacion mezcalera",
    region: "Oaxaca / Nacional",
    year: "2026",
    url: "https://www.amma.org.mx/",
    use: "Referencia organizativa",
    reliability: "Media",
    note: "Asociacion con servicios para productor de maguey, productor de mezcal, envasador y comercializador; opera alrededor de la DOM y la NOM."
  },
  {
    id: "maestros-mezcal-ac",
    title: "Maestros del Mezcal A.C.",
    type: "Asociacion mezcalera",
    region: "Nacional",
    year: "2026",
    url: "https://maestrosdelmezcal.com/",
    use: "Referencia organizativa",
    reliability: "Media",
    note: "Organizacion de productores de mezcal tradicional de diversas regiones de Mexico; promueve proteccion y continuidad de la tradicion."
  },
  {
    id: "abc-mezcales",
    title: "ABC Mezcales: Agave, Buenas practicas y Comunidad",
    type: "Asociacion mezcalera",
    region: "Nacional",
    year: "2026",
    url: "https://www.abcmezcales.org/",
    use: "Referencia organizativa",
    reliability: "Media",
    note: "Grupo de productores de diversos estados orientado a responsabilidad social, buenas practicas, comunidad y economia circular."
  },
  {
    id: "academia-sensorial-agave",
    title: "Academia Sensorial del Agave",
    type: "Asociacion formativa",
    region: "Oaxaca / Nacional",
    year: "2026",
    url: "https://www.academiasensorialdelagave.org.mx/",
    use: "Referencia formativa",
    reliability: "Media",
    note: "Asociacion civil en Oaxaca dedicada a cursos, diplomados y talleres sobre destilados de agave y apreciacion sensorial."
  },
  {
    id: "cemmez-agared",
    title: "Centro de Estudios sobre el Maguey y Mezcal A.C.",
    type: "Asociacion formativa",
    region: "Nacional",
    year: "2026",
    url: "https://www.agared.org/la-industria/centro-de-estudios-sobre-el-maguey-y-mezcal-ac",
    use: "Referencia formativa",
    reliability: "Media",
    note: "Asociacion civil con programas de profesionalizacion, promocion y produccion sustentable dentro de la cadena maguey-mezcal."
  },
  {
    id: "cluster-mezcal-durango",
    title: "Cluster del Mezcal de Durango A.C.",
    type: "Asociacion mezcalera",
    region: "Durango",
    year: "2026",
    url: "https://mx.linkedin.com/company/cl%C3%BAster-del-mezcal-de-durango-a-c",
    use: "Referencia organizativa",
    reliability: "Media",
    note: "Agrupacion de empresarios para fortalecer competitividad, marketing, etiquetado y envasado de productores de mezcal en Durango."
  },
  {
    id: "sistema-producto-nacional-2011",
    title: "Plan Rector Nacional del Sistema Producto Agave Mezcalero",
    type: "Sistema producto",
    region: "Nacional",
    year: "2011",
    url: "https://sursureste.org.mx/wp-content/uploads/2022/08/Plan-Rector-Nacional-del-Sistema-producto-agave-mezcalero-2011.pdf",
    use: "Referencia institucional",
    reliability: "Alta",
    note: "Plan nacional con informacion de comites estatales, variedades por estado y estructura de la cadena agave-mezcal."
  },
  {
    id: "sistema-producto-nacional-2018",
    title: "Sistema Producto Maguey Mezcal Nacional establece proyectos",
    type: "Sistema producto",
    region: "Nacional",
    year: "2018",
    url: "https://oaxaca.quadratin.com.mx/establece-sistema-producto-maguey-mezcal-nacional-sus-proyectos/",
    use: "Referencia hemerografica",
    reliability: "Media",
    note: "Nota sobre reunion ordinaria del Sistema Producto Maguey Mezcal Nacional y proyectos sectoriales."
  },
  {
    id: "michoacan-union-mezcaleros",
    title: "Union de Mezcaleros del Estado de Michoacan",
    type: "Asociacion mezcalera",
    region: "Michoacan",
    year: "2019",
    url: "https://mimorelia.com/noticias/sedeco-y-productores-fortaleceran-cadena-productiva-del-maguey-mezcal",
    use: "Referencia hemerografica",
    reliability: "Media",
    note: "Fuente sobre coordinacion entre Sedeco, Sistema Producto Maguey Mezcal y Union de Mezcaleros del Estado de Michoacan."
  },
  {
    id: "zacatecas-consejo-maguey",
    title: "Consejo para el Desarrollo Integral del Maguey del Estado de Zacatecas",
    type: "Asociacion mezcalera",
    region: "Zacatecas",
    year: "2019",
    url: "https://www.periodicomitierra.mx/eligen-nueva-dirigencia-del-consejo-del-maguey/",
    use: "Referencia hemerografica",
    reliability: "Media",
    note: "Consejo estatal orientado a productores de agave y mezcal, diversidad de variedades e impulso economico del estado."
  },
  {
    id: "zacatecas-consejo-fomento-ley",
    title: "Consejo para el Fomento del Mezcal Zacatecano",
    type: "Consejo estatal",
    region: "Zacatecas",
    year: "2021",
    url: "https://ntrzacatecas.com/2021/08/aprueban-ley-del-mezcal-zacatecano/",
    use: "Referencia legal/hemerografica",
    reliability: "Media",
    note: "La Ley del Mezcal Zacatecano contempla un organismo publico con productores y organizaciones mezcaleras."
  },
  {
    id: "zacatecas-comite-sistema-producto",
    title: "Comite Sistema Producto Maguey Mezcal en el Estado de Zacatecas",
    type: "Sistema producto",
    region: "Zacatecas",
    year: "2016",
    url: "https://www.dof.gob.mx/normasOficiales/6415/seeco2a/seeco2a.html",
    use: "Referencia normativa",
    reliability: "Media",
    note: "Aparece entre actores consultados en proceso normativo junto con organizaciones y empresas mezcaleras zacatecanas."
  },
  {
    id: "cadena-maguey-mezcal-mexico-ac",
    title: "Integracion de la Cadena Productiva Maguey Mezcal de Mexico A.C.",
    type: "Asociacion nacional",
    region: "Nacional",
    year: "2019",
    url: "https://www.gob.mx/cms/uploads/attachment/file/517579/1._PUBLICACION_FCP_2019.pdf",
    use: "Referencia oficial",
    reliability: "Media",
    note: "Asociacion incluida en publicacion federal de cadenas productivas; util para rastrear representacion sectorial nacional."
  }
);

mezcalCards.push(
  {
    title: "AMMA como actor de certificacion y servicios",
    stage: "Comercializacion",
    region: "Oaxaca / Nacional",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "amma-oaxaca",
    summary:
      "AMMA permite registrar servicios organizativos para productores, envasadores y comercializadores. Debe contrastarse su papel con organismos reguladores y productores asociados."
  },
  {
    title: "Maestros del Mezcal como red tradicional",
    stage: "Historia familiar",
    region: "Nacional",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Voces",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "maestros-mezcal-ac",
    summary:
      "La organizacion permite mapear productores tradicionales por region y separar mezcal tradicional de discursos comerciales mas generales."
  },
  {
    title: "Buenas practicas y comunidad como eje de archivo",
    stage: "Metodo",
    region: "Nacional",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Sostenibilidad",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "abc-mezcales",
    summary:
      "ABC Mezcales sirve para clasificar materiales sobre economia circular, responsabilidad social y colaboracion entre productores de distintos estados."
  },
  {
    title: "Formacion sensorial como puente entre productores y consumidores",
    stage: "Calidad",
    region: "Oaxaca / Nacional",
    sourceType: "Asociacion formativa",
    agave: "Varios",
    topic: "Calidad",
    confidence: "Media",
    status: "Revisada",
    sourceId: "academia-sensorial-agave",
    summary:
      "Las asociaciones formativas ayudan a traducir saber tecnico y sensorial sin reducirlo a marketing. La app puede guardar cursos, diplomados y metodologias de cata."
  },
  {
    title: "CEMMEZ y profesionalizacion sustentable",
    stage: "Metodo",
    region: "Nacional",
    sourceType: "Asociacion formativa",
    agave: "Varios",
    topic: "Sostenibilidad",
    confidence: "Media",
    status: "Revisada",
    sourceId: "cemmez-agared",
    summary:
      "CEMMEZ aporta una linea de capacitacion sobre produccion y promocion sustentable. Puede alimentar fichas de formacion para actores de la cadena maguey-mezcal."
  },
  {
    title: "Cluster de Durango como organizacion empresarial",
    stage: "Comercializacion",
    region: "Durango",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "cluster-mezcal-durango",
    summary:
      "El cluster de Durango muestra una forma empresarial de organizacion regional enfocada en competitividad, etiquetado, marketing y envasado."
  },
  {
    title: "Sistema Producto como mapa nacional de actores",
    stage: "Metodo",
    region: "Nacional",
    sourceType: "Sistema producto",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "sistema-producto-nacional-2011",
    summary:
      "El Plan Rector permite construir un mapa base por estado: variedades, comites, productores, industria y problemas de la cadena."
  },
  {
    title: "Proyectos sectoriales del Sistema Producto",
    stage: "Comercializacion",
    region: "Nacional",
    sourceType: "Sistema producto",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "sistema-producto-nacional-2018",
    summary:
      "Las reuniones del Sistema Producto ayudan a rastrear agendas sectoriales, aunque deben completarse con documentos originales y actas cuando existan."
  },
  {
    title: "Michoacan: coordinacion entre gobierno y union de mezcaleros",
    stage: "Comercializacion",
    region: "Michoacan",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "michoacan-union-mezcaleros",
    summary:
      "La Union de Mezcaleros de Michoacan aparece como actor de certificacion y fortalecimiento de cadena, junto con Sedeco y Sistema Producto."
  },
  {
    title: "Zacatecas: consejo del maguey y representacion de productores",
    stage: "Cultivo y monte",
    region: "Zacatecas",
    sourceType: "Asociacion mezcalera",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "zacatecas-consejo-maguey",
    summary:
      "El Consejo para el Desarrollo Integral del Maguey muestra una forma estatal centrada en productores de agave, variedades y economia regional."
  },
  {
    title: "Ley y consejo para fomentar el mezcal zacatecano",
    stage: "Regulacion",
    region: "Zacatecas",
    sourceType: "Consejo estatal",
    agave: "Varios",
    topic: "Regulacion",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "zacatecas-consejo-fomento-ley",
    summary:
      "La creacion de un consejo estatal permite registrar donde la organizacion mezcalera nace de una ley o politica publica, no solo de asociaciones civiles."
  },
  {
    title: "Actores zacatecanos en discusion normativa",
    stage: "Regulacion",
    region: "Zacatecas",
    sourceType: "Sistema producto",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "zacatecas-comite-sistema-producto",
    summary:
      "La lista de actores en documentos normativos permite rastrear comites, empresas y organizaciones que participan en defensa de terminos, calidad y mercado."
  },
  {
    title: "Cadena Productiva Maguey Mezcal de Mexico A.C.",
    stage: "Metodo",
    region: "Nacional",
    sourceType: "Asociacion nacional",
    agave: "Varios",
    topic: "Organizacion",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "cadena-maguey-mezcal-mexico-ac",
    summary:
      "Esta fuente ayuda a rastrear asociaciones de representacion nacional registradas en publicaciones federales, aunque requiere encontrar sitio, actas o documentos propios."
  }
);

const mezcalVideos = [
  {
    id: "yt-sola-vega-3000-noches",
    title: "Asi se elabora el Mezcal Ancestral 3000 Noches, en Villa Sola de Vega, Oaxaca",
    channel: "YouTube",
    region: "Oaxaca",
    stage: "Proceso general",
    topic: "Proceso",
    url: "https://www.youtube.com/watch?v=x5yAuf6EhX0",
    embedUrl: "https://www.youtube-nocookie.com/embed/x5yAuf6EhX0",
    rightsStatus: "Enlace revisable",
    use: "No descargar; enlazar y resumir con atribucion",
    note:
      "Candidato audiovisual sobre proceso ancestral y tradicion familiar en Villa Sola de Vega. Revisar canal original, permiso de insercion y descripcion antes de incrustar."
  },
  {
    id: "yt-masterclass-proceso-oaxaca",
    title: "MasterClass de Mezcal - Procesos del mezcal Oaxaqueno",
    channel: "YouTube",
    region: "Oaxaca",
    stage: "Proceso general",
    topic: "Formacion",
    url: "https://www.youtube.com/watch?v=vPuC5Zr9I1k",
    embedUrl: "https://www.youtube-nocookie.com/embed/vPuC5Zr9I1k",
    rightsStatus: "Enlace revisable",
    use: "No descargar; enlazar y resumir con atribucion",
    note:
      "Candidato audiovisual formativo sobre procesos del mezcal. Revisar si el video permite insercion y si la fuente es adecuada para el archivo."
  },
  {
    id: "video-maguey-exchange",
    title: "Maguey Exchange Video Library",
    channel: "Maguey Exchange",
    region: "Oaxaca",
    stage: "Historia familiar",
    topic: "Voces",
    url: "https://www.magueyexchange.com/videos",
    embedUrl: "",
    rightsStatus: "Enlace seguro",
    use: "Enlazar a biblioteca original; no republicar videos",
    note:
      "Biblioteca audiovisual ya incluida como fuente. Usar como punto de partida para fichas de voces, procesos y productores con enlace al sitio original."
  }
];

mezcalCards.push(
  {
    title: "Fermentacion como decision situada",
    stage: "Fermentacion",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Proceso",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "frontiers-2022",
    summary:
      "La fermentacion no debe registrarse como receta unica: depende del clima, recipientes, agua, levaduras ambientales y madurez del agave. La ficha debe capturar contexto y variacion."
  },
  {
    title: "El proceso completo como cadena de decisiones",
    stage: "Proceso general",
    region: "Mexico",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Proceso",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "frontiers-ai-2025",
    summary:
      "El conocimiento mezcalero puede organizarse por etapas, desde agave hasta maduracion. Esto ayuda a disenar fichas que conecten practica, decision, resultado y fuente."
  },
  {
    title: "Agaves silvestres y presion ecologica",
    stage: "Cultivo y monte",
    region: "Oaxaca",
    sourceType: "Documento tecnico",
    agave: "Silvestres",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "conabio-agaves",
    summary:
      "Las especies usadas para mezcal tienen distribucion, tiempos de maduracion y riesgos distintos. La app debe distinguir cultivo, recoleccion y manejo de poblaciones silvestres."
  },
  {
    title: "Catalogar agaves antes de hablar de mezcal",
    stage: "Cultivo y monte",
    region: "Oaxaca",
    sourceType: "Documento tecnico",
    agave: "Varios",
    topic: "Agaves",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "conabio-ne012",
    summary:
      "Una base seria debe registrar nombre cientifico, nombre local, distribucion, uso y evidencia botanica. Sin esa capa, la biblioteca mezcla especies, cultivares y nombres regionales."
  },
  {
    title: "Categorias de mezcal como filtro, no como verdad unica",
    stage: "Destilacion",
    region: "Mexico",
    sourceType: "Norma oficial",
    agave: "Varios",
    topic: "Regulacion",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "dof-nom-070",
    summary:
      "La norma permite ordenar categorias y clases, pero la app debe conservar nombres locales y practicas no capturadas por el lenguaje regulatorio."
  },
  {
    title: "Certificacion como experiencia productiva",
    stage: "Comercializacion",
    region: "Mexico",
    sourceType: "Organismo regulador",
    agave: "Varios",
    topic: "Mercado",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "comercam-home",
    summary:
      "La certificacion es parte de la vida productiva, no solo un tramite. Conviene registrar costos, barreras, beneficios y efectos para productores pequenos."
  },
  {
    title: "Pequenos productores en la cadena de valor",
    stage: "Comercializacion",
    region: "Sur-Sureste",
    sourceType: "Fuente oficial",
    agave: "Varios",
    topic: "Mercado",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "sader-cadena",
    summary:
      "Las fuentes institucionales ayudan a ubicar politicas y apoyos, pero deben contrastarse con testimonios publicados y datos independientes."
  },
  {
    title: "Conservacion ligada a practicas culturales",
    stage: "Cultivo y monte",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Silvestres",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "mdpi-rewilding",
    summary:
      "La conservacion no se reduce a plantar agaves: involucra practicas culturales, mercado, manejo de paisaje y decisiones sobre que especies se promueven."
  },
  {
    title: "Crecimiento del mercado y presion ambiental",
    stage: "Comercializacion",
    region: "Oaxaca",
    sourceType: "Periodismo",
    agave: "Espadin / silvestres",
    topic: "Mercado",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "ap-2026",
    summary:
      "El crecimiento de la demanda puede generar ingreso, pero tambien presion sobre bosques, agua, escalamiento productivo y metodos tradicionales."
  },
  {
    title: "Voces audiovisuales como fuente primaria publicada",
    stage: "Historia familiar",
    region: "Oaxaca",
    sourceType: "Video / entrevista",
    agave: "Varios",
    topic: "Voces",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "maguey-exchange",
    summary:
      "Los videos permiten observar lenguaje, herramientas y contexto del palenque. La app debe resumirlos, enlazarlos y evitar descargar o republicar material ajeno."
  },
  {
    title: "Perfil del productor sin apropiacion",
    stage: "Historia familiar",
    region: "Oaxaca",
    sourceType: "Perfil publicado",
    agave: "Varios",
    topic: "Etica",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "maguey-melate",
    summary:
      "Una ficha de productor puede incluir nombre, comunidad y trayectoria solo cuando ya esta publicado. Para usos comerciales o promocionales se requiere permiso explicito."
  },
  {
    title: "Separar dato tecnico de interpretacion",
    stage: "Metodo",
    region: "Mexico",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Metodo",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "frontiers-ai-2025",
    summary:
      "Cada ficha debe distinguir que dice la fuente, que inferimos nosotros y que queda pendiente por validar con productores o especialistas."
  },
  {
    title: "Valor comercial no es solo precio",
    stage: "Comercializacion",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Mercado",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-consumidores-2019",
    summary:
      "La disposicion a pagar puede relacionarse con atributos como origen, proceso, calidad percibida e identidad. La app debe conectar fichas tecnicas con elementos de valor para productores pequenos."
  },
  {
    title: "La economia familiar explica decisiones del cultivo",
    stage: "Cultivo y monte",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Agave angustifolia",
    topic: "Productores",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-pluriactividad-2008",
    summary:
      "El cultivo de agave se entiende mejor si se registra junto con ingresos, empleo familiar, tenencia de tierra y otras actividades productivas de la unidad domestica."
  },
  {
    title: "Transmision local de tecnologia tradicional",
    stage: "Cultivo y monte",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Agave angustifolia",
    topic: "Saberes",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-sustentabilidad-2012",
    summary:
      "La tecnologia agricola tradicional puede transmitirse de productor a productor mediante trabajo compartido y aprendizaje comunitario. La app debe registrar de quien se aprendio una practica cuando la fuente lo permita."
  },
  {
    title: "Bagazo como problema y oportunidad",
    stage: "Posproduccion",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Espadin / silvestres",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-bagazo-2020",
    summary:
      "El bagazo debe tratarse como dato ambiental del proceso. Registrar especie, volumen estimado y manejo ayuda a construir fichas utiles para sostenibilidad."
  },
  {
    title: "Innovacion no siempre significa abandonar lo artesanal",
    stage: "Proceso general",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Innovacion",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "redalyc-innovacion-oaxaca",
    summary:
      "La innovacion puede aparecer en organizacion, transferencia de conocimiento, mejora de procesos y articulacion de actores. No debe reducirse a maquinaria o industrializacion."
  },
  {
    title: "El perfil sensorial tambien documenta territorio",
    stage: "Destilacion",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Calidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-sensorial-2025",
    summary:
      "La diferenciacion sensorial permite asociar zonas productoras, practicas y resultados. La app puede guardar descriptores sensoriales sin convertirlos en calificaciones simplistas."
  },
  {
    title: "Restauracion agroforestal alrededor del agave",
    stage: "Cultivo y monte",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Sostenibilidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-agroforestry-2024",
    summary:
      "Las especies arboreas con valor cultural pueden integrarse a estrategias de restauracion. La app debe permitir fichas de paisaje, no solo de plantas de agave."
  },
  {
    title: "Vivero como etapa estrategica",
    stage: "Vivero",
    region: "Oaxaca",
    sourceType: "Articulo academico",
    agave: "Agave angustifolia",
    topic: "Agaves",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-vivero-2025",
    summary:
      "El manejo en vivero influye en disponibilidad y calidad de planta. Conviene registrar sustrato, fertilizacion, sobrevivencia y condiciones locales."
  },
  {
    title: "Analisis de laboratorio como complemento, no reemplazo",
    stage: "Calidad",
    region: "Mexico",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Calidad",
    confidence: "Alta",
    status: "Revisada",
    sourceId: "scielo-ftmir-2024",
    summary:
      "Herramientas analiticas pueden diferenciar mezcales por especie y origen. En la app deben convivir con informacion del proceso, productor y territorio."
  },
  {
    title: "La cadena de suministro cambia por region",
    stage: "Comercializacion",
    region: "Zacatecas",
    sourceType: "Articulo academico",
    agave: "Varios",
    topic: "Mercado",
    confidence: "Alta",
    status: "Por contrastar",
    sourceId: "scielo-zacatecas-supply",
    summary:
      "El mezcal fuera de Oaxaca requiere fichas regionales propias. Una base nacional debe comparar actores, logistica, produccion agricola e industria por estado."
  },
  {
    title: "Productoras como voceras publicas",
    stage: "Historia familiar",
    region: "Oaxaca",
    sourceType: "Fuente oficial",
    agave: "Varios",
    topic: "Voces",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "oaxaca-sedeco-perla",
    summary:
      "Los perfiles institucionales ayudan a ubicar trayectorias publicas, pero la app debe separar promocion gubernamental de testimonio directo de la productora."
  },
  {
    title: "Contrastar reportajes recientes con fuentes tecnicas",
    stage: "Metodo",
    region: "Oaxaca",
    sourceType: "Periodismo",
    agave: "Varios",
    topic: "Metodo",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "ap-2026",
    summary:
      "El periodismo aporta actualidad y voces visibles. Para convertirlo en ficha de conocimiento conviene contrastar cifras, procesos y afirmaciones ambientales con fuentes tecnicas."
  },
  {
    title: "Madurez del agave como dato de proceso",
    stage: "Corte y jima",
    region: "Oaxaca",
    sourceType: "Tesis UTM localizada",
    agave: "Agave angustifolia",
    topic: "Proceso",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "tesis-utm-proceso-2006",
    summary:
      "La tesis describe estados de madurez como sazon, pabilo y capon. La app debe guardar indicios de madurez del agave como parte de la ficha de produccion."
  },
  {
    title: "Ordenar el proceso por etapas observables",
    stage: "Proceso general",
    region: "Oaxaca",
    sourceType: "Tesis UTM localizada",
    agave: "Agave angustifolia",
    topic: "Proceso",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "tesis-utm-proceso-2006",
    summary:
      "La secuencia recoleccion, coccion, triturado, fermentacion, destilacion, refinado y envasado puede servir como taxonomia inicial para registrar informacion de campo o de archivo."
  },
  {
    title: "San Pedro Yodoyuxi como caso economico local",
    stage: "Comercializacion",
    region: "Mixteca",
    sourceType: "Tesis UTM localizada",
    agave: "Varios",
    topic: "Mercado",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "tesis-utm-yodoyuxi-2003",
    summary:
      "El estudio economico muestra como una comunidad puede analizar viabilidad, mercado, inversion, impuestos y recuperacion de capital para produccion tradicional."
  },
  {
    title: "Cuestionarios a proveedores de agave",
    stage: "Metodo",
    region: "Mixteca",
    sourceType: "Tesis UTM localizada",
    agave: "Varios",
    topic: "Metodo",
    confidence: "Media",
    status: "Por revisar",
    sourceId: "tesis-utm-yodoyuxi-2003",
    summary:
      "La tesis incluye instrumentos para preguntar tipos de agave, produccion en vivero, precios, compradores y comunidades de procedencia; son utiles como plantilla de levantamiento futuro."
  },
  {
    title: "Fermentacion de tobala como linea tecnica",
    stage: "Fermentacion",
    region: "Oaxaca",
    sourceType: "Tesis UTM citada",
    agave: "Agave potatorum",
    topic: "Fermentacion",
    confidence: "Baja",
    status: "No publicar demo",
    sourceId: "tesis-utm-tobala-2006-citada",
    summary:
      "La referencia indica una tesis sobre glicina o sulfato de amonio en fermentacion de Agave potatorum. Debe tratarse como pista bibliografica hasta localizar el documento."
  },
  {
    title: "Destilacion de Agave potatorum como pista historica",
    stage: "Destilacion",
    region: "Oaxaca",
    sourceType: "Tesis UTM citada",
    agave: "Agave potatorum",
    topic: "Calidad",
    confidence: "Baja",
    status: "No publicar demo",
    sourceId: "tesis-utm-destilacion-potatorum-citada",
    summary:
      "La tesis citada sugiere trabajo temprano sobre destilacion y rectificacion de mezcal de Agave potatorum. Es valiosa para rastrear antecedentes tecnicos de la UTM."
  },
  {
    title: "Subproductos del mezcal como linea universitaria",
    stage: "Posproduccion",
    region: "Oaxaca",
    sourceType: "Universidad oaxaquena",
    agave: "Varios",
    topic: "Sostenibilidad",
    confidence: "Media",
    status: "Revisada",
    sourceId: "uabjo-lab-subproductos",
    summary:
      "La UABJO trabaja alternativas para residuos fibrosos: harina, proteina vegetal mediante hongos seta, pellets, biofertilizantes y sustratos. Esto amplia la app hacia economia circular."
  },
  {
    title: "Microproductores de Matatlan y economia social",
    stage: "Comercializacion",
    region: "Santiago Matatlan",
    sourceType: "Universidad oaxaquena",
    agave: "Varios",
    topic: "Productores",
    confidence: "Media",
    status: "Por contrastar",
    sourceId: "uabjo-ess-matatlan-2026",
    summary:
      "El analisis UABJO permite registrar debilidades, amenazas, fortalezas y oportunidades de microproductores informales desde economia social y solidaria."
  }
);
