const matrix = [];

function fillMatrix(matrixName, m, n) {
  for (var i = 0; i < n; i++) {
    matrixName[i] = [];
    for (var j = 0; j < m; j++) {
      matrixName[i][j] = getRandom();
    }
  }
}

function getRandom() {
  var min = 0;
  var max = 100;
  return Math.floor(Math.random() * (max - min)) + min;
}

function sortByColumn(matrix, colIndex) {
  let newMatrix = [...matrix].sort(sortFunction);

  function sortFunction(a, b) {
    if (a[colIndex] === b[colIndex]) {
      return 0;
    } else {
      return a[colIndex] > b[colIndex] ? -1 : 1;
    }
  }

  return newMatrix;
}

function renderMatrix(matrixName, id) {
  var table = document.createDocumentFragment();
  for (var i = 0; i < matrixName.length; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < matrixName[i].length; j++) {
      var td = document.createElement("td");
      td.innerHTML = matrixName[i][j];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.getElementById(id).appendChild(table);
}

fillMatrix(matrix, 5, 4);
renderMatrix(matrix, "table1");
const sortedMatrix = sortByColumn(matrix, 0);
renderMatrix(sortedMatrix, "table2");

