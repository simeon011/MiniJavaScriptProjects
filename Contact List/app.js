window.addEventListener("load", solve);

function solve() {
  const NameEL = document.querySelector('#name');
  const phoneEl = document.querySelector('#phone');
  const categoryEl = document.querySelector('#category');
  
  const addBtn = document.querySelector('#add-btn');

  const CheckUlEl = document.querySelector('#check-list');
  const ContactUlEl = document.querySelector('#contact-list');

  addBtn.addEventListener('click', handleAdd);

  function handleAdd(e){
    e.preventDefault();

    const name = NameEL.value.trim();
    const phone = phoneEl.value.trim();
    const category = categoryEl.value;

    if(!name || !phone || !category) {
      return;
    }

    const liEl = document.createElement('li');
    const articleEL = document.createElement('article');
    const divEl = document.createElement('div');
    divEl.classList.add('buttons');

    const pName  = document.createElement('p');
    const pPhone = document.createElement('p');
    const pCategory = document.createElement('p');
    pName.textContent  = `name:${name}`;
    pPhone.textContent = `phone:${phone}`;
    pCategory.textContent = `category:${category}`;
    articleEL.appendChild(pName);
    articleEL.appendChild(pPhone);
    articleEL.appendChild(pCategory);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');

    divEl.appendChild(editBtn);
    divEl.appendChild(saveBtn);

    liEl.appendChild(articleEL);
    liEl.appendChild(divEl);

    CheckUlEl.appendChild(liEl);

    NameEL.value = '';
    phoneEl.value = '';
    categoryEl.value = '';

    editBtn.addEventListener('click', handleEdit);
    saveBtn.addEventListener('click', handleSave);

    function handleEdit(){
      liEl.remove();

      NameEL.value = name;
      phoneEl.value = phone;
      categoryEl.value = category;
    }

    function handleSave(){
      liEl.remove();
      ContactUlEl.appendChild(liEl);
      editBtn.remove();
      saveBtn.remove();
      const delBtn = document.createElement('button');
      delBtn.classList.add('del-btn');
      liEl.appendChild(delBtn);
      delBtn.addEventListener('click', handelDel);
      
    }

    function handelDel(){
      liEl.remove();
    }
  }
}