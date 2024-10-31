const gridContainer = document.getElementById('gridContainer');

window.onload = () => {
    console.log("window loaded");
    generateGrid()
}

const generateGrid = () => {
    for(let i = 0; i < 9; i++){
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
    for(let i = 0; i < 9; i += 3){
        if(gridContainer.children[i].textContent !== '' && gridContainer.children[i].textContent === gridContainer.children[i + 1].textContent && gridContainer.children[i].textContent === gridContainer.children[i + 2].textContent){
            alert("horizontal match");
        }
    }
    for(let i = 0; i < 3; i++ ){
        if(gridContainer.children[i].textContent !== '' && gridContainer.children[i].textContent === gridContainer.children[i + 3].textContent && gridContainer.children[i].textContent === gridContainer.children[i + 6].textContent){
            alert("vertical match");
        }
    }
    for(let i = 0; i < 2; i++){
        if(gridContainer.children[i].textContent !== '' && gridContainer.children[i].textContent === gridContainer.children[i + 4].textContent && gridContainer.children[i].textContent === gridContainer.children[i + 8].textContent){
            alert("diagonal match");
        }
    }
}