window.addEventListener("load", solve);

function solve() {
  const bloodTypeEl = document.querySelector('#type');
  const ageEl = document.querySelector('#age');
  const genderEl = document.querySelector('#gender');
  const registerBtn = document.querySelector('#register-btn');

  const registerListUl = document.querySelector('#registered-list');
  const confirmedListUl = document.querySelector('#confirmed-list');

  registerBtn.addEventListener('click', handleRegister);

  function handleRegister(e){
    e.preventDefault();
  
    const type = bloodTypeEl.value.trim();
    const age = ageEl.value.trim();
    const gender = genderEl.value.trim();

    if (!type || !age || !gender){
    return;
  }

    const liEL = document.createElement('li');
    const articalEl = document.createElement('article');
    const  Ptype = document.createElement('p');
    const  Page = document.createElement('p');
    const  Pgender = document.createElement('p');
    Ptype.textContent = `Blood Type: ${type}`;
    Pgender.textContent = `Gender: ${gender}`;
    Page.textContent = `Age: ${age}`;
    articalEl.appendChild(Ptype);
    articalEl.appendChild(Pgender);
    articalEl.appendChild(Page);

    const divEl = document.createElement('div');
    divEl.classList.add('buttons');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('done-btn');
    confirmBtn.textContent = 'Confirm';
    divEl.appendChild(editBtn);
    divEl.appendChild(confirmBtn);

    bloodTypeEl.value = '';
    ageEl.value = '';
    genderEl.value = 0;

    liEL.appendChild(articalEl);
    liEL.appendChild(divEl);

    registerListUl.appendChild(liEL);

    editBtn.addEventListener('click', handleEdit);
    confirmBtn.addEventListener('click', handleConfirm);


    function handleEdit(){
      liEL.remove();
      bloodTypeEl.value = type;
      ageEl.value = age;
      genderEl.value = gender;
    }

    function handleConfirm(){
      liEL.remove();
      editBtn.remove();
      confirmBtn.remove();
      const clearBtn = document.createElement('button');
      clearBtn.classList.add('clear-btn');
      clearBtn.textContent = 'Clear';
      liEL.appendChild(clearBtn);
      confirmedListUl.appendChild(liEL);
      clearBtn.addEventListener('click', handleClear);
    }

    function handleClear(){
      liEL.remove();
    }
  }
}
//pravq promqna
//vtora promqna