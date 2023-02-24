function test(){
    //retriving data
    let nm = document.getElementById("name").value;
    let eml = document.getElementById("email").value;
    let pn = document.getElementById("phonenumber").value;
    let all = "{name:"+nm+",emailid:"+eml+",phonenumber:"+pn+"}"
    //storing data
    let user = localStorage.setItem(eml,all);
    

    //retriving stored data and use it for calculation
    user = localStorage.getItem(eml,all);
}