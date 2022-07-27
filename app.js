

function makeRows(rows, cols) {
    const container = document.getElementById('items');

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};


    




makeRows(16, 16);


const divs = document.querySelectorAll(".grid-item");

divs.forEach(div => {
    div.addEventListener('mouseover', function handleClick(event) {
        div.setAttribute('style', 'background-color: yellow;');
    });
});