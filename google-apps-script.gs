/**
 * Promosa Dental — Guardar cotizaciones en Google Sheets.
 * Pega este código en Extensiones → Apps Script de tu hoja e impleméntalo como "Aplicación web".
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Cotizaciones') || ss.insertSheet('Cotizaciones');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Registrado','No.','Fecha','Cliente','Empresa','Telefono','Email','Ciudad','Productos','Total','Planes de pago','Asesor']);
    }
    var d = JSON.parse(e.postData.contents);
    var prods = (d.productos || []).map(function (p) {
      return p.codigo + ' - ' + p.descripcion + ' (x' + p.cantidad + ' = $' + p.importe + ')';
    }).join('\n');
    sheet.appendRow([new Date(), d.no, d.fecha, d.nombre, d.empresa, d.telefono, d.email, d.ciudad, prods, d.total, d.planes, d.asesor]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Cotizador Promosa: endpoint activo.');
}
