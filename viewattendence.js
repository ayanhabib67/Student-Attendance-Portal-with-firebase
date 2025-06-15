
import{onAuthStateChanged,auth,collection,db,onSnapshot ,query,orderBy,serverTimestamp} from"./firebase.js"

onAuthStateChanged(auth,(user)=>{


    






getData(user)


})


let getData=  async(user)=>{
        

let collectionRef = collection(db,user.uid)

let dbRef = query(collectionRef,orderBy("timeatamp" ,"asc"))

await  onSnapshot (dbRef,(snapshot)=>{
  
  snapshot.forEach((doc)=>{
    
let fireStoreDate = doc.data()?.timeatamp?.toDate?.()
let time = moment(fireStoreDate).format(' hh:mm:ss');
let date  =  moment(fireStoreDate).format('DD/MM/YYYY');


console.log(time);
console.log(date);

let tbody = document.getElementById("tbody")
     



    tbody.innerHTML+=`<tbody> <tr>
          <td>${date}</td>
          <td>${time}</td>
          <td>${user.displayName}</td>
          <td>${doc.data().present}<td>
        

          
          </tr></tbody>`

       
  })
  
})

}







