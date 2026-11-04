# Casa Banega — Implementación y puesta en marcha

4 de noviembre de 2026.

## Implementado localmente

- Portada y propuesta editorial alineadas; navegación Revista, Selecciones, La casa y Cartas.
- Tres ensayos con fuentes oficiales: Richemont, Hermès y Bvlgari. El texto distingue interpretación de hechos y corrige el argumento del borrador de Richemont: el margen de joyería disminuyó frente al año anterior.
- Dos fichas existentes con alcance documental explícito, fuentes enlazadas y mapa de Nano. Nano conserva su revisión de julio; no se presenta como una visita ni una nueva comprobación de carta/horarios.
- HTML estático para 14 rutas públicas, metadatos completos, imagen social predeterminada, datos estructurados y sitemap/robots generados.
- 404 real según configuración Netlify, y redirección de Experiencias a Selecciones.
- Menú con Escape y recorrido de foco; video con pausa y movimiento reducido; controles más legibles.
- Imagen escultórica reducida de unos 2,6 MB a unos 124 KB. Ya no se carga en portada y la versión optimizada se utiliza en Criterio editorial.
- Integración de solicitudes para cartas preparada para Netlify Forms, con validación, consentimiento, protección antispam y estados de envío/error. El formulario queda desactivado hasta comprobar la recepción; se ofrece contacto por correo.

## Comandos

- `npm run build`: genera `dist`, incluyendo páginas y metadatos listos para servir. No se necesita un servidor de React en producción.
- `npm test`: comprueba los archivos generados, enlaces y recursos internos, schema, canonical, metadatos y páginas de error. Ejecutar después de compilar.
- `npm run preview`: sirve la compilación en http://127.0.0.1:4173 con errores 404 reales.

No se añadieron dependencias.

## Alojamiento y publicación

El dominio confirmado es https://casabanega.com. Se comprobó respuesta pública 200 y servidor Netlify. La versión pública sigue siendo la anterior hasta desplegar esta compilación. La carpeta local no incluye vínculo de sitio ni acceso autenticado de Netlify.

Mantener el flujo de publicación existente. En Netlify: comando `npm run build`, directorio `dist`. Verificar URLs directas de artículos, `/sitemap.xml`, `/robots.txt` y una URL inexistente después de publicar. No crear otro sitio ni cambiar DNS para estas mejoras.

## Activar las cartas

1. En el sitio de Netlify, habilitar detección de formularios en Forms.
2. Desplegar: `/cartas` incluye una definición estática oculta del formulario `cartas`, aunque el registro público todavía esté apagado.
3. Configurar `VITE_NEWSLETTER_ENABLED=true` y volver a compilar/desplegar.
4. Enviar una solicitud autorizada y comprobar su presencia en Netlify Forms, incluyendo Spam si corresponde. Verificar también el estado de error.
5. Conectar la lista a un proveedor de correo si se necesitan envíos automáticos. Netlify Forms registra solicitudes; no envía por sí solo una newsletter ni confirma doble opt-in.

La integración sigue la documentación de Netlify: https://docs.netlify.com/manage/forms/setup/

## Medición pendiente de cuentas

No se agregó un rastreador sin una cuenta definida. Elegir un servicio ya disponible y comprobar si el alojamiento incorpora medición. Registrar visitas a artículos, paso a otra pieza, solicitudes aceptadas y contactos. Una solicitud recibida no equivale a una suscripción confirmada. Search Console requiere acceso a la propiedad; enviar el sitemap tras publicar. No hay evidencia disponible para reportar métricas reales de crecimiento.

## Trabajo editorial continuo

Cadencia propuesta: dos piezas principales por mes y una carta mensual. Mantener un registro de fuentes, fecha de consulta, correcciones y alcance de investigación. Antes de publicar, revisar hechos y evitar atribuir a Lucas experiencias o trayectoria no documentadas.

Las decisiones comerciales se validan cuando haya interés observado; no se incorporó una oferta de servicios que suponga capacidades o clientes no confirmados.
