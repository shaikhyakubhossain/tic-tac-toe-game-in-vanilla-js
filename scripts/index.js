const gridContainer = document.getElementById('gridContainer');

window.onload = () => {
    console.log("window loaded");
    generateGrid(9)
}

const generateGrid = (size) => {
    for(let i = 0; i < size; i++){
        const createElem = document.createElement('div');
        createElem.classList.add('grid-block');
        createElem.onclick = handleClick;
        // createElem.textContent = "1"
        gridContainer.appendChild(createElem);
    }
}

const handleClick = (event) => {
    const current = event.target;
    current.textContent = "O";
    checkMatch();
}

const checkMatch = () => {
    for(let i = 0; i < 3; i++){
        if(gridContainer.children[i].textContent !== '' && gridContainer.children[i].textContent === gridContainer.children[i + 1].textContent && gridContainer.children[i].textContent === gridContainer.children[i + 2].textContent){
            alert("match");
        }
    }
}