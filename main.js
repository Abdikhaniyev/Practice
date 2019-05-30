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

const widget4 = document.getElementById('widget4');
let events__d = [
  {"title": "ONPZ", "value": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci molestiae et eum aliquam beatae aliquid laudantium iste vero neque delectus fugit ullam perferendis explicabo accusantium.</p>", "date": "19.05.2019"},
  {"title": "ONPZ", "value": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis doloremque veniam laudantium at, provident, maxime molestias possimus debitis inventore itaque.</p>", "date": "20.05.2019"},
  {"title": "MNPZ", "value": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sunt sit deserunt, obcaecati enim odio.</p>", "date": "21.05.2019"},
  {"title": "MNPZ", "value": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci veniam soluta est et doloribus. Ipsum dolorum officia ipsa rerum sunt!</p>", "date": "22.05.2019"},
  {"title": "YANOS", "value": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, sit. Est deserunt obcaecati, esse neque!</p>", "date": "23.05.2019"}
];

events__d.forEach(obj =>{
  let events = document.createElement('div');
  events.className = 'events';
  let events__head = document.createElement('div');
  events__head.className = 'events__head';
  let events__title = document.createElement('div');
  events__title.className = 'events__title';
  let events__logo = document.createElement('div');
  events__logo.className = 'events__logo';
  let events__body = document.createElement('div');
  events__body.className = 'events__body';
  let events__date = document.createElement('div');
  events__date.className = 'events__date';

  events__title.innerHTML = obj.title;
  events__logo.innerHTML = '<i class="fas fa-city"></i><br>ER';
  events__body.innerHTML = obj.value;
  events__date.innerHTML = obj.date;

  if (obj.title == 'ONPZ'){
    events__title.style.background = '#2279d8';
    events__head.style.borderLeft = '2px solid #2279d8';
  }
  if (obj.title == 'MNPZ'){
    events__title.style.background = '#03a6a6';
    events__head.style.borderLeft = '2px solid #03a6a6';
  }
  if (obj.title == 'YANOS'){
    events__title.style.background = '#763fc1';
    events__head.style.borderLeft = '2px solid #763fc1';
  }

  widget4.appendChild(events);
  events.appendChild(events__head);
  events__head.appendChild(events__title);
  events__head.appendChild(events__logo);
  events.appendChild(events__body);
  events.appendChild(events__date);
})
