const toggle = document.getElementById('toggle-icon')
const password = document.getElementById('password')
const icon = document.getElementById('toggle-icon')

toggle.addEventListener('click', () => {
  const passswordType = password.getAttribute('type')
  const newType = passswordType === 'password' ? 'text' : 'password'
  password.setAttribute('type', newType)
  // Change toggle icon
  const iconUrl = newType === 'password' ? './images/hidden.png' : './images/show.png'
  icon.setAttribute('src', iconUrl)
})