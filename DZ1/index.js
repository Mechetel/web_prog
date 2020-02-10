const table = document.querySelector('table');

let i = 0;

table.insertAdjacentHTML(
  'beforeend',
  `
    <tr>
      <td>Номер свойства</td>
      <td>Название свойства</td>
      <td>Значение свойства</td>
    </tr>
  `
);

for (let item in window) {
  table.insertAdjacentHTML(
    'beforeend',
    `
      <tr>
        <td>${i}</td>
        <td>${item}</td>
        <td>${window[item]}</td>
      </tr>
    `
  );
  i++;
}
