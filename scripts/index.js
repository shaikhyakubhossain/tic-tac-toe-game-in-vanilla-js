window.onload = () => {
    console.log("window loaded");
    generateGrid(9)
}

const generateGrid = (size) => {
    const gridContainer = document.getElementById('gridContainer')
    for(let i = 0; i < size; i++){
        const createElem = document.createElement('div');
        createElem.classList.add('grid-block');
        // createElem.textContent = "1"
        gridContainer.appendChild(createElem);
    }
}