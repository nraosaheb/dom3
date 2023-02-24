function test(){
    //retriving data
    let kv = document.getElementById("key_value");
    let nm = document.getElementById("name");
    let eml = document.getElementById("email");

    //storing data
    let user = localStorage.setItem(kv.value,nm.value);
    let em = localStorage.setItem("email",eml.value);

    //retriving stored data and use it for calculation
    user = localStorage.getItem(kv.value,nm);
    em = localStorage.getItem("email",eml);
} 