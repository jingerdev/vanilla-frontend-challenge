
const setCompletedCount = () => {
  const completedCount = document.getElementById('completed-count')
  const completedList = document.getElementById('completed-list')
  completedCount.innerHTML = completedList.childElementCount
}

const onAddItem = (item) => {
  const input = document.getElementById('new-item')
  const notDoneList = document.getElementById('items-list')
  const itemName = item || input.value
  // If input field is not empty
  if (itemName) {
    const lists = notDoneList.innerHTML
    const itemId = notDoneList.childElementCount+1
    const newItem = `
      <li>
        <div class="item">
          <div class="round" onclick="onCompleteItem(this)">
            <input type="checkbox" id="item-${itemId}"/>
            <label for="item-${itemId}"></label>
          </div>
          <input value="${itemName.trim()}" />
        </div>
        <img src="./images/close.svg" class="delete-btn" onclick="deleteItem(this)" />
      </li>
    `
    notDoneList.innerHTML = lists + newItem
  } else {   
    alert("You need to write something!")
  }
  input.value = ''
}

const onCompleteItem = (completedItem) => {
  // Add the clicked item to completed list
  const completedList = document.getElementById('completed-list')
  const lists = completedList.innerHTML
  const item = completedItem.nextElementSibling
  const newItem = `    
    <li>
      <div class="item">
        <div class="round" onclick="unCheckItem(this)">
          <input type="checkbox" checked />
          <label></label>
        </div>
        <p>${item.value}</p>
      </div>
      <img src="./images/close.svg" class="delete-btn" onclick="deleteItem(this)" />
    </li>
  `
  completedList.innerHTML = lists + newItem
  // Parent element is the <li>, which is the chich of the items-list
  completedItem.parentElement.parentElement.remove()
  setCompletedCount()
}

const unCheckItem = (completedItem) => {
  completedItem.parentElement.parentElement.remove()
  // Same as adding item with additional removing from completed
  const item = completedItem.nextElementSibling
  onAddItem(item.innerHTML)
  setCompletedCount()
}

const clearList = (list) => {
  const completedList = document.getElementById('completed-list')
  const notDoneList = document.getElementById('items-list')
  if (list === 'completed') {
    completedList.innerHTML = ''
  } else {
    completedList.innerHTML = ''
    notDoneList.innerHTML = ''
  }
  setCompletedCount()
}

const deleteItem = (item) => {
  item.parentElement.remove()
  setCompletedCount()
}

// Immediately count the items completed
(() => {
  setCompletedCount()
})()