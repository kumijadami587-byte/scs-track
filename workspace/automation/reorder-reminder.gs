// Reorder reminder -- SCS3.5 FALLBACK DRAFT for the We Do, used only when the tool or the connection is down.
// AI-assisted, directed by anur: reviewed line by line, tested by hand, and patched by hand for SCS3.5.
// with faults left in on purpose.  Read it, test it by hand, find them.  The trainer says out loud that it was planted.

// Checks stock levels and emails the owner a list of items to reorder
function remindReorder() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();                      // get the active spreadsheet
  var items = ss.getSheetByName('Lists').getDataRange().getValues();   // get all item rows
  var records = ss.getSheetByName('Records').getDataRange().getValues(); // get all record rows
  var stock = {};                                                      // object to hold stock per item
  for (var r = 1; r < records.length; r++) {                           // loop through records, skipping the header
    var item = records[r][1];                                          // item name
    var way = records[r][2];                                           // In or Out
    var qty = records[r][3];                                           // quantity
    if (!stock[item]) stock[item] = 0;                                 // start the item at zero
    if (String(way).trim().toLowerCase() === 'in') stock[item] = stock[item] + qty;  // add deliveries (case-insensitive)
    if (String(way).trim().toLowerCase() === 'out') stock[item] = stock[item] - qty; // subtract sales (case-insensitive)
  }
  var low = [['Item', 'Stock now', 'Reorder level']];                  // header row for the output
  for (var i = 1; i < items.length; i++) {                             // loop through items, skipping the header
    var name = items[i][0];                                            // item name
    var level = items[i][4];                                           // reorder level
    if ((stock[name] || 0) <= level) low.push([name, stock[name] || 0, level]); // add items AT or below reorder level
  }
  var out = ss.getSheetByName('Reorder') || ss.insertSheet('Reorder'); // get or create the Reorder sheet
  out.clearContents();                                                 // clear old results
  out.getRange(1, 1, low.length, 3).setValues(low);                    // write the results
  var owner = ss.getSheetByName('Settings').getRange('B1').getValue(); // the owner's email address
  if (low.length > 1) {                                                // only email if something is low
    MailApp.sendEmail(owner, 'Items to reorder', low.slice(1).join('\n')); // send email only (least privilege)
  }
}
