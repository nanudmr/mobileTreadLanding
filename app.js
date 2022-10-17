
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

    emailjs.send("service_6u5fwci", "template_zdsd7jc", emailData)
    .then((res) => {
        console.log("SUCCESS", res.status, res.text)
        document.querySelector(".contact-form").style.display = "none"

        setTimeout(() => {
            closeRequest()
        }, 2000);
    }).catch((err) => {
        console.log(err)
    })

})


const request = document.querySelector(".request-call")
const closeBtn = document.querySelector(".close")

const overlay = document.querySelector(".contact-form-container")

function openRequest(){
    overlay.style.visibility = "visible"
    overlay.style.opacity = "1"
}

function closeRequest(){
    overlay.style.visibility = "hidden"
    overlay.style.opacity = "0"
}


request.addEventListener("click", () => {
    openRequest()
})

closeBtn.addEventListener("click", ()=>{
    closeRequest()
})