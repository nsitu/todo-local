// given a string, add it to the list of items in localstorage
const createData = (textInput) => {
  let newData = {
    id: self?.crypto?.randomUUID ? self.crypto.randomUUID() : Date.now().toString(),
    content: textInput,
    date: new Date()
  }
  const serializedData = JSON.stringify(newData);
  localStorage.setItem(`myData.${newData.id}`, serializedData);
};

// retreive a list of all items from local storage
const readData = () => {
  return Object.keys(localStorage)
    .filter(key => key.startsWith('myData.'))
    .map(key => localStorage.getItem(key))
    .map(data => JSON.parse(data))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// given an existing item, 
// update the content for it in localstorage
const updateData = (todo) => {
  let update = {
    id: todo.dataset.id,
    content: todo.querySelector("form input").value,
    date: new Date()
  }
  const serializedUpdate = JSON.stringify(update);
  localStorage.setItem(`myData.${todo.dataset.id}`, serializedUpdate);
};

// given an existing item
// remove from localstorage
const deleteData = (todo) => {
  localStorage.removeItem(`myData.${todo.dataset.id}`)
};

export { createData, readData, updateData, deleteData };
