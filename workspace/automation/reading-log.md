# Reading log -- SCS3.5

Script: workspace/automation/reorder-reminder.gs
Read to the last line before the first run: yes
Label: AI-assisted, directed by anur

| Line no. | The line, first words | In my own words | Which word |
|---|---|---|---|
| 7 | function remindReorder() { | Starts the main reorder-check function that the Run button or trigger calls. | trigger |
| 8 | var ss = SpreadsheetApp.getActiveSpreadsheet(); | Connects to the active copy of the spreadsheet this script is attached to. | variable |
| 9 | var items = ss.getSheetByName('Lists') | Reads all rows and columns from the Lists tab into memory. | variable |
| 10 | var records = ss.getSheetByName('Records') | Reads all rows and columns from the Records tab into memory. | variable |
| 11 | var stock = {}; | Creates an empty lookup dictionary to track running stock per item name. | variable |
| 12 | for (var r = 1; r < records.length; r++) { | Loops through every row in Records starting at index 1 to skip the header row. | loop |
| 13 | var item = records[r][1]; | Gets the item name from column B of the current Records row. | variable |
| 14 | var way = records[r][2]; | Gets the movement direction (in or out) from column C of the current row. | variable |
| 15 | var qty = records[r][3]; | Gets the numeric quantity from column D of the current row. | variable |
| 16 | if (!stock[item]) stock[item] = 0; | Sets the item's starting stock to 0 the first time it appears in Records. | condition |
| 17 | if (String(way).trim().toLowerCase() === 'in') | Adds the quantity to the item's running stock when the row is a delivery ('in'). | condition |
| 18 | if (String(way).trim().toLowerCase() === 'out') | Subtracts the quantity from the item's running stock when the row is a sale ('out'). | condition |
| 20 | var low = [['Item', 'Stock now', 'Reorder level']]; | Creates the output table starting with the three column headers for the Reorder tab. | variable |
| 21 | for (var i = 1; i < items.length; i++) { | Loops through every item in Lists starting at row index 1 to skip the header row. | loop |
| 22 | var name = items[i][0]; | Gets the item name from column A of the current Lists row. | variable |
| 23 | var level = items[i][4]; | Gets the reorder level threshold from column E of the current Lists row. | variable |
| 24 | if ((stock[name] || 0) <= level) low.push | Adds the item to the low-stock list if its current stock is at or below its reorder level. | condition |
| 26 | var out = ss.getSheetByName('Reorder') | Opens the Reorder tab if it exists, or creates a new Reorder tab if missing. | variable |
| 27 | out.clearContents(); | Clears old output rows from the Reorder tab before writing fresh results. | sequence |
| 28 | out.getRange(1, 1, low.length, 3).setValues(low); | Writes the header and all low-stock item rows onto the Reorder tab. | sequence |
| 29 | var owner = ss.getSheetByName('Settings') | Reads the recipient email address stored in cell B1 of the Settings tab. | variable |
| 30 | if (low.length > 1) { | Checks whether at least one item below or at reorder level was found. | condition |
| 31 | MailApp.sendEmail(owner, 'Items to reorder', | Sends one reorder alert email to the owner using send-only MailApp permissions. | sequence |
