import { auth, collection, db,signOut, onSnapshot, serverTimestamp, addDoc, onAuthStateChanged,orderBy,query} from "./firebase.js";

let studentPhoto = document.getElementById("student-photo");
let studentName = document.getElementById("studentName");

onAuthStateChanged(auth, (user) => {
  
  if (user) {

  
    const uid = user.uid;
// window.uid = uid
    studentPhoto.innerHTML = `<img src="${user.photoURL}" alt="">`;
    studentName.innerHTML = `${user.displayName}`;



    getAcademicYear()

    getRollLocaData(user)
    let SubmitAttendance = document.getElementById("SubmitAttendance")
    SubmitAttendance.addEventListener("click",function(){

      obj(user)
    })




  } else {
    location = "index.html";
  }
});

const user = localStorage.getItem("isLoggedIn");


// if (user == "true") {
//   let uid =   JSON.parse(localStorage.getItem("userUid"));
// console.log(uid);





  let rollNumber = document.getElementById("rollNumber");
  let branchName = document.getElementById("branchName");


  let spinner = document.getElementById("spinner")
  let content = document.getElementById("content")
  let getRollLocaData = async (user) => {

    let collectionRef = collection(db, user.uid);
    let dbRef = query(collectionRef, orderBy("rollNumber"))
  console.log(dbRef);

    await onSnapshot(dbRef, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());

        spinner.style.display="none"
        content.style.display="block"
        let data = doc.data();

        rollNumber.innerHTML = `Roll Number ${data.rollNumber}`;
        branchName.innerHTML = `${data.smitbranch}`;
        console.log(doc.id.rollNumber);
        








      });
    });


    
    
  };
  
  // getRollLocaData(user)
  
// }




// let uid =   JSON.parse(localStorage.getItem("userUid"));


// if(uid){

  
  
  
  let obj = async (user) => {
      let present = document.getElementById("present1");
    let details = document.getElementById("details");

    // console.log(user.photoURL);
    let stuAttendanceData = {
        present: present.value,
      details: details.value,
      timeatamp: serverTimestamp(),
    };

  
    let dbRef = collection(db, user.uid);
  
    await addDoc(dbRef, stuAttendanceData);
  
let displayName = user.displayName
let userEmail = user.email
let photoUrl = user.photoURL

let stuData = {
      present: present.value,
      details: details.value,
      displayName:displayName,
      email: userEmail,
      photoURL:photoUrl,
      timeatamp: serverTimestamp(),
}


let dbReference = collection(db, "StuData");

await addDoc(dbReference,stuData);





present.value= ""
details.value=""

};



// window.obj = obj




// }









let ViewAttendance = document.getElementById("ViewAttendance")
ViewAttendance.addEventListener("click",()=>{
  location= "viewattendence.html"
})

let logout = ()=>{
  signOut(auth).then(() => {

    
    
  }).catch((error) => {
    Swal.fire({
      title: 'Login Failed',
      text: error,
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  });
  
  
}

let LogoutBtn = document.getElementById("Logout-Btn")
LogoutBtn.addEventListener("click",logout)




let admin = ()=>{

  location="adminLogin.html";

}

let adminPage  =document.getElementById("adminPage")
adminPage.addEventListener("click",admin)













let getAcademicYear = ()=>{
 
  
  const collectionRef = collection(db, "AcademicYearSelect");
    
  onSnapshot(collectionRef, (snapshot) => {

    snapshot.forEach((doc) => {

      let data = doc.data()
console.log(data.AcademicYearSelect);
let year = document.getElementById("year")
year.innerHTML=`${data.AcademicYearSelect}`

    })




  })


}


let card = document.getElementById("card")
card.addEventListener("click",()=>{
  location="idCard.html"
})





