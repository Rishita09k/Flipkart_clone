let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin(){
    let mobile = document.getElementById("number").value;
    let password = document.getElementById("password").value;

    let count = 0;

    if(mobile.length==0)
        {
            alert("Enter mobile number");
        }
        else if(mobile.length !==10){
            alert("Mobile number should be of 10 digits");
        }
        else{

       for( let i=0;i<getUsersdata.length;i++){
        if(mobile == getUsersdata[i].mobile){
            if(password == getUsersdata[i].password){
                alert("Signin Successfull");
                window.location.href="index.html"

            }
            else{
                alert("Invalid Password");
            }
        }
        else{
            count++;
        }
       }

        }
        if(count == getUsersdata.length){
            alert("User is not registered,Singup to continue")
            window.location.href="signup.html"
        }
    }
