const nameInputEl = document.querySelector('#g-name');
const typeInputEl = document.querySelector('#type');
const playersinputEl = document.querySelector('#players');
const addBtn = document.querySelector('#add-game');
const editBtn = document.querySelector('#edit-game');
const loadBtn = document.querySelector('#load-games');

const gameListDivEl = document.querySelector('#games-list');

loadBtn.addEventListener('click', handleLoad);
addBtn.addEventListener('click', handleAddGame);

const BASE_URL = 'http://localhost:3030/jsonstore/games/';

let idGame = null;

async function handleLoad(){
    const gamesRes = await fetch(BASE_URL);
    const gamesData = await gamesRes.json();
    const gamesArr = Object.values(gamesData);

    gameListDivEl.innerHTML = '';
     
    gamesArr.forEach(el => {
        const gameDivEl = document.createElement('div');
        gameDivEl.classList.add('board-game');

        const contentDivEL = document.createElement('div');
        contentDivEL.classList.add('content');
        const pName = document.createElement('p');
        pName.textContent = el.name;
        const pPlayers = document.createElement('p');
        pPlayers.textContent = el.players
        const pType = document.createElement('p');
        pType.textContent = el.type;
        contentDivEL.appendChild(pName);
        contentDivEL.appendChild(pPlayers);
        contentDivEL.appendChild(pType);


        const BtnDivEl = document.createElement('div');
        BtnDivEl.classList.add('buttons-container');

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const delBtn = document.createElement('button');
        delBtn.classList.add('delete-btn');
        delBtn.textContent = 'Delete';
        BtnDivEl.appendChild(changeBtn);
        BtnDivEl.appendChild(delBtn);

        gameDivEl.appendChild(contentDivEL);
        gameDivEl.appendChild(BtnDivEl);

        gameListDivEl.appendChild(gameDivEl);

        changeBtn.addEventListener('click', handleChangeGame);
        editBtn.addEventListener('click', handleEditDate);
        delBtn.addEventListener('click', handleDelGame);

        function handleChangeGame(){
            nameInputEl.value = el.name;
            typeInputEl.value = el.type;
            playersinputEl.value = el.players;
            
            editBtn.disabled = false;
            addBtn.disabled = true;

            idGame = el._id;
        }

        async function handleDelGame(){
            await fetch(`${BASE_URL}${el._id}`, {
                method: 'DELETE',
            });

            await handleLoad();
        }


        
    })

}

async function handleAddGame(){
    const name = nameInputEl.value.trim();
    const type = typeInputEl.value.trim();
    const players = playersinputEl.value.trim();

    if (!name || !type || !players) {
        return;
    }

    await fetch(BASE_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, type, players })
    });

    nameInputEl.value = '';
    typeInputEl.value = '';
    playersinputEl.value = '';

    await handleLoad(); 
}

async function handleEditDate(){
    const name = nameInputEl.value.trim();
    const type = typeInputEl.value.trim();
    const players = playersinputEl.value.trim();

     await fetch(`${BASE_URL}${idGame}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, type, players })
    });
    nameInputEl.value = '';
    typeInputEl.value = '';
    playersinputEl.value = '';

    idGame = null;
    editBtn.disabled = true;
    addBtn.disabled = false;

    await handleLoad();

}





