let addBtn = document.getElementById('addNewBlocks');
let flex = document.getElementById('flexbox');
let between = document.getElementById('spaceBetween');
let appDiv = document.getElementById('appendDiv');
let center = document.getElementById('center')

addBtn.addEventListener('click', function () {
    for (i = 1; i <= 3; i++) {
        let newBox = document.createElement('div');
        newBox.setAttribute('class', 'box');
        appDiv.appendChild(newBox)
    }
});

flex.addEventListener('click', function () {
    appDiv.classList.toggle('flex')
});

between.addEventListener('click', function () {

    appDiv.classList.toggle('between')
    if (between.textContent === 'Justify-between') {
        between.textContent = 'remove'
    } else {
        between.textContent = 'Justify-between'
    }
    appDiv.classList.remove('center')
});

center.addEventListener('click', function () {
    appDiv.classList.toggle('center')

});