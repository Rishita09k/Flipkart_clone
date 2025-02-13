let getUserdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUserdata);

function Signup(){
    let username=document.getElementById("name").value;
    let mobile=document.getElementById("number").value;
    let password=document.getElementById("password").value;

    if(mobile.length==0)
    {
        alert("Enter mobile number");
    }
    else if(mobile.length !==10){
        alert("Mobile number should be of 10 digits");
    }
    else{
        
    let userData={
        username:username,
        mobile:mobile,
        password:password
    }

    let users = [...getUserdata,userData];
    localStorage.setItem("usersdata", JSON.stringify(users));

    alert("Signup Successfull");
    window.location.href="signin.html"
    }

}