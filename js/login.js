const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters.')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be longer than 6 characters.')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})