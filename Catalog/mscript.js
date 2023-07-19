// LOAD XML ON READY STATE OF BROWSER
function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        }
    };
    xhttp.open("GET", "plant_catalog.xml", true);
    xhttp.send();
}

// DISPLAY XML IN HTML TABLE
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>COMMON</th><th>BOTANICAL</th><th>ZONE</th><th>LIGHT</th><th>PRICE</th><th>AVAILABILITY</th></tr>";
    var x = xmlDoc.getElementsByTagName("PLANT");
    for (i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("COMMON")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("BOTANICAL")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("ZONE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("LIGHT")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("AVAILABILITY")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }

    // SENDS COLLECTED DATA TO INNERHTML OF DEMO TABLE
    document.getElementById("demo").innerHTML = table;

    // GIVE INDEX TO EVERY TABLE ROW
    var table = document.getElementById("demo"), rIndex;

    // EVERY SELECTED ROW WILL BE DISPLAYED IN INPUT DIV
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick=function() {
            rIndex = this.rowIndex;

            document.getElementById('common').value = this.cells[0].innerHTML;
            document.getElementById('botanical').value = this.cells[1].innerHTML;
            document.getElementById('zone').value = this.cells[2].innerHTML;
            document.getElementById('light').value = this.cells[3].innerHTML;
            document.getElementById('price').value = this.cells[4].innerHTML;
            document.getElementById('availability').value = this.cells[5].innerHTML;
        };
    }

    // SAVE CHANGES BY BUTTON CLICK
    var change = document.getElementById('edit_button');
    change.addEventListener('click', editRow);

    // PASS INPUT VALUE TO INNERHTML OF TABLE
    function editRow(){
        table.rows[rIndex].cells[0].innerHTML = document.getElementById("common").value;
        table.rows[rIndex].cells[1].innerHTML = document.getElementById("botanical").value;
        table.rows[rIndex].cells[2].innerHTML = document.getElementById("zone").value;
        table.rows[rIndex].cells[3].innerHTML = document.getElementById("light").value;
        table.rows[rIndex].cells[4].innerHTML = document.getElementById("price").value;
        table.rows[rIndex].cells[5].innerHTML = document.getElementById("availability").value;
    }
}