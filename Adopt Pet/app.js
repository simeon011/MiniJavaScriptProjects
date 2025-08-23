window.addEventListener("load", solve);




function solve() {
  const typeOfAnimalEl = document.querySelector('#type');
  const AgeEl = document.querySelector('#age');
  const genderEl = document.querySelector('#gender');

  const btnAdopeEl = document.querySelector('#adopt-btn');

  const adoptionInfoUl = document.querySelector('#adoption-info');
  const adoptionListUl = document.querySelector('#adopted-list');
  // const divPetinfo = document.querySelector('#pet-info');

  btnAdopeEl.addEventListener('click', handleAdopt);

  function handleAdopt(e){

    e.preventDefault();
    
    const type = typeOfAnimalEl.value.trim();
    const age = AgeEl.value.trim();
    const gender = genderEl.value.trim();

    if (!type || !age || !gender){
      return;
    }

    const liEl = document.createElement('li');
    const articleEl = document.createElement('article');
    const divEl = document.createElement('div');

    const pType = document.createElement('p');
    const pGender = document.createElement('p');
    const pAge = document.createElement('p');
    pType.textContent = `Pet:${type}`;
    pGender.textContent = `Gender:${gender}`;
    pAge.textContent = `Age:${age}`;
    articleEl.appendChild(pType);
    articleEl.appendChild(pGender);
    articleEl.appendChild(pAge);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.textContent = 'Done';

    divEl.appendChild(editBtn);
    divEl.appendChild(doneBtn);

    liEl.appendChild(articleEl);
    liEl.appendChild(divEl);

    adoptionInfoUl.appendChild(liEl);
    

    typeOfAnimalEl.value = '';
    AgeEl.value = '';
    genderEl.value = '';

    editBtn.addEventListener('click', handleEdit);
    doneBtn.addEventListener('click', handleDone);

    function handleEdit(){
      liEl.remove();

      typeOfAnimalEl.value = type;
      AgeEl.value = age;
      genderEl.value = gender;
    }

    function handleDone(){
      liEl.remove();
      editBtn.remove();
      doneBtn.remove();
      const clearBtn = document.createElement('button');
      clearBtn.classList.add('clear-btn');
      clearBtn.textContent = 'Clear';
      liEl.appendChild(clearBtn);
      adoptionListUl.appendChild(liEl);

      clearBtn.addEventListener('click', handleClear);
    }

    function handleClear(){
      liEl.remove();
    }
  }

}

  