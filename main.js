//widget 1
const widget1 = document.getElementById('widget1');
let objectsW1 = [{
    'title': 'ONPZ',
    'firstValue': 3426,
    'secondValue': -991
  },
  {
    'title': 'MNPZ',
    'firstValue': 1147,
    'secondValue': 464
  },
  {
    'title': 'YANOS',
    'firstValue': 988,
    'secondValue': 272
  }
];

objectsW1.forEach(obj => {
  let objectD = document.createElement('div');
  objectD.className = 'objects__W1';
  let objectValue = document.createElement('div');
  objectValue.className = 'object__value';
  let zeroLine = document.createElement('div');
  zeroLine.className = 'zero__line';
  let firstValue = document.createElement('div');
  firstValue.className = 'first__value';
  let secondValue = document.createElement('div');
  secondValue.className = 'second__value';
  let objectName = document.createElement('div');
  objectName.className = 'object__name';
  let totalValue = document.createElement('div');
  totalValue.className = 'total__value';

  if (obj.title == 'ONPZ') {
    objectValue.style.background = '-webkit-linear-gradient(90deg, rgb(31, 50, 74), rgba(31, 50, 74, 0))';
    firstValue.style.background = '#2279d8';
    secondValue.style.background = 'rgba(34, 121, 216, .5)';
  }
  if (obj.title == 'MNPZ') {
    objectValue.style.background = '-webkit-linear-gradient(90deg, rgb(26, 57, 67), rgba(26, 57, 67, 0))';
    firstValue.style.background = '#03a6a6';
    secondValue.style.background = 'rgba(3, 166, 166, .5)';
  }
  if (obj.title == 'YANOS') {
    objectValue.style.background = '-webkit-linear-gradient(90deg, rgb(75, 48, 119), rgba(75, 48, 119, 0))';
    firstValue.style.background = '#763fc1';
    secondValue.style.background = 'rgba(118, 63, 193, .5)';
  }

  if (obj.firstValue > 0) {
    firstValue.style.top = 191 - obj.firstValue / 25 + 'px';
    firstValue.style.height = obj.firstValue / 25 + 'px';
  }
  if (obj.secondValue > 0) {
    secondValue.style.top = 191 - obj.firstValue / 25 - obj.secondValue / 25 + 'px';
    secondValue.style.height = obj.secondValue / 25 + 'px';
  }
  if (obj.secondValue < 0) {
    secondValue.style.top = 191 + 'px';
    secondValue.style.height = obj.secondValue / 25 * (-1) + 'px';
    secondValue.style.lineHeight = obj.secondValue / 25 * (-2) + 'px';
  }

  firstValue.innerHTML = obj.firstValue;
  secondValue.innerHTML = obj.secondValue;
  objectName.innerHTML = obj.title;
  totalValue.innerHTML = 'Total:';
  totalValue.insertAdjacentHTML('beforeend', obj.firstValue + obj.secondValue);

  if (obj.title == 'ONPZ') {
    objectName.style.borderTop = '4px solid #2279d8';
  }
  if (obj.title == 'MNPZ') {
    objectName.style.borderTop = '4px solid #03a6a6';
  }
  if (obj.title == 'YANOS') {
    objectName.style.borderTop = '4px solid #763fc1';
  }

  widget1.appendChild(objectD);
  objectD.appendChild(objectValue);
  objectD.appendChild(objectName);
  objectD.appendChild(zeroLine);
  objectValue.appendChild(totalValue);
  objectValue.appendChild(firstValue);
  objectValue.appendChild(secondValue);
})
//widget 1 end;

// widget 2
let objectsW2 = [
    ['50%', 73, 0, 16, 0, 68, 5],
    ['22%', 32, 0, 4, 0, 25, 7],
    ['28%', 41, 0, 6, 0, 41, 0]
  ],
  sum = [],
  table = document.getElementById("table");

for (var i = 1; i < 4; i++) {
  for (var j = 0; j < 7; j++) {
    table.rows[i].cells[j].innerHTML = objectsW2[i - 1][j];
  }
}

for (var i = 1; i < 7; i++) {
  sum[i] = objectsW2[0][i] + objectsW2[1][i] + objectsW2[2][i];
  table.rows[0].cells[i].insertAdjacentHTML('beforeend', sum[i]);
}
// widget 2 end

// widget 3
const widget3 = document.getElementById('widget3');
let objectsW3 = [{
    "title": "Shagol",
    "value": "100%"
  },
  {
    "title": "Taganrog",
    "value": "100%"
  },
  {
    "title": "Pskov",
    "value": "99.85%"
  },
  {
    "title": "Orenburg",
    "value": "99.87%"
  },
  {
    "title": "Sheremetyevo",
    "value": "99.62%"
  },
  {
    "title": "Engels",
    "value": "97.43%"
  },
  {
    "title": "Novosibirsk",
    "value": "99.81%"
  }
];

