
function sendEMail(){ 

    emailjs.send("service_tqpyhhn", "template_01971fd", {
        // For Personal Information
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        // For Order Information
        service : document.getElementById('service').value,
        subcategory : document.getElementById('subcategory').value, 

        // For Budget and description
        budget : document.getElementById('budget').value,
        deadline : document.getElementById('deadline').value,
        details : document.getElementById('details').value,

    }).then(alert("Your order is received we get back to you soon!"))
} 

 