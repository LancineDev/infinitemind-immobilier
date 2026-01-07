// Google Apps Script: deploy as Web App (Anyone, even anonymous) to accept POST JSON
// Usage:
// 1. Replace SPREADSHEET_ID with your Google Sheets ID
// 2. Replace SHEET_NAME with the target sheet name (first row should be headers)
// 3. Deploy: Publish -> Deploy as web app (or Deploy > New deployment) and set access to "Anyone".

const SPREADSHEET_ID = 'REPLACE_WITH_YOUR_SPREADSHEET_ID';
const SHEET_NAME = 'Sheet1';

// Expected columns (exact order):
// id | ownerId | title | city | district | type | price | description | phone | images | createdAt | status

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, message: 'No POST data' });
    }
    const payload = JSON.parse(e.postData.contents);
    const action = payload.action || 'add';

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Load data for lookups
    const data = sh.getDataRange().getValues();
    const headers = data[0] || [];

    if (action === 'add') {
      const images = Array.isArray(payload.images) ? payload.images.join('|') : String(payload.images || '');
      const row = [
        payload.id || '',
        payload.ownerId || '',
        payload.title || '',
        payload.city || '',
        payload.district || '',
        payload.type || '',
        payload.price != null ? payload.price : '',
        payload.description || '',
        payload.phone || '',
        images,
        payload.createdAt || new Date().toISOString(),
        payload.status || 'pending',
      ];
      sh.appendRow(row);
      return jsonResponse({ success: true });
    }

    if (action === 'update') {
      const id = String(payload.id || '');
      if (!id) return jsonResponse({ success: false, message: 'Missing id' });
      // find row index
      for (let r = 1; r < data.length; r++) {
        if (String(data[r][0]) === id) {
          const existingOwnerId = String(data[r][1] || '');
          if (existingOwnerId !== String(payload.ownerId || '')) {
            return jsonResponse({ success: false, message: 'Not authorized' });
          }
          // update allowed columns
          const images = Array.isArray(payload.images) ? payload.images.join('|') : String(payload.images || '');
          const updated = [
            id,
            payload.ownerId || existingOwnerId,
            payload.title || data[r][2],
            payload.city || data[r][3],
            payload.district || data[r][4],
            payload.type || data[r][5],
            payload.price != null ? payload.price : data[r][6],
            payload.description || data[r][7],
            payload.phone || data[r][8],
            images || data[r][9],
            payload.createdAt || data[r][10],
            payload.status || data[r][11],
          ];
          sh.getRange(r + 1, 1, 1, updated.length).setValues([updated]);
          return jsonResponse({ success: true });
        }
      }
      return jsonResponse({ success: false, message: 'Not found' });
    }

    if (action === 'delete') {
      const id = String(payload.id || '');
      if (!id) return jsonResponse({ success: false, message: 'Missing id' });
      for (let r = 1; r < data.length; r++) {
        if (String(data[r][0]) === id) {
          const existingOwnerId = String(data[r][1] || '');
          if (existingOwnerId !== String(payload.ownerId || '')) {
            return jsonResponse({ success: false, message: 'Not authorized' });
          }
          sh.deleteRow(r + 1);
          return jsonResponse({ success: true });
        }
      }
      return jsonResponse({ success: false, message: 'Not found' });
    }

    return jsonResponse({ success: false, message: 'Unknown action' });
  } catch (err) {
    return jsonResponse({ success: false, message: String(err) });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaders() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  const headers = ['id','ownerId','title','city','district','type','price','description','phone','images','createdAt','status'];
  const firstRow = sh.getRange(1,1,1,headers.length).getValues()[0];
  const empty = firstRow.every((c) => c === "" || c == null);
  if (empty) {
    sh.getRange(1,1,1,headers.length).setValues([headers]);
  }
}
