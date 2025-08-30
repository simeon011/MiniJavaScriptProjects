# FirstStepsJavaScript
Here, you can see my first mini projects in the environment, utilizing JavaScript.

Enjoy🤗
## Table of Contents:

<details>
  <summary>1. 🧙Spellbook Unraveling</summary>

  ---
  
 This project is a **string manipulation program** built with JavaScript (ES6).
 
  It demonstrates how commands can dynamically modify a text string.  

  The program runs in the console and is useful for **educational purposes**, **algorithm practice**, or as a **subcomponent in text-processing applications**.

  ---

  ## 🎯 **Features**
  - Remove all characters at odd indexes (`RemoveEven`)
  - Extract substring by index range (`TakePart!start!end`)
  - Reverse a given substring and append it to the end (`Reverse!substring`)
  - Error handling if the substring is not found
  - Console outputs after every operation
  - Final message displaying the concealed spell

  ---

  ## 🛠️ **Technologies Used**
  - **JavaScript (ES6)** – core logic  
  - **Node.js** (optional) – run in terminal  

  ---
  ## (Console Example)**

  ```js
  solve([
    "asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"
  ]);
  ```
  ---

  ## 📷 Preview final result

  <img width="355" height="125" alt="image" src="https://github.com/user-attachments/assets/5ad3f723-6cfd-49f9-bdcc-3543470cba46" />
</details>

<details>
  <summary>2. 🩸Blood Donation</summary>

  ---

  This project is a **responsive blood donor registration application**, built with **HTML5, CSS3, and JavaScript (ES6)**. 
    
    
  👉 It was developed as a **home practice exercise in JavaScript**, with the goal of improving skills in DOM manipulation, event handling, and interactive UI building.  

  The app allows users to enter their personal details (blood type, age, gender) and manage donor entries through an interactive interface.  
  It can be used for **demonstration purposes**, **educational projects**, or as a **starting point for healthcare-related web apps**.  

  ---

  ## 🎯 Features
  - Clean and structured donor registration form  
  - Add donor entries to a **Pending Donor List**  
  - Edit previously entered donor information  
  - Confirm donors and move them to the **Confirmed List**  
  - Clear donors from the confirmed list  
  - Client-side validation (prevents empty submissions)  
  - Responsive and accessible layout  

  ---

  ## 🛠️ Technologies Used
  - **HTML5**  
  - **CSS3 (Flexbox + media queries)**  
  - **Google Fonts (Signika)**  
  - **JavaScript (ES6)**  

  ---

  ## 📷 Preview

  <img width="500" height="877" alt="image" src="https://github.com/user-attachments/assets/0c296c6b-abb7-4e81-be79-e1cd350e8280" />
  <img width="500" height="881" alt="image" src="https://github.com/user-attachments/assets/46907958-8614-4e1e-9547-d95352245e0e" />
  <img width="500" height="877" alt="image" src="https://github.com/user-attachments/assets/63d653ca-b710-42ad-ae53-03a349e63614" />

</details>

<details>
  <summary>3. 🐾Adopt Pet</summary>

  ---

  This project is a **responsive pet adoption application**, built with **HTML5, CSS3, and JavaScript (ES6)**.

  👉 It was developed as a home practice exercise in **JavaScript**, with the goal of improving skills in DOM manipulation, event handling, and interactive UI building.

  The app allows users to enter pet details (type, age, gender) and manage adoption entries through an interactive interface.
  It can be used for **demonstration purposes, educational projects,** or as a **starting point for animal shelter web apps.**

  ---

  ## 🎯 Features

   - Clean and structured adoption form

   - Add pet entries to a Pending Adoption List

   - Edit previously entered pet information

   - Confirm adoption and move pets to the Adopted List

   - Clear pets from the adopted list

   - Client-side validation (prevents empty submissions)

   - Responsive and accessible layout

  ---

  ## 🛠️ Technologies Used

   - HTML5

   - CSS3 (Flexbox + media queries)

   - Google Fonts (Lily Script One)

   - JavaScript (ES6)

  ---

  ## 🚀 How It Works

  1. The user fills out the adoption form with the pet’s details.

  2. Clicking Adopt! adds the pet to the “Check Info” list.

  3. From there:

    - Edit returns the data to the form for corrections.

    - Done moves the pet to the “Adopted Pets” list.

    - Clear deletes the pet permanently.

  ---

  ## 📷 Preview
  <img width="500" height="857" alt="image" src="https://github.com/user-attachments/assets/25989421-b6e3-496a-82f4-b608b6a960a2" />
  <img width="500" height="810" alt="image" src="https://github.com/user-attachments/assets/56485ce6-68a2-4e85-97a3-3baa4b7262a9" />
  <img width="500" height="847" alt="image" src="https://github.com/user-attachments/assets/2ee5a747-ff43-4d7d-abf5-40dad3c8f4bb" />



