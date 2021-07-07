const menu = document.querySelector(".menu");
const hamburgermenu = document.querySelector(".hamburgermenu");
const menuIcon = document.querySelector(".menuIcon");
const xIcon = document.querySelector(".xIcon");

hamburgermenu.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

const menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)

// Moda Property
// inspired/credited by w3school.com
// Get the modal
const modal = document.getElementById("myModal");
console.log(modal);
// Get the button that opens the modal
const openModal = document.querySelectorAll(".openModal");

// Close the modal with <span>
const span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
for (let i = 0; i < openModal.length; i++) 
openModal[i].addEventListener("click", function () {
    modal.style.display = "block";
});

  // When the user clicks on close button, close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    };
  };

  // Seems like only print out the first modal box but not the second one! 
  // Try to figure out later!
  