objectsW3.forEach(obj => {
  let organizations = document.createElement('div');
  organizations.className = 'organizations';
  let nameOrg = document.createElement('div');
  nameOrg.className = 'name__org';
  let percentD = document.createElement('div');
  percentD.className = 'percent__d';
  let percent = document.createElement('div');
  percent.className = 'percent';
  let percentN = document.createElement('div');
  percentN.className = 'percent__n';

  nameOrg.innerHTML = obj.title;
  percentN.innerHTML = obj.value;
  percent.style.width = obj.value;

  widget3.appendChild(organizations);
  organizations.appendChild(nameOrg);
  organizations.appendChild(percentD);
  organizations.appendChild(percentN);
  percentD.appendChild(percent);

})
// widget 3 end

// widget 4

const widget4 = document.getElementById('widget4');
let eventsD = [{
    "title": "ONPZ",
    "shortValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci molestiae et eum aliquam beatae.",
    "longValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.",
    "date": "19.05.2019"
  },
  {
    "title": "ONPZ",
    "shortValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis doloremque veniam laudantium at, provident.",
    "longValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.",
    "date": "20.05.2019"
  },
  {
    "title": "MNPZ",
    "shortValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sunt sit deserunt, obcaecati enim odio.",
    "longValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.",
    "date": "21.05.2019"
  },
  {
    "title": "MNPZ",
    "shortValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci veniam soluta est et doloribus. Ipsum dolorum officia ipsa rerum sunt!",
    "longValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.",
    "date": "22.05.2019"
  },
  {
    "title": "YANOS",
    "shortValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, sit. Est deserunt obcaecati, esse neque!",
    "longValue": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex dolores, incidunt necessitatibus perspiciatis vero sit cupiditate rem possimus facere. Repellendus non cumque tenetur cupiditate, veritatis, nulla nihil sunt necessitatibus blanditiis dolorem velit fuga eum fugit porro. Eum, adipisci asperiores.",
    "date": "23.05.2019"
  }
];

eventsD.forEach(obj => {
  let events = document.createElement('div');
  events.className = 'events';
  events.id = 'short__value';
  let eventsHead = document.createElement('div');
  eventsHead.className = 'events__head';
  let eventsTitle = document.createElement('div');
  eventsTitle.className = 'events__title';
  let eventsLogo = document.createElement('div');
  eventsLogo.className = 'events__logo';
  let shortValue = document.createElement('div');
  shortValue.className = 'events__body';
  let modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'modal';
  let modalTitle = document.createElement('div');
  modalTitle.className = 'modal__title';
  let btnClose = document.createElement('span');
  btnClose.className = 'close';
  let longValue = document.createElement('div');
  longValue.className = 'long__value';
  let eventsDate = document.createElement('div');
  eventsDate.className = 'events__date';

  eventsTitle.innerHTML = obj.title;
  eventsLogo.innerHTML = '<i class="fas fa-city"></i><br>ER';
  shortValue.innerHTML = obj.shortValue;
  modalTitle.insertAdjacentHTML('beforeend', obj.title);
  longValue.insertAdjacentHTML('beforeend', obj.longValue);
  longValue.insertAdjacentHTML('beforeend', '<br><br>' + obj.date);
  btnClose.innerHTML = '&times;';
  eventsDate.innerHTML = obj.date;

  if (obj.title == 'ONPZ') {
    eventsTitle.style.background = '#2279d8';
    eventsHead.style.borderLeft = '2px solid #2279d8';
    modal.style.borderLeft = '2px solid #2279d8';
    modal.style.borderTop = '8px solid #2279d8';
  }
  if (obj.title == 'MNPZ') {
    eventsTitle.style.background = '#03a6a6';
    eventsHead.style.borderLeft = '2px solid #03a6a6';
    modal.style.borderLeft = '2px solid #03a6a6';
    modal.style.borderTop = '8px solid #03a6a6';
  }
  if (obj.title == 'YANOS') {
    eventsTitle.style.background = '#763fc1';
    eventsHead.style.borderLeft = '2px solid #763fc1';
    modal.style.borderLeft = '2px solid #763fc1';
    modal.style.borderTop = '8px solid #763fc1';
  }

  widget4.appendChild(events);
  widget4.appendChild(modal);
  events.appendChild(eventsHead);
  events.appendChild(shortValue);
  events.appendChild(eventsDate);
  modal.appendChild(btnClose);
  modal.appendChild(modalTitle);
  modal.appendChild(longValue);
  eventsHead.appendChild(eventsTitle);
  eventsHead.appendChild(eventsLogo);

  events.onclick = function() {
    modal.style.display = 'block';
  }

  btnClose.onclick = function() {
    modal.style.display = 'none';
  }
})
// widget 4 end
