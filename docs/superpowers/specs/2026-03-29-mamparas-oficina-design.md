# Diseño — Mamparas de Oficina

**Fecha:** 2026-03-29
**Proveedor:** Diseña Divisiones (disenadivisiones.es)
**Referencia de estilo:** `/ventanas-pvc/page.tsx` y `/ventanas-pvc/serie-s70/page.tsx`

---

## Objetivo

Crear la sección completa de **Mamparas de Oficina** para Comercial MAR'O, accesible desde la card de servicios (`/mamparas-oficina`). El estilo visual y la UX deben ser un calco exacto de la sección de ventanas PVC Ecoven Plus.

---

## Arquitectura de páginas

```
/mamparas-oficina              → página principal
  /ur-802                      → subpage UR-802
  /ur-803                      → subpage UR-803
  /ur-902                      → subpage UR-902
  /cristal-vision              → subpage Cristal Visión I+II
  /slim                        → subpage SLIM
  /tabique-armario             → subpage Tabique Armario
```

**Ficheros a crear:**

```
src/app/mamparas-oficina/page.tsx
src/app/mamparas-oficina/ur-802/page.tsx
src/app/mamparas-oficina/ur-803/page.tsx
src/app/mamparas-oficina/ur-902/page.tsx
src/app/mamparas-oficina/cristal-vision/page.tsx
src/app/mamparas-oficina/slim/page.tsx
src/app/mamparas-oficina/tabique-armario/page.tsx
```

---

## Página principal `/mamparas-oficina`

Calco directo de `src/app/ventanas-pvc/page.tsx`.

### Hero
- Imagen de fondo: oficina con mamparas acristaladas (Unsplash)
- Overlay: `bg-carbon/72`
- Breadcrumb: `Inicio / Mamparas de Oficina`
- Badge: `Diseña Divisiones`
- H1: "Mamparas de Oficina Diseña Divisiones"

### Párrafo intro
> Tres familias —**Perfilería UR**, **Sistemas Acristalados** y **Tabique Armario**— para cada necesidad de división de espacios: desde el tabique clásico hasta el vidrio continuo sin marcos.

### Layout
`max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12`

---

### Sección 1 — "Sistemas UR" (calco de "Las tres series")

**Header:**
- Tag shimmer: `Perfilería de acero`
- H2: `Elige tu sistema de perfilería`
- Subtítulo: `Tres sistemas con distintos acabados constructivos y niveles de discreción estética.`

**Grid `sm:grid-cols-3`:**

| Slot | Producto | Estilo | Badge |
|------|----------|--------|-------|
| 1 | UR-802 | Card estándar (border arena) | *Alta prestación* |
| 2 | UR-803 | Card featured rojo (border rojo, shadow-xl) | *El más demandado* |
| 3 | UR-902 | Card dark (bg-carbon, texto blanco) | *Perfilería oculta* |

Cada card incluye:
- Watermark tipográfico (`UR-802`, `UR-803`, `UR-902`)
- Badge de categoría
- Nombre + tagline
- 3 specs clave (key-value)
- Tags pills
- Botón "Ver [producto] →"

**Comparativa de barras** (calco del widget de ventanas):
- Métrica 1: Aislamiento térmico-acústico → UR-802: 80% / UR-803: 65% / UR-902: 80%
- Métrica 2: Facilidad de montaje → UR-802: 70% / UR-803: 90% / UR-902: 75%
- Métrica 3: Discreción estética → UR-802: 50% / UR-803: 45% / UR-902: 95%

---

### Sección 2 — "Acristalados totales" (calco de "Sistemas deslizantes")

**Header:**
- Tag shimmer: `Vidrio de suelo a techo`
- H2: `Luz y apertura sin perfiles visibles`
- Subtítulo: `Dos sistemas para espacios donde la transparencia y la luminosidad son prioritarias.`

**Grid `sm:grid-cols-2`:**

| Producto | Icono | Tags |
|----------|-------|------|
| Cristal Visión I+II | `Grid2X2` (cuadrícula) | `Vidrio 5+5` / `2 modelos` / `Transparencia total` |
| SLIM | `Minus` (línea fina) | `Perfil bajo` / `Vidrio continuo` / `Sin juntas` |

---

### Sección 3 — "Tabique Armario" (calco de "Puertas de entrada")

**Header:**
- Tag shimmer: `Solución integrada`
- H2: `El tabique que también guarda`

Card ancha con:
- Badge: `Diseña Divisiones`
- H3: `Tabique Armario`
- Tags pill con CheckCircle2: `Compatible UR-802/803/902` / `Integración estética` / `Almacenaje incorporado`
- Stats lateral (3 items): Compatibilidad / Tipo / Función

---

### Sidebar sticky

**Card CTA:**
- H3: `¿Qué sistema se adapta a tu espacio?`
- Texto: `Te ayudamos a elegir entre perfilería vista, oculta y sistemas acristalados según tu proyecto.`
- `<PresupuestoButton size="lg" className="w-full justify-center" />`
- Ventajas: `Proyecto a medida` / `Instalación propia en Vizcaya` / `Garantía 10 años`

**Card Quick Nav:**
- Título: `Explorar productos`
- Links a los 6 subpages con sublabel descriptivo

---

## Subpages (calco de `/ventanas-pvc/serie-s70/page.tsx`)

Estructura idéntica para los 6 productos.

### Estructura de cada subpage

1. **Hero** — imagen de producto, breadcrumb 2 niveles (`Inicio / Mamparas de Oficina / [Producto]`), badge de categoría, H1
2. **Intro + foto** — grid md:2-cols, párrafo izq. + imagen dcha.
3. **Stat grid** — 4 cifras clave en `grid-cols-2 sm:grid-cols-4`
4. **Características** — lista con `CheckCircle2` (izq.) + imagen (dcha.)
5. **Comparativa** — barras vs otros productos relacionados:
   - UR-802/803/902: las 3 barras de la familia UR (producto actual resaltado en rojo, los otros en arena), métricas: Aislamiento / Facilidad de montaje / Discreción estética
   - Cristal Visión I+II y SLIM: comparativa entre sí, métricas: Superficie acristalada / Discreción de perfil / Modularidad
   - Tabique Armario: **sin sección de comparativa** (producto único, no tiene hermanos directos); se sustituye por una sección "Sistemas compatibles" que enlaza a UR-802, UR-803 y UR-902
6. **Ficha técnica** — tabla zebra con specs
7. **Sidebar** — CTA + links a los otros 5 productos + "Volver al catálogo"

### Datos por producto

#### UR-802
- **Badge:** Alta prestación
- **Tagline:** Robustez y combinación de colores
- **Intro:** Sistema tradicional de perfilería vista con estructura de acero interior, resistencia al fuego certificada y alto aislamiento térmico-acústico. Permite combinación de colores.
- **Stats:** `Perfilería: Vista` / `Fuego: Certificada` / `Estructura: Acero` / `Colores: Combinables`
- **Características:**
  - Perfilería vista con acabado de alta calidad
  - Resistencia al fuego certificada
  - Alto aislamiento térmico y acústico
  - Combinación de colores en perfil y relleno
  - Gran fortaleza estructural gracias al refuerzo de acero
  - Amplia aceptación en proyectos de obra nueva y reforma
- **Ficha técnica:** Sistema / Perfilería / Resistencia al fuego / Aislamiento / Estructura / Acabados

#### UR-803
- **Badge:** El más demandado
- **Tagline:** El clásico que siempre funciona
- **Intro:** El sistema más clásico y extendido del mercado. Su montaje por tapajuntas a presión facilita enormemente la instalación y reduce tiempos de obra. Aparece en la gran mayoría de prescripciones de arquitecto.
- **Stats:** `Perfilería: Vista` / `Montaje: Tapajuntas` / `Mercado: Referencia` / `Instalación: Ágil`
- **Características:**
  - Sistema más clásico y adoptado del mercado
  - Montaje sencillo por tapajuntas a presión
  - Alta presencia en prescripciones de arquitecto y aparejador
  - Reducción de tiempo de montaje en obra
  - Compatible con Tabique Armario
  - Perfilería vista con acabados estándar y premium
- **Ficha técnica:** Sistema / Perfilería / Montaje / Mercado / Compatibilidad / Acabados

#### UR-902
- **Badge:** Perfilería oculta
- **Tagline:** El marco que desaparece
- **Intro:** Acabados y calidades comparables a los sistemas UR-802/803, con una construcción radicalmente diferente: la perfilería queda oculta, ofreciendo una imagen más limpia y minimalista del espacio.
- **Stats:** `Perfilería: Oculta` / `Acabado: Premium` / `Construcción: Diferenciada` / `Estética: Minimalista`
- **Características:**
  - Perfilería completamente oculta al exterior
  - Acabados y calidades equivalentes a UR-802/803
  - Diseño constructivo propio y diferenciado
  - Apariencia más limpia y contemporánea
  - Ideal para espacios con alta exigencia estética
  - Compatible con Tabique Armario
- **Ficha técnica:** Sistema / Perfilería / Acabado / Construcción / Estética / Compatibilidad

#### Cristal Visión I+II
- **Badge:** Máxima luminosidad
- **Tagline:** Dos opciones de vidrio de suelo a techo
- **Intro:** Tabique totalmente acristalado equipado con vidrio 5+5 transparente. Disponible en dos versiones (I y II) para adaptarse a diferentes necesidades de configuración y apertura.
- **Stats:** `Tipo: Acristalado` / `Vidrio: 5+5` / `Modelos: I y II` / `Transparencia: Total`
- **Características:**
  - Tabique 100% acristalado de suelo a techo
  - Vidrio laminado 5+5 transparente
  - Dos modelos con diferentes configuraciones
  - Máxima entrada de luz natural al espacio
  - Sensación de amplitud visual sin barreras
  - Compatible con sistemas UR para zonas mixtas
- **Ficha técnica:** Sistema / Tipo de vidrio / Modelos / Transparencia / Aplicación / Compatibilidad

#### SLIM
- **Badge:** Minimalista
- **Tagline:** Vidrio continuo, perfil invisible
- **Intro:** Sistema de vidrio continuo con perfil bajo. La mínima expresión del tabique de oficina: máxima superficie acristalada y prácticamente sin marcos visibles. Ideal para espacios con lenguaje arquitectónico contemporáneo.
- **Stats:** `Tipo: Vidrio continuo` / `Perfil: Bajo` / `Juntas: Mínimas` / `Diseño: Lineal`
- **Características:**
  - Vidrio continuo con mínima interrupción de perfil
  - Perfil bajo de alta discreción
  - Máxima superficie translúcida por módulo
  - Sin juntas visibles entre paños
  - Lenguaje arquitectónico contemporáneo
  - Ideal para despachos y salas de reuniones premium
- **Ficha técnica:** Sistema / Perfil / Vidrio / Junta / Estética / Aplicación

#### Tabique Armario
- **Badge:** Integración total
- **Tagline:** El tabique que también funciona
- **Intro:** Solución que se integra técnica y estéticamente con los sistemas UR-802, UR-803 y UR-902. Combina la función divisoria con capacidad de almacenaje, eliminando la necesidad de mobiliario adicional.
- **Stats:** `Tipo: Integrado` / `Compat: UR-802/803/902` / `Función: Almacenaje` / `Montaje: Coordinado`
- **Características:**
  - Integración técnica y estética con sistemas UR
  - Compatible con UR-802, UR-803 y UR-902
  - Incorpora almacenaje sin mobiliario extra
  - Montaje coordinado con el resto de mamparas
  - Optimiza el espacio disponible por módulo
  - Acabados coherentes con toda la serie UR
- **Ficha técnica:** Sistema / Compatibilidad / Función / Montaje / Acabado / Aplicación

---

## Imágenes (Unsplash)

Las imágenes deben pasarse con `?w=800&q=80` para optimización.

| Uso | Query sugerida |
|-----|---------------|
| Hero principal | `office glass partitions modern` |
| UR-802 | `office dividers steel frame` |
| UR-803 | `office partition classic corporate` |
| UR-902 | `minimalist office partition frameless` |
| Cristal Visión | `glass office wall transparent` |
| SLIM | `frameless glass office interior` |
| Tabique Armario | `office storage partition integrated` |

---

## Componentes reutilizados (sin modificar)

- `PresupuestoButton` — sidebar CTA
- `buildMetadata` — SEO
- `CheckCircle2`, `ArrowRight` de lucide-react
- Clases CSS `shimmer-text`, `bar-grow`, `img-zoom`, `img-zoom-wrap`, `img-reveal`: son animaciones declaradas en un tag `<style>` inline dentro de cada page.tsx (igual que en ventanas-pvc). No son clases globales de Tailwind. Cada fichero debe incluir su propio bloque `<style>{...}</style>`.

---

## Convenciones de estilo

- Fuente: `font-montserrat`
- Colores: `text-rojo`, `text-carbon`, `text-gris-medio`, `bg-crema`, `border-gris-claro`, `text-arena`
- Cards hover: `hover:-translate-y-1 hover:shadow-md transition-all duration-200`
- Botones CTA: `bg-rojo/5 group-hover:bg-rojo group-hover:text-white`
- Tags: `rounded-full text-[10px] font-montserrat font-bold`
