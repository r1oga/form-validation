const [form, pwd1, pwd2, message] = [
  'form',
  'password1',
  'password2',
  'message'
].map(id => document.getElementById(id))
const [messageContainer] = ['.message-container'].map(query =>
  document.querySelector(query)
)

let valid = false
let match = false

const validateForm = () => {
  valid = form.checkValidity()

  if (!valid) {
    message.textContent = 'Please fill out correctly all fields'
    message.style.color = 'tomato'
    messageContainer.style.borderColor = 'tomato'
    return
  }

  if (pwd1.value === pwd2.value) {
    match = true
    pwd1.style.borderColor = 'teal'
    pwd2.style.borderColor = 'teal'
  } else {
    match = false
    pwd1.style.borderColor = 'tomato'
    pwd2.style.borderColor = 'tomato'
    message.textContent = 'Make sure both passwords match'
    message.style.color = 'tomato'
    messageContainer.style.borderColor = 'tomato'
    return
  }

  if (valid && match) {
    message.textContent = 'Succesfully registered'
    message.style.color = 'teal'
    message.style.borderColor = 'teal'
  }
}

const storeFormData = () => {
  const user = {}
  ;['name', 'phone', 'email', 'website', 'password'].forEach(field => {
    user[field] = form[field].value
  })
  console.log(user)
}

const handleFormData = event => {
  event.preventDefault()
  validateForm()
  if (valid && match) {
    storeFormData()
  }
}

form.addEventListener('submit', handleFormData)
