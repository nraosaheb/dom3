function test(){
    //retriving data
    let nm = document.getElementById("name").value;
    let eml = document.getElementById("email").value;

    //storing data
    let user = localStorage.setItem("nm",nm);
    let em = localStorage.setItem("email",eml);

    //retriving stored data and use it for calculation
    user = localStorage.getItem("nm",nm);
    em = localStorage.getItem("email",eml);
} 