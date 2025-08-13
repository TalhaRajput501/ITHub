

async function sendEMail() {

  const res = await fetch('http://localhost/config')
  const data = await res.json()
  // console.log(data)
  const emailJsServiceId = data.emailJsServiceId
  const emailJsTempelateId = data.emailJsTempelateId 
  
 
  emailjs.send( emailJsServiceId, emailJsTempelateId, {
    // For Personal Information
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    // For Order Information
    service: document.getElementById('service').value,
    subcategory: document.getElementById('subcategory').value,

    // For Budget and description
    budget: document.getElementById('budget').value,
    deadline: document.getElementById('deadline').value,
    details: document.getElementById('details').value,

  }).then((response) => {
    alert("Your order is received we get back to you soon!")
    console.log("Success", response.status, response.text)
    // ✅ Reset the form
    document.getElementById("orderForm").reset();
  }).catch(() => {
    console.error("Failed..", error)
  })
}



document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault()

  if (!this.checkValidity()) {
    // If form is not valid, let browser show validation errors
    this.reportValidity();
    return;
  }


  sendEMail()
})