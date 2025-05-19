function addBook() {
  const bookList = document.getElementById('book-list');
  const newBookInput = document.getElementById('new-book');
  const bookTitle = newBookInput.value.trim();

  if (bookTitle === '') {
    updateStatus('Please enter a book title!', 'error');
    return;
  }

  const li = document.createElement('li');
  li.className = 'book-item';
  li.innerHTML = `${bookTitle} <button onclick="removeBook(this)">Remove</button>`;
  bookList.appendChild(li);

  newBookInput.value = '';
  updateStatus(`✅ "${bookTitle}" was added!`, 'success');
}

function removeBook(button) {
  const li = button.parentElement;
  const title = li.textContent.replace('Remove', '').trim();
  li.remove();
  updateStatus(`🗑️ "${title}" was removed.`, 'warn');
}

// ✅ Change text + styles
function updateStatus(message, type) {
  let statusBar = document.getElementById('status-bar');
  if (!statusBar) {
    statusBar = document.createElement('div');
    statusBar.id = 'status-bar';
    document.body.appendChild(statusBar);
  }

  statusBar.textContent = message;

  // Change color based on type
  switch (type) {
    case 'success':
      statusBar.style.color = 'green';
      break;
    case 'error':
      statusBar.style.color = 'red';
      break;
    case 'warn':
      statusBar.style.color = 'orange';
      break;
    default:
      statusBar.style.color = 'black';
  }

  // Optional: fade out after 3 seconds
  setTimeout(() => {
    statusBar.textContent = '';
  }, 3000);
}
