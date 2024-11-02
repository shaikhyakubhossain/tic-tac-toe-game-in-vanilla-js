const gridContainer = document.getElementById('gridContainer');
const userInput = document.getElementById('userInput');

const playerInput = Math.random() > 0.5 ? 'X' : 'O';
const aiInput = playerInput === 'X' ? 'O' : 'X';
userInput.textContent = `Player: ${playerInput} | AI: ${aiInput}`

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
    if(current.textContent === ''){
        current.textContent = playerInput;
    }
    else{
        return
    }
    checkMatch("horizontal");
    checkMatch("vertical");
    checkMatch("diagonal");
    easyAi();
    checkMatch("horizontal");
    checkMatch("vertical");
    checkMatch("diagonal");
}

const easyAi = () => {
    const aiChoiceArr = [];
    for(let i = 0; i < 9; i++){
        if(gridContainer.children[i].textContent === ''){
            aiChoiceArr.push(i);
        }
    }
    const randomChoice = aiChoiceArr[parseInt(Math.random() * aiChoiceArr.length - 1)];
    console.log(randomChoice)
    gridContainer.children[randomChoice].textContent = aiInput;
}

const checkMatch = (type) => {
    //default diagonal
    let size = 2;
    let second = 4
    let third = 8
    if(type === 'horizontal'){
        size = 9
        second = 1
        third = 2
    }
    else if(type === 'vertical'){
        size = 3
        second = 3
        third = 6
    }
    for(let i = 0; i < size; type !== 'horizontal' ? i++ : i += 3){
        if(gridContainer.children[i].textContent !== '' && gridContainer.children[i].textContent === gridContainer.children[i + second].textContent && gridContainer.children[i].textContent === gridContainer.children[i + third].textContent){
            gridContainer.children[i].style.backgroundColor = '#09FF0050';
            gridContainer.children[i + second].style.backgroundColor = '#09FF0050';
            gridContainer.children[i + third].style.backgroundColor = '#09FF0050';
            alert(gridContainer.children[i].textContent === aiInput ? "AI Wins" : "Player Wins");
            return
        }
    }
    
}