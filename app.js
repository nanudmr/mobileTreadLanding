
// tiene que correr despues del link JSmail
setTimeout(() => {
    emailjs.init("ti5JxGUggSNDgoLg3");
}, 500)

const contactForm = document.querySelector(".contact-form")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const emailData = {
        name: contactForm.name.value,
        number: contactForm.number.value,
        email: contactForm.email.value
    }
    console.log(emailData)

    emailjs.send("service_sdpyg2g", "template_zdsd7jc", emailData)
    .then((res) => {
        console.log("SUCCESS", res.status, res.text)
    }).catch((err) => {
        console.log(err)
    })

})