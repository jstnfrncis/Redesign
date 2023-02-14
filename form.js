

const CreateAccBtn = document.querySelector(".show-modal");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const toggle = document.getElementById('toggle');
const applicant =document.getElementById('under-dev');
const resetpassword =document.getElementById('under-dev2');



// Create account button when click the form will be active and pop up
CreateAccBtn.addEventListener("click", () => modalBg.classList.add("bg-active"));


// Form close when click the the BUTTON 
modalClose.addEventListener("click", () => modalBg.classList.remove("bg-active"));


// remove the form when click outside
modalBg.addEventListener('click', (e) => { 
    e.target.classList.remove("bg-active")
  })



// Under developed functions //

  // for New Applicant Button Underdevelop
  applicant.addEventListener('click', () =>{
    console.log(alert("Sorry, this is under maintenance!"))
  });

  resetpassword.addEventListener('click', () =>{
    console.log(alert("Also this is under maintenance!"))
  });



