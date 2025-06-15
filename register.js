import { getAuth, createUserWithEmailAndPassword, onSnapshot, auth,collection,addDoc, db,  updateProfile, onAuthStateChanged,} from "./firebase.js";


let spinner = document.getElementById("spinner")
let content = document.getElementById("content")


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;

    console.log(uid);
 spinner.style.display="none"
        content.style.display="block"

    branchName(user)
      .then(() => {
        location = "deshbord.html";
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    let registerButton = (user) => {
      let email = document.getElementById("email");
      let password = document.getElementById("password");
      let username = document.getElementById("username");
      let url = document.getElementById("photoURL");

      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;

          return updateProfile(user, {
            displayName: username.value,
            photoURL: photoURL.value,
          }).then(() => {
            branchName(user);
            console.log("User registered with display name:", user.displayName);
            console.log("Photo URL:", user.photoURL);
            
            console.log(user);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };

    let registerBtn = document.getElementById("register-Btn");
    registerBtn.addEventListener("click", registerButton);
  }
});

async function branchName(user) {
  let smitbranch = document.getElementById("smit-branch");
  let rollNumber = document.getElementById("rollNumber");

  let stuData = {
    rollNumber: rollNumber.value,
    smitbranch: smitbranch.value,
  };

  let dbRef = collection(db, user.uid);
  
  let userUid = user.uid
 
  await addDoc(dbRef, stuData);
}







let uidSend = async () => {
  // let uidData = JSON.parse(localStorage.getItem("uids"));
  // console.log(uidData);

  // let stuUidData = {
  //   uid: uidData
  // };

  // let dbRef = collection(db, "uidList");

  // await addDoc(dbRef, stuUidData);  



};
