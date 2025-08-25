const movieTitleEl = document.getElementById('title');
const directorEl = document.getElementById('director');
const yearEl = document.getElementById('year');
const addMovieBtn = document.getElementById('add-movie');
const editBtn = document.getElementById('edit-movie');
const loadBtn = document.getElementById('load-movies');
const divListEl = document.getElementById('movie-list');

const BASE_URL = 'http://localhost:3030/jsonstore/movies/';
let idMovie = null;

loadBtn.addEventListener('click', handleLoad);
addMovieBtn.addEventListener('click', handleAdd);
editBtn.addEventListener('click', handleEdit);

async function handleLoad() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    const moviesArr = Object.values(data);

    divListEl.innerHTML = '';

    moviesArr.forEach(movie => {
        const divEl = document.createElement('div');
        divEl.classList.add('movie');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const pTitle = document.createElement('p');
        pTitle.textContent = movie.title;
        const pDirector = document.createElement('p');
        pDirector.textContent = movie.director;
        const pYear = document.createElement('p');
        pYear.textContent = movie.year;

        contentDiv.appendChild(pTitle);
        contentDiv.appendChild(pDirector);
        contentDiv.appendChild(pYear);

        const btnDiv = document.createElement('div');
        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        btnDiv.appendChild(changeBtn);
        btnDiv.appendChild(deleteBtn);

        divEl.appendChild(contentDiv);
        divEl.appendChild(btnDiv);
        divListEl.appendChild(divEl);

        changeBtn.addEventListener('click', () => {
            divEl.remove();
            movieTitleEl.value = movie.title;
            directorEl.value = movie.director;
            yearEl.value = movie.year;

            idMovie = movie._id;
            editBtn.disabled = false;
            addMovieBtn.disabled = true;
        });

        deleteBtn.addEventListener('click', async () => {
            await fetch(`${BASE_URL}${movie._id}`, { method: 'DELETE' });
            if (idMovie === movie._id) {
                clearForm();
                idMovie = null;
                editBtn.disabled = true;
                addMovieBtn.disabled = false;
            }
            await handleLoad();
        });
    });
}

async function handleAdd(e) {
    e.preventDefault();

    const title = movieTitleEl.value.trim();
    const director = directorEl.value.trim();
    const year = yearEl.value.trim();

    if (!title || !director || !year) return;

    await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, director, year })
    });

    clearForm();
    await handleLoad();
}

async function handleEdit(e) {
    e.preventDefault();
    if (!idMovie) return;

    const title = movieTitleEl.value.trim();
    const director = directorEl.value.trim();
    const year = yearEl.value.trim();

    await fetch(`${BASE_URL}${idMovie}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, director, year })
    });

    clearForm();
    idMovie = null;
    editBtn.disabled = true;
    addMovieBtn.disabled = false;

    await handleLoad();
}

function clearForm() {
    movieTitleEl.value = '';
    directorEl.value = '';
    yearEl.value = '';
}