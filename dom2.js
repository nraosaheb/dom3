
let array = JSON.parse(localStorage.getItem("details")) || []

let body = document.getElementById("body");
let nam = document.getElementById("item1");
let email = document.getElementById("item2");
let phone = document.getElementById("item3");
//  AppendData(array);

let btn = document.getElementById("btn").addEventListener("click", (event) => {
  let obj = {}
  obj.nam = nam.value
  obj.email = email.value
  obj.phone = phone.value
  console.log("obj", obj);
  console.log(array);
  array.push(obj)
  //localStorage.setItem("details",JSON.stringify(array));
  axios.post("https://crudcrud.com/api/3c7392e003114b8e9551ed99762a1ebf/apppointmentdata",obj)
  .then((respone)=>{
    console.log(respone);
  })
  .catch((err)=>{
    console.log(err);
  })


  nam.value = "";
  email.value = "";
  phone.value = "";
  AppendData(array);

})

function AppendData(array){
  console.log("array",array);

  body.innerHTML=""
 for(let i = 0; i < array.length; i++){
  
    let div = document.createElement("div")

    let sr = document.createElement("p");
    sr.innerText = i + 1;
    let named = document.createElement("p");
    named.innerText = array[i].nam
    let emaild = document.createElement("p");
    emaild.innerText = array[i].email
    let phoned = document.createElement("p");
    phoned.innerText = array[i].phone

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", () =>{
   
      myDelete(i, array);

    })

  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", () =>{
   
    myEdit(i, array[i], array)

  })
   
  div.append(sr, named, emaild, phoned, delBtn, editBtn);
  body.append(div);
}
}

function myDelete(i, array){
  console.log("delete",i,array);
  array.splice(i,1);

  localStorage.setItem("details", JSON.stringify(array))
  AppendData(array);

}


function myEdit(i, element,array){

  console.log("delete",i,array);
  nam.value = "";
  email.value = "";
  phone.value = "";
  nam.value = element.nam
  email.value = element.email
  phone.value = element.phone


  console.log("delete",i,array);
  array.splice(i,1);

  localStorage.setItem("details", JSON.stringify(array))
  AppendData(array);

}

window.addEventListener("DOMContentLoaded", ()=>{
  axios.get("https://crudcrud.com/api/3c7392e003114b8e9551ed99762a1ebf/apppointmentdata")
  .then((respone)=>{
    console.log(respone);
  })
  .catch((error)=>{
    console.log(error);
  })

  const localStorageObj = localStorage;
  const localStoragekeys = Object.keys(localStorageObj)
  
  for(var i=0; i< localStoragekeys.length; i++){
    const key = localStoragekeys[i]
    const userDetailsString = localStorageObj[key];
    constuserDetailsObj = JSON.parse(userDetailsString);
  }
  AppendData(array);
})