function sign(){
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

    console.log(userData);

    }

}