const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const addButton = document.querySelector('button')

addButton.addEventListener('click', () => {
  if (inputBox.value === '') {
    document.querySelector('.error').style.visibility = 'visible'
  } else {
    let li = document.createElement('li')
    li.innerText = inputBox.value

    let span = document.createElement('span')
    span.innerText = '\u00d7'
    li.appendChild(span)

    listContainer.appendChild(li)

    document.querySelector('.error').style.visibility = 'hidden'
  }
  inputBox.value = ''
  saveData()
})

listContainer.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      saveData()
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
      saveData()
    }
  },
  false
)

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data')
}

showTask()
