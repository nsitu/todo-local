// Data functions for create, read, update, and delete
import { createData, readData, updateData, deleteData } from './crud.js'

// Display all the todo itemss
const displayData = () => {
  document.querySelector('#itemList').innerHTML =
    readData().map(todo =>
        /*html*/`<li class="todo" data-id="${todo.id}">
          <div class="content">
            <span>${todo.content}</span>
            <span class="date">${niceDate(todo.date)}</span>
            <button class="edit"></button>
            <button class="delete"></button>
          </div>
          <form>
            <input type="text" value="${todo.content}" name="content">
            <button class="save"></button>
            <button class="cancel"></button>
          </form>
        </li>` ).join('')
}

const niceDate = (dateString) => {
  return new Date(dateString).toLocaleString('en-ca', {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  })
}

// show the edit form for a given todo item
// also, move the cursor to the end of the text input for better usability
const showForm = (todo) => {
  todo.querySelector('form').style.display = 'flex'
  todo.querySelector('.content').style.display = 'none'
  let userInput = todo.querySelector('form input')
  let end = userInput.value.length
  userInput.setSelectionRange(end, end)
  userInput.focus()
}

// hide the edit form for a given todo item
const hideForm = (todo) => {
  todo.querySelector('form').style.display = 'none'
  todo.querySelector('.content').style.display = 'flex'
}

// Monitor the input form 
// and create a new todo on submit
document.querySelector('#dataForm')
  .addEventListener('submit', event => {
    event.preventDefault()
    let textInput = document.querySelector("#textInput");
    if (textInput.value) {
      createData(textInput.value)
      displayData() // after creating, refresh the display
      textInput.value = "";
    }
  })


// There's one click listener for the entire list
// we will respond based on which button was clicked
document.querySelector('#itemList')
  .addEventListener('click', event => {
    event.preventDefault()
    let element = event.target;
    if (element.tagName == 'BUTTON') {
      // fnd the todo item that the button belongs to
      let todo = element.parentElement.parentElement;
      if (element.className == "edit") {
        showForm(todo)
      }
      if (element.className == "cancel") {
        hideForm(todo)
      }
      if (element.className == "save") {
        updateData(todo)
        displayData()  // after updating the todo refresh the display
      }
      if (element.className == "delete") {
        deleteData(todo)
        displayData() // after deleting the todo, refresh the display.
      }
    }
  })


// if there aren't any items yet, create a default item
if (!readData().length) createData("Make Lunch")

// display the items
displayData()