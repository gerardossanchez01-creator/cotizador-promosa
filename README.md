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

## Guardar cotizaciones en Google Sheets
1. Crea una hoja nueva en https://sheets.new y nómbrala "Cotizaciones Promosa".
2. Menú **Extensiones → Apps Script**. Borra el código y pega el de `google-apps-script.gs`. Guarda.
3. **Implementar → Nueva implementación** → tipo **Aplicación web**.
4. *Ejecutar como:* **Yo** · *Quién tiene acceso:* **Cualquiera** → **Implementar** y autoriza.
5. Copia la **URL** (termina en `/exec`).
6. En el cotizador: **⚙️ Conectar Sheets** → pega la URL. Cada "Guardar cotización" agrega una fila.
