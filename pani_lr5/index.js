function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function clear_table() {
  window[0].document.getElementById("table").innerHTML = "";
}

function check_input() {
  const input = document.getElementById('super_input').value;
  if (/^[0-9]+$/.test(input) && input.length > 0) {
    let forms_to_table = [];
    let forms_collection = window[1].document.forms;
    for (var i = 0; i < forms_collection.length; i++) {
      forms_to_table.push({ number: i + 1, id: forms_collection[i].id, num_of_child_nodes: forms_collection[i].childElementCount })
    }
    let table = window[0].document.getElementById("table");
    let data = Object.keys(forms_to_table[0]);
    generateTableHead(table, data);
    generateTable(table, forms_to_table);

    var rows = table.getElementsByTagName("tr");

    for(var i = 1;i < rows.length; i++){
      if (i % 2 == 0) {
        rows[i].style = "font-family: cursive; font-size: 18px";
      }
    }
  }
}
