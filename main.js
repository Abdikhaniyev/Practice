var objects = [
  ['50%', 73, 0, 16, 0, 68, 5],
  ['22%', 32, 0,  4, 0, 25, 7],
  ['28%', 41, 0,  6, 0, 41, 0]
],
  sum = [],
  table = document.getElementById("table");

for (var i = 1; i < 4; i++) {
  for (var j = 0; j < 7; j++) {
    table.rows[i].cells[j].innerHTML = objects[i-1][j];
  }
}

for (var i = 1; i < 7; i++){
  sum[i] = objects[0][i] + objects[1][i] + objects[2][i];
  table.rows[0].cells[i].insertAdjacentHTML('beforeend', sum[i]);
}


var name__org = [
  ['Shagol', "100"],
  ['Taganrog', "100"],
  ['Pskov', "99.85"],
  ['Orenburg', "99.87"],
  ['Sheremetyevo', "99.62"],
  ['Engels', "97.43"],
  ['Novosibirsk', "99.81"]
],
table__2 = document.getElementById('table__2');

for (var i = 1; i < 8; i++) {
  var j = 0;
  table__2.rows[i].cells[j].innerHTML = name__org[i-1][j];
}

for (var i = 1; i < 8; i++) {
  var j = 2;
  table__2.rows[i].cells[j].insertAdjacentHTML('afterbegin', name__org[i-1][j-1]);
}
