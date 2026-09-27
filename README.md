# Cotizador Promosa Dental

Herramienta web para generar cotizaciones de Promosa Dental en PDF.

## Cómo usar
1. Abre la página.
2. Llena los datos del cliente y los productos (código, descripción, cantidad, precio).
3. La cotización se arma en vivo (calcula Subtotal, IVA 16% y TOTAL).
4. Pulsa **Descargar PDF** y elige *"Guardar como PDF"*.

Es una sola página estática (`index.html`), sin dependencias ni servidor.

## Deploy
Sitio estático. En Vercel: *Add New → Project → Import* este repo → **Deploy** (sin configuración).
