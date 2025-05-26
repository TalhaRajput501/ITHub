// This code is used to show or hide the service menu bar || And this is my own logic

const button1 = document.getElementById("service-button");
const menu = document.getElementById("menu");

button1.addEventListener("mouseenter", () => {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  }
});

function outbtn() {
  menu.style.display = "none";
}

function outmenu() {
  menu.style.display = "none";
}

function entermenu() {
  menu.style.display = "block";
}

// This portion is to display the hidden content of services after clicking the button

// const service = document.getElementById("hidden_service");
// const service_btn = document.getElementById("show_service_btn");

// service_btn.addEventListener("onclick", () => {
//   // service_btn.style.display = 'none'
//   service_btn.style.color = "red";
// });

// function show_service() {
//   if(service.style.display === "none" || service.style.display === ""){

//     service.style.display = "block"; 
//   }else{
    
//     service.style.display = "none"; 
//   }


// }
