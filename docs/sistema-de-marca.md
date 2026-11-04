# Sistema de marca — Casa Banega

Actualizado el 4 de noviembre de 2026. Sustituye decisiones anteriores de arquitectura y voz.

## Propuesta

Publicación de autor sobre cultura del lujo y decisiones que construyen valor de marca. Los objetos, espacios y experiencias funcionan como casos observables. Lucas Banega es el fundador y autor; Buenos Aires es su base. No añadir trayectoria, clientes, credenciales, visitas o pruebas sin respaldo.

Audiencia principal: personas que toman decisiones de marca y buscan comprender la relación entre cultura, producto y experiencia. Las selecciones aportan casos concretos a esa mirada.

## Arquitectura

- `/`: portada editorial; solo historias y selecciones existentes.
- `/notas`: Revista; ensayos con fuentes y lectura editorial distinguibles.
- `/notas/:slug`: artículo.
- `/selecciones`: archivo de objetos y lugares.
- `/perfumes`, `/gastronomia`: categorías con contenido; se conservan sus URLs.
- `/:cat/:slug`: selección documental.
- `/sobre`: autor, propuesta y método.
- `/filosofia`: criterio editorial.
- `/cartas`: contacto para recibir cartas; formulario cuando el registro esté verificado.
- `/privacidad`: uso de datos de contacto.
- `/experiencias`: redirección permanente a Selecciones mientras no tenga contenido.

Navegación: Revista · Selecciones · La casa · Cartas. No mostrar categorías sin contenido, botones sin acción ni títulos diferentes que simulen piezas inexistentes.

## Voz

Análisis factual, calmo, con interpretación identificada. La primera persona se reserva para experiencia directa confirmada o criterio del autor. Cada afirmación externa relevante lleva una fuente específica. No convertir un margen financiero en prueba causal de marca ni una descripción del fabricante en una evaluación personal.

## Diseño

Mantener el sistema editorial actual: fondo blanco, texto negro, Kepler/Iowan/Baskerville en titulares y Manrope para interfaz. Eliminar cargas tipográficas innecesarias. Espacios amplios con recorridos breves al contenido. Controles legibles de al menos 12 px y áreas de interacción cómodas. Movimiento reducido y pausa para el video.

## Publicación

La compilación genera HTML con contenido, metadatos sociales, canonical y schema por URL. Fuente de artículos: `src/data/notas.js`; selecciones: `src/data/items.js`. Las rutas públicas del generador se derivan de esos datos. Las páginas inexistentes se sirven con 404.

Una ficha documental debe indicar su alcance y fecha; no equivale a visita o prueba personal. Las colaboraciones, regalos e invitaciones deben identificarse cuando existan. Enlazar fuentes concretas y conservar la fecha original cuando una ficha no se haya vuelto a verificar.
