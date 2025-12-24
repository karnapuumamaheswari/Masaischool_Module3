// Firebase Realtime Database base URL
const BASE_URL =
  "https://bookmanagement-35e3d-default-rtdb.asia-southeast1.firebasedatabase.app";

// ADD BOOK
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const price = document.getElementById("price").value;

  if (!title || !author || !price) {
    alert("Please fill all fields");
    return;
  }

  fetch(`${BASE_URL}/books.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      author: author,
      price: price
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Book added", data);
    GetData();
  })
  .catch(err => console.log("Error:", err));

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("price").value = "";
}

// FETCH AND DISPLAY BOOKS
function GetData() {
  fetch(`${BASE_URL}/books.json`)
    .then(res => res.json())
    .then(data => {
      const booksDiv = document.getElementById("books");
      booksDiv.innerHTML = "";

      for (let id in data) {
        booksDiv.innerHTML += `
          <div class="card">
            <h3>${data[id].title}</h3>
            <p>Author: ${data[id].author}</p>
            <p>Price: ₹${data[id].price}</p>
            <button class="delete" onclick="DeleteData('${id}')">Delete</button>
          </div>
        `;
      }
    })
    .catch(err => console.log("Error:", err));
}

// DELETE BOOK
function DeleteData(id) {
  fetch(`${BASE_URL}/books/${id}.json`, {
    method: "DELETE"
  })
  .then(() => {
    console.log("Book deleted");
    GetData();
  })
  .catch(err => console.log("Error:", err));
}

// Load data on page load
GetData();
