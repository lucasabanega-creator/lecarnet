# Sistema de marca — Casa Banega

Documento vivo. Se actualiza cada vez que se toma una decisión de diseño o de voz que
debería aplicarse hacia adelante, no solo en el momento en que se escribió.

## 1. Arquitectura del sitio

```
/                    Gateway: cita + acceso a boutique/filosofía + cuadrantes + home clásico
/experiencias        solo visible en nav si tiene 1+ ficha publicada
/gastronomia         ídem
/perfumes            ídem
/sobre               relato de marca: curador, método de verificación, criterio con ejemplos reales
/filosofia           manifiesto corto (la cita de Lao-Tsé y la idea de suficiencia)
/notas               ensayos cortos — oculto de todo nav hasta el primer texto real
/notas/:slug         plantilla de ensayo individual
/:cat/:slug          ficha de un ítem (hotel, café, perfume)
```

**Regla dura**: una categoría o sección solo aparece en un nav/grilla pública si tiene
contenido real publicado. `destacadoPorCategoria(slug)` en `src/data/items.js` es la
fuente de verdad; `Header.jsx`, `Footer.jsx` y `CategoryGrid.jsx` filtran por eso. Nunca
mostrar "próximamente" como estado público — la sección directamente no existe hasta
que haya algo que mostrar.

## 2. Plantilla de ficha (`ItemPage.jsx`)

Orden fijo, de arriba a abajo:

1. Imagen banner (o media de producto para perfumes)
2. Encabezado: lugar (con link opcional a otra ficha vía `lugarVinculo`) + tipo, título, bajada, links externos (sitio oficial / menú)
3. **Historia** — contexto histórico o cultural, fuentes verificables
4. **Por qué la elegí** — campo `porQueElegido`, la razón de curaduría explícita, distinta de la historia
5. Ficha técnica (pirámide olfativa para perfumes, `datosTecnicos` genérico para el resto)
6. Galería (`galeria`, opcional)
7. Sello de verificación (curador + fecha + fuentes)
8. **Seguí en la guía** — hasta 3 ítems relacionados, prioriza misma categoría

Extensión mínima orientativa de "Historia": ~120-180 palabras. Se profundiza, no se
recorta — es el diferencial real del sitio frente a un directorio.

## 3. Sistema visual

### Tipografía

Cormorant Garamond (serif) para todos los títulos y momentos editoriales (citas, nombres
de ítem); Inter para cuerpo y UI. Cargadas por `@import` en la primera línea de
`casa-banega.css`.

Escala consolidada en variables (`:root`, mismo `casa-banega.css`):

| Token semántico | Valor | Uso |
|---|---|---|
| `--fs-eyebrow` | 11px | labels en mayúsculas |
| `--fs-body-sm` | 13px | texto secundario, descripciones de card |
| `--fs-body` | 16px | párrafos largos |
| `--fs-h3` | 22px | subtítulos de sección dentro de una ficha |
| `--fs-h2` | 32px | títulos de sección |
| `--fs-h1` | 44px | título de página |
| `--fs-hero` | clamp(38px, 6.4vw, 68px) | título del hero de home |

Además existen primitivos `--fs-10` a `--fs-44` para los tamaños de UI (chips, botones,
meta-labels) que intencionalmente no forman parte de la escala de contenido — un chip de
filtro no tiene por qué compartir tamaño con un `<h3>`. Cualquier tamaño nuevo debería
reusar un primitivo existente antes de inventar uno.

### Espaciado

Grilla base 4px, tokens `--space-1` (8px) a `--space-9` (110px) en `:root`, tomados de los
valores que ya estaban en uso en el sitio.

### Paleta

Base neutra sin cambios: `--ink` `--texto` `--piedra` `--linea` `--blanco`. Se agregó un
acento apagado por categoría, usado **solo** en detalles puntuales (chip de filtro activo,
ícono de categoría, hover de links) — nunca como fondo grande, para no perder unidad de
marca:

- Experiencias `--acc-experiencias: #7E7466`
- Gastronomía `--acc-gastronomia: #8C7256`
- Perfumes `--acc-perfumes: #77745D`

Mecanismo: `[data-cat="slug"] { --accent: var(--acc-slug); }` en el elemento raíz de
`CategoryPage.jsx` e `ItemPage.jsx`. Todo lo que ya usaba `var(--accent)` (hovers, chips
activos) hereda el matiz automáticamente sin selectores nuevos. Todos los acentos están
verificados en ≥4.5:1 de contraste sobre blanco (WCAG AA).

### Fotografía — tratamiento único

**Regla A (foto editorial/atmosférica)** — portadas de categoría, banner e imágenes de
ficha, galería: `filter: grayscale(15-18%) saturate(0.85-0.9) contrast(1.03-1.05)`.
Aplicada de forma consistente en `.cat-card-img`, `.category-editorial`, `.item-media img`,
`.item-galeria img`, `.item-relacionado img`.

**Regla B (producto sobre fondo neutro)** — solo perfumes con `estiloImagen: "producto"`:
sin grading, `object-fit: contain` sobre el `tono` de la ficha. `.item-media.producto img`
anula explícitamente el filtro de la Regla A.

**Estándar de fuente**: para lugares con presencia grande y prensa disponible (hoteles de
cadena, casas de perfumería), material oficial obligatorio. Para lugares que se visitan en
persona (típicamente Gastronomía y algunas Experiencias chicas sin kit de prensa), foto
propia permitida — pero con vara real: buena luz, buen encuadre, sin blur. Si no hay
fotografía a la altura, la ficha no se publica.

## 4. Voz editorial

**General**: primera persona, criterio propio, cero adjetivos de venta ("imperdible",
"increíble", "no te lo podés perder"). Tono afirmativo, no exclamativo.

**Prohibido en cualquier copy público**: "próximamente", "estamos empezando", "pronto más
contenido". Si no hay contenido, la sección no existe (ver §1).

**Fichas** (Experiencias/Gastronomía/Perfumes): estructura fija de §2. Se cita siempre la
fuente. Se profundiza en vez de recortar.

**Sobre/Filosofía/Notas**: primera persona directa, mayor densidad intelectual que el
resto del sitio — es donde se construye autoridad, no solo curaduría de terceros.

## 5. Deuda pendiente / próximos pasos

- `/notas`: estructura lista, sin contenido. El primer ensayo real lo escribe Lucas — no
  se inventa contenido personal ("por qué existe esta guía", "qué se rechazó publicar")
  para no romper la premisa de verificación del sitio.
- Auditar `lucasbanega.com` para integración visual quedó fuera de este trabajo — se
  resolvió con un puente de marca en el bloque del Gateway en su lugar.
