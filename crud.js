// given a string, add it to the list of items in localstorage
const createData = (textInput) => {
    let newData = {
        id: window.crypto.randomUUID(),
        content: textInput,
        date: new Date()
    }; 
    localStorage.setItem(`myData.${newData.id}`, JSON.stringify(newData));  
};

// retreive a list of all items from local storage
const readData = () => { 
  return Object.keys(localStorage)
    .filter(key => key.startsWith('myData.'))
    .map(key =>  JSON.parse(localStorage.getItem(key)))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// given an existing item, 
// update the content for it in localstorage
const updateData = (todo) => { 
  let update = JSON.stringify({
    id: todo.dataset.id,
    content: todo.querySelector("form input").value,
    date: new Date()
  }) 
  localStorage.setItem(`myData.${todo.dataset.id}`, update);
};

// given an existing item
// remove from localstorage
const deleteData = (todo) => {
    localStorage.removeItem(`myData.${todo.dataset.id}`) 
};

export { createData, readData, updateData, deleteData };
