const inputEl = document.getElementById('email')
const btn = document.getElementById('submit')
const textError = document.querySelector('.text-error')
const form = document.querySelector('.text-error')
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
let errors = []

btn.addEventListener('click', e => {
    textError.classList.remove('text-success')

    errors = []

    e.preventDefault()

    const email = inputEl.value

    if(email === '' || email === undefined || !email.match(regEmail)){
        errors.push('Please provide a valid email address')
        textError.innerHTML = errors[0]
        inputEl.style.border = '1px solid #FF5466'
    }

    if(!errors.length > 0){
        textError.classList.add('text-success')
        textError.innerHTML = ('You have subscribed')
        inputEl.style.border = '1px solid green'
    }
})