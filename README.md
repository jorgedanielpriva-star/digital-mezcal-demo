# Archivo Digital del Mezcal

Prototipo web estatico para curar fuentes publicas sobre mezcal en Mexico: tesis, articulos, asociaciones, documentos tecnicos, fuentes oficiales, procesos, regiones y actores de la cadena maguey-mezcal.

## Que incluye

- Fichas de conocimiento con fuente trazable.
- Filtros por busqueda, etapa, region, tipo de fuente y tema.
- Pendientes de verificacion.
- Mapa nacional de actores por region.
- Fuentes iniciales con enlaces.
- Aviso etico y metodologia de uso.

## Como correr localmente

```bash
node server.mjs
```

Luego abrir:

```text
http://127.0.0.1:8000/
```

## Como alimentar la base

Edita `data.js`. Cada ficha debe apuntar a una fuente existente mediante `sourceId`.

## Criterios eticos

- No copiar articulos, tesis, fotografias, entrevistas o videos completos.
- Usar resumen, metadatos y enlace a la fuente original.
- No presentar conocimiento publicado como trabajo de campo propio.
- No usar nombres, imagenes o historias de productores con fines comerciales sin consentimiento.
- Distinguir fuente directa, fuente secundaria y pista bibliografica.

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir `index.html`, `styles.css`, `app.js`, `data.js`, `server.mjs` y `README.md`.
3. Ir a `Settings > Pages`.
4. Elegir `Deploy from a branch`.
5. Seleccionar `main` y carpeta `/root`.

## Publicar en Netlify

1. Entrar a Netlify.
2. Crear un nuevo sitio con `Deploy manually`.
3. Arrastrar la carpeta del proyecto.
4. Netlify servira `index.html` automaticamente.

## Antes de publicar formalmente

- Revisar todos los pendientes de verificacion.
- Corregir enlaces dudosos.
- Normalizar nombres de regiones.
- Confirmar derechos de uso de cada fuente.
- Agregar forma de contacto o correo para correcciones.

## Estado de demo

La demo oculta de la exploracion principal las fichas marcadas como `No publicar demo`.
Esas entradas quedan visibles en pendientes para seguimiento editorial, pero no se presentan como conocimiento curado.