</details>

<details>
  <summary>4. 📇Contact List</summary>

  ---

  This project is a **responsive contact management application**, built with **HTML5, CSS3, and JavaScript (ES6)**.

  👉 It was developed as a home practice exercise in JavaScript, with the goal of improving skills in **DOM manipulation, event handling,** and **interactive UI design**.

  The app allows users to enter contact details (name, phone, category) and manage them through an interactive interface.
  It can be used for demonstration purposes, educational projects, or as a lightweight starting point for contact management tools.

  --- 

  ## 🎯 Features

   - Clean and structured Add Contact Form

   - Add entries to a Check List (temporary preview)

   - Edit button – returns data back to the form for corrections

   - Save button – confirms and moves a contact to the Contact List

   - Delete button – permanently removes a contact from the list

   - Client-side validation (prevents empty submissions)

   - Responsive and accessible layout

  ---

  ## 🛠️ Technologies Used

   - **HTML5** – page structure and forms

   - **CSS3** – styling and responsive design:
     
      - gradients, background image, custom shapes (clip-path)

      - button styling with icons (add.png, edit.png, save.png, delete.png)

   - **JavaScript (ES6)** – app logic:

      - add, edit, save, delete contact entries dynamically

      - event listeners for interactive UI
  
  ---

  ## 📂 Project Structure

  - **index.html** – main page containing the form and two sections (Check and Contacts)

  - **app.js** – JavaScript logic for adding, editing, saving, and deleting contacts

  - **styles.css** – styles, responsive design, gradients, icons

  - **images/** – icons and assets (add.png, edit.png, delete.png, save.png, clean-btn.png, bg.png, pexels-gustavo-fring-3890198.jpg)

  ---   

  ## 📱 Responsive Design

   - On wide screens, the form and lists are placed side by side.

   - On smaller screens (below 1000px), layout rearranges vertically for mobile-friendly use.

  ---

  ## 🚀 How It Works

  1. User enters a name, phone, and category.

  2. Clicking the Add button places the contact into the Check List.

  3. From there:

    - Edit → removes the entry and puts the values back into the form.

    - Save → moves the entry to the Contact List.

    - Delete → permanently removes the entry.

  ---

  ## 📷 Preview
  <img width="500" height="782" alt="image" src="https://github.com/user-attachments/assets/55efa73f-82d4-4ebd-9e3c-dd7b4460abb2" />
  <img width="500" height="832" alt="image" src="https://github.com/user-attachments/assets/c4dbdf64-acb3-4fa9-a0fa-2966ec67f63e" />
  <img width="500" height="815" alt="image" src="https://github.com/user-attachments/assets/5c8a1c8e-f099-4b92-b9ff-e9ceeb8ac3e8" />



</details>

<details>
  <summary>5.  🎬Movie Watchlist</summary>

 ---

  This project is a **responsive movie management web application**, built with **HTML5, CSS3, and JavaScript (ES6)**.

  👉 It was developed as a practice exercise to improve skills in **REST API integration, CRUD operations, DOM manipulation, and interactive UI design**.

  ⚠️ **Note**: The server ```(server.js)``` was **pre-built and provided** as part of the exercise. I did not work on or modify the backend implementation – my task focused only on building the **front-end logic and UI**.

  The app allows users to add, edit, delete, and view movies they want to watch. It can be used for demonstration purposes, educational projects, or as a starting point for a personal media library.

  ---

  ## 🎯 Features

   - Clean and structured **Add Movie Form**

   - **Load Movies** button fetches the movie list from the server

   - **Add Movie** – create a new movie entry with title, director, and release year

   - **Edit Movie** – update an existing movie’s details

   - **Delete Movie** – remove a movie from the list

   - Dynamic rendering of movies with title, director, and year

   - Validation (prevents adding empty fields)

   - Responsive, Netflix-inspired UI with custom styles

  ---

  ## 🛠️ Technologies Used

   - **HTML5** – page structure

   - **CSS3** – modern styling and responsive design (backgrounds, hover effects, Netflix-inspired theme)

   - **JavaScript (ES6)** – front-end logic:

      - DOM manipulation & event listeners

      - CRUD operations with Fetch API (GET, POST, PUT, DELETE)

   - **Node.js JSON Server** – provided backend for REST API (not developed by me)

   - **JSON Data Storage** – movies are saved in movies.json

   - **Testing** – end-to-end tests with Playwright & Mocha

  ---

  ## 📂 Project Structure

   - **ndex.html** – main page with form and movie list

   - **app.js** – JavaScript logic for movie CRUD functionality

   - **style.css** – Netflix-inspired styles and responsive design

   - **server.js** – pre-built server with REST API support (provided, not my work)

   - **movies.json** – sample JSON movie dataset

   - **e2e.test.js** – automated end-to-end tests

   - **package.json** – project configuration & dependencies

   - **/img/** – background and UI assets (bg.webp, cover.png, Load Movie.png)

---

## 🚀 How It Works

1. User fills in the form (title, director, year).

2. Clicking Add Movie sends a POST request to the server and reloads the list.

3. Clicking Load Movies fetches and displays all movies from movies.json.

4. Each movie has two buttons:

   - Change (Edit) → loads movie data back into the form for updates.

   - Delete → removes the movie from both UI and backend.

5. Edit Movie button updates the selected movie entry (via PUT request).

---

## 📷 Preview
<img width="500" height="828" alt="image" src="https://github.com/user-attachments/assets/dbd3afd7-63e7-43f7-9019-d90c71883b7a" />

</details>

<details>
  <summary>6. 🏃🏽The Step-Challenge</summary>
  
  ---

  This project is a **responsive fitness tracking application**, built with **HTML5, CSS3, and JavaScript (ES6)**.

  👉 It was developed as a practice exercise in **DOM manipulation, REST API integration, CRUD operations, and interactive UI building**.

  ⚠️ **Note**: The backend server ```(server.js)``` was **pre-built and provided** as part of the exercise. I did not implement the server itself – my work focused on the **front-end logic and UI**.

  The app allows users to log their **daily steps and calories**, manage records, and update or remove entries. It can be used for educational purposes, as a demo project, or as a base for personal health/fitness apps.

  ---

  ## 🎯 Features

   - Structured **Add Daily Record** form (name, steps, calories)

   - **Load Records** button → fetches and displays all entries from the server

   - **Add Record** → creates a new fitness record

   - **Edit Record** → updates existing data after loading it back into the form

   - **Delete Record** → permanently removes a record from the database

   - Client-side validation (prevents empty submissions)

   - Responsive design with styled cards and interactive buttons
  
  ---

  ## 🛠️ Technologies Used

  **HTML5** – page structure

  **CSS3** – styling, gradients, responsive design, custom fonts & background images

  **JavaScript (ES6)** – front-end logic:

  - DOM manipulation and event handling

  - CRUD operations with Fetch API (GET, POST, PATCH, DELETE)

  **Node.js JSON Server** – provided backend for REST API (not developed by me)

  **JSON Storage** – records saved in ```records.json```

  **Testing** – automated end-to-end tests with Playwright, Mocha, and Chai

---

## 📂 Project Structure

 - **index.html** – main page with record list and input form

 - **app.js** – JavaScript logic for record management (add, edit, delete, load)

 - **style.css** – modern responsive styles, gradients, fonts

 - **server.js** – pre-built server for REST API (provided, not my work)

 - **records.json** – example dataset with step & calorie records

 - **e2e.test.js** – end-to-end tests with Playwright

 - **package.json** – dependencies & scripts (```http-server```, ```mocha```, ```chai```, ```playwright-chromium```)

 - **/img/** – background & UI assets (```bg-img.png```, ```shoe.png```)

---

## 🚀 How It Works

1.  User fills in Name, Steps, Calories.

2.  Clicking Add Record sends a POST request and adds a new record.

3.  Clicking Load Records fetches and shows all saved records.
   
4.  Each record includes:
     - Change (Edit) → loads data into the form for updating.
     
     - Delete → removes the record from the server and UI.

5.  Edit Record button updates the entry (via PATCH request).

--- 

## 📷 Preview

</details>

<details>
  <summary>7. </summary>
</details>



