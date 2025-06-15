import { onAuthStateChanged, auth ,signOut } from "./adminFirebase.js";
import{collection,db,onSnapshot,addDoc } from"./firebase.js"


onAuthStateChanged(auth, (user) => {
  if (user) {
   
    console.log("Admin logged in:", user.email);
    // let viewAttendence = document.getElementById("viewAttendence")
    // viewAttendence.addEventListener("click",getData)
    let viewAttendence = document.getElementById("viewAttendence");

    viewAttendence.addEventListener("click", function handleClickOnce() {
      getData(); 
      
      viewAttendence.removeEventListener("click", handleClickOnce);
      
    });

    let AddYear = document.getElementById("AddYear")
    AddYear.addEventListener("click", function handleClickOnce(){
        
        AcademicYear()

        AddYear.removeEventListener("click", handleClickOnce);
})



let LogoutBtn = document.getElementById("Logout-Btn")
LogoutBtn.addEventListener("click",logout)




  } else {
    
    location.href = "adminLogin.html";
  }
});
    

    
const getData =  () => {
    
    const collectionRef = collection(db, "StuData");
    
    onSnapshot(collectionRef, (snapshot) => {
        snapshot.forEach((doc) => {
            

            let data = doc.data()
            // console.log(data.displayName);



            let fireStoreDate = doc.data()?.timeatamp?.toDate?.()
let time = moment(fireStoreDate).format(' hh:mm:ss');
let date  =  moment(fireStoreDate).format('DD/MM/YYYY');


console.log(time);
console.log(date);
            
let cardContent = document.getElementById("card-content")
cardContent.innerHTML += `
  <div class="card">
    <img src="${data.photoURL}" alt="Student Photo">
    <div class="card-content">
      <h3>${data.displayName}</h3>
      <p><strong>Details:</strong> ${data.details}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Present:</strong> ${data.present}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Date:</strong> ${date}</p>
    </div>
    
  </div>
`;




        });
    });
};








let AcademicYear =async ()=>{



let academicYearSelect = document.getElementById("academicYearSelect")



    let AcademicYearData = {
        AcademicYearSelect:academicYearSelect.value
      };


      let dbRef = collection(db, "AcademicYearSelect");

      await addDoc(dbRef, AcademicYearData);








}






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
  






