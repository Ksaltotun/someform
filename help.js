const resultTable = document.createElement('table');
const resultHead = ['Имя', 'Фамилия', 'Отчество', 'Дата рождения', 'Пол', 'Страна', 'Инфо'];

function makeTable(arr) {
    resultTable.innerHTML = '';
    for (let i = 0; i < 2; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            if (i === 0) {
                let cell = document.createElement('th');
                cell.innerText = resultHead[i];
                row.appendChild(cell);
            }
            if (i === 1) {
                if (j < 7) {
                    let cell = document.createElement('td');
                    cell.innerText = arr[j];
                    row.appendChild(cell);
                } else {
                    let cell = document.createElement('td');
                    cell.innerText = 'Доп. инфо';
                    row.appendChild(cell);
                }
            }
        }
        resultTable.appendChild(row);
    }
    
} 

forms[0].style.display = 'none';
forms[2].style.display = 'block';