import{  auth,signInWithEmailAndPassword ,onAuthStateChanged } from"./adminFirebase.js"


onAuthStateChanged(auth,(user)=>{


if(user){
location="admin.html"
}

})

let Login = ()=>{
    
    
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    signInWithEmailAndPassword (auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if(user){
location="admin.html"
      }else{
  location="adminLogin.html"
      }
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
}
let registerBtn = document.getElementById("register-Btn")
registerBtn.addEventListener("click",Login)