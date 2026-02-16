const scriptURL = "https://script.google.com/macros/s/AKfycbwkYgBn0UdlTVNy37fd5pMUPkCvVOzWZnF330ooDuSTxumVlpfaJxrvKIkfKdlgXaPW/exec";
const formCon = document.getElementById("form-contact");

formCon.addEventListener("submit", (e) => {
    
    e.preventDefault(); 

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(formCon)
    })
    .then((response) => { 
        alert("Form submitted successfully!");
          
        setTimeout(() => {
            localStorage.removeItem('cart'); 
            window.location.reload();
        }, 3000);
    }) 
    .catch((error) => {
        alert("Error submitting form: " + error.message);
    });
}); 
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    var newRow = [];

    for (var i = 0; i < headers.length; i++) {
      var header = headers[i];
     
      var value = e.parameter[header] || e.parameter[header.toLowerCase()] || e.parameter[header.charAt(0).toUpperCase() + header.slice(1)];
      newRow.push(value || "");
    }

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}