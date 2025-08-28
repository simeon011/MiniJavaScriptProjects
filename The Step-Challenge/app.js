const nameInputEl = document.querySelector('#p-name');
const stepsInputEl = document.querySelector('#steps');
const caloriesinputEl = document.querySelector('#calories');
const addBtn = document.querySelector('#add-record');
const editBtn = document.querySelector('#edit-record');
const loadBtn = document.querySelector('#load-records');

const ulEl = document.querySelector('#list');

loadBtn.addEventListener('click', handleLoad);
addBtn.addEventListener('click', handleAdd);

const BASE_URL = 'http://localhost:3030/jsonstore/records/';
let idPerson = null;

async function handleLoad(){
    const stepRes = await fetch(BASE_URL);
    const stepData = await stepRes.json();
    console.log(stepData);
    
    const stepsArr = Object.values(stepData);

    ulEl.innerHTML = '';

    stepsArr.forEach(el => {
        const liEl = document.createElement('li');
        liEl.classList.add('record');
        const divEl = document.createElement('div');
        divEl.classList.add('info');
        const divBtnEl = document.createElement('div');
        divBtnEl.classList.add('btn-wrapper');

        const pName = document.createElement('p');
        const pSteps = document.createElement('p');
        const pClaories = document.createElement('p');
        pName.textContent = el.name;
        pSteps.textContent = el.steps;
        pClaories.textContent = el.calories;
        divEl.appendChild(pName);
        divEl.appendChild(pSteps);
        divEl.appendChild(pClaories);

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';
        const deletBtn = document.createElement('button');
        deletBtn.classList.add('delete-btn');
        deletBtn.textContent = 'Delete';
        divBtnEl.appendChild(changeBtn);
        divBtnEl.appendChild(deletBtn);

        liEl.appendChild(divEl);
        liEl.appendChild(divBtnEl);

        ulEl.appendChild(liEl);

        changeBtn.addEventListener('click', handleChange);
        deletBtn.addEventListener('click', handleDel);
        editBtn.addEventListener('click', handleEdit);

        function handleChange(){
            nameInputEl.value = el.name;
            stepsInputEl.value = el.steps;
            caloriesinputEl.value = el.calories;

            editBtn.disabled = false;
            addBtn.disabled = true;

            idPerson = el._id;
        }

        async function handleDel(){
            await fetch(`${BASE_URL}${el._id}`, {
                method: 'DELETE',
            });

            await handleLoad();
        }
       
    })
}

async function handleEdit(){
    const name = nameInputEl.value.trim();
    const steps = stepsInputEl.value.trim();
    const calories = caloriesinputEl.value.trim();

    await fetch(`${BASE_URL}${idPerson}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, steps, calories })
    });
    nameInputEl.value = '';
    stepsInputEl.value = '';
    caloriesinputEl.value = '';

    idPerson = null;

    editBtn.disabled = true;
    addBtn.disabled = false;

    await handleLoad();
}

async function handleAdd(){
    const name = nameInputEl.value.trim();
    const steps = stepsInputEl.value.trim();
    const calories = caloriesinputEl.value.trim();

    if (!name || !steps || !calories){
        return;
    }

    await fetch(`${BASE_URL}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, steps, calories })
    });

    nameInputEl.value = '';
    stepsInputEl.value = '';
    caloriesinputEl.value = '';

    await handleLoad();
}



