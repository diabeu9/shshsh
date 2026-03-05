const formularz = document.querySelector("#formularz")

formularz.addEventListener("submit", (e) =>{
    e.preventDefault()

    const imię = formularz.querySelector("#imię")
    const nazwisko = formularz.querySelector("#nazwisko")
    const email = formularz.querySelector('input[name="email"]')

    console.log(imię.value, nazwisko.value, email.value)
    imię.value = ""
    nazwisko.value = ""
    email.value = ""
})