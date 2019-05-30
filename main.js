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

const widget3 = document.getElementById('widget3');
let org = [
  {"title": "Shagol", "value": "100%"},
  {"title": "Taganrog", "value": "100%"},
  {"title": "Pskov", "value": "99.85%"},
  {"title": "Orenburg", "value": "99.87%"},
  {"title": "Sheremetyevo", "value": "99.62%"},
  {"title": "Engels", "value": "97.43%"},
  {"title": "Novosibirsk", "value": "99.81%"}
];

org.forEach(obj => {
  let organizations = document.createElement('div');
  organizations.className = 'organizations';
  let name__org = document.createElement('div');
  name__org.className = 'name__org';
  let percent__d = document.createElement('div');
  percent__d.className = 'percent__d';
  let percent = document.createElement('div');
  percent.className = 'percent';
  let percent__n = document.createElement('div');
  percent__n.className = 'percent__n';

  name__org.innerHTML = obj.title;
  percent__n.innerHTML = obj.value;
  percent.style.width = obj.value;

  widget3.appendChild(organizations);
  organizations.appendChild(name__org);
  organizations.appendChild(percent__d);
  organizations.appendChild(percent__n);
  percent__d.appendChild(percent);

})
