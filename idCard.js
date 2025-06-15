
import{onAuthStateChanged,auth,collection,db,onSnapshot} from"./firebase.js"

let fullName = document.getElementById("fullName")
let BranchName = document.getElementById("BranchName")
let RollNumber = document.getElementById("RollNumber")
let idcardphoto = document.getElementById("id-card-photo")
let email = document.getElementById("email")
let Branch = document.getElementById("Branch")
let backRollNumber = document.getElementById("backRollNumber")
 



onAuthStateChanged(auth,(user)=>{
getData(user)
getAcademicYear()
})


let getData = (user)=>{

    
    const collectionRef = collection(db, user.uid);
    
    onSnapshot(collectionRef, (snapshot) => {
        
        
        
        snapshot.forEach((doc) => {
            let data = doc.data()
            
            
            console.log(data);
            
            idcardphoto.innerHTML = `<img src="${user.photoURL}" alt="">`;
            fullName.innerHTML = `${user.displayName}`;
            RollNumber.innerHTML=`WMA-${data.rollNumber}`
            email.innerHTML =`<strong>Email : </strong>${user.email}`
            Branch.innerHTML=`<strong>Branch : </strong>${data.smitbranch}`
            backRollNumber.innerHTML=`<strong>Roll Number : </strong> ${data.rollNumber


            }`
        })
        
        
        
        
})




    } 

let AcademicYear = document.getElementById("AcademicYear")

    let getAcademicYear  = ()=>{
     
        
        const collectionRef = collection(db, "AcademicYearSelect");
    
        onSnapshot(collectionRef, (snapshot) => {


            snapshot.forEach((doc) => {
                let data = doc.data()
            
            console.log(data.AcademicYearSelect);
            AcademicYear.innerHTML=`Academic Year:  ${data.AcademicYearSelect}`
            
            
            
            })




        })
            

    }