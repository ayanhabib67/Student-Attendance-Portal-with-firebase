


import{getAuth, auth,sendPasswordResetEmail}from"./firebase.js"

let resetBtn  = document.getElementById("resetBtn")
resetBtn.addEventListener("click", ()=>{

    
    let email = document.getElementById("email")



    sendPasswordResetEmail(auth, email.value)
    .then(() => {
      console.log("bi");
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


}) 