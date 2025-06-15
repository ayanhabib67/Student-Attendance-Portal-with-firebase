     
     
     import{getAuth,signInWithEmailAndPassword,auth, onAuthStateChanged} from"./firebase.js"
     

     onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const uid = user.uid;




          location="deshbord.html"
        } else {
          
       
        //  location="index.html"
       




let loginBtn  = document.getElementById("login-Btn")
loginBtn.addEventListener("click", login)




}
});







let login = ()=>{
  let email =document.getElementById("email")
  let password =document.getElementById("password")



  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
  console.log(user);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

