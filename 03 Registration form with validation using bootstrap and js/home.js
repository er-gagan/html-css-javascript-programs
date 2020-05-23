function MyFun()
{
    fname = document.getElementById('Fname').value;
    lname = document.getElementById('Lname').value;
    username = document.getElementById('userName').value;
    Email = document.getElementById('email').value;
    Pass1 = document.getElementById('pass1').value;
    Pass2 = document.getElementById('pass2').value;
    Address = document.getElementById('address').value;
    City = document.getElementById('city').value;
    State = document.getElementById('state').value;
    ZIP = document.getElementById('zip').value;
    Phone = document.getElementById('phone').value;
    // Radio Button Start
    if(document.getElementById("Male").checked){ Gender = "Male"; }
    else if(document.getElementById("Female").checked){ Gender = "Female"; }
    else if(document.getElementById("Other").checked){ Gender = "Others"; }
    else
    {
        alert("Please select your gender");
        return false;
    }
    // Checkbox Start
    if(document.getElementById("Dancing").checked){ AOI = "Dancing"; }
    if(document.getElementById("Singing").checked){ AOI += " Singing"; }
    if(document.getElementById("Playing").checked){ AOI += " Playing"; }
    if(document.getElementById("Studying").checked){ AOI += " Studying"; }
    if(document.getElementById("Travelling").checked){ AOI += " Travelling"; }
    if(document.getElementById("Teaching").checked){ AOI += " Teaching"; }
    else
    {
        alert("Please select your area of intrest, atleast one area of intrest is necessary to select");
        return false;
    }
    
    // console.log(fname,lname,username,Email,Pass1,Pass2,Address,City,State,ZIP,Phone,Gender,AOI);
    
    // ==========================================================================================================================
    // ==========================================================================================================================

    if(fname.length<3 || fname.length>15)
    {
        alert("First Name length must be greaterthan 3 character and lessthan 15 character");
        return false;
    }
    if(lname.length<3 || lname.length>15)
    {
        alert("Last Name length must be greaterthan 3 character and lessthan 15 character");
        return false;
    }
    if(username.length<3 || username.length>15)
    {
        alert("Username length must be greaterthan 3 character and lessthan 15 character");
        return false;
    }
    if(Pass1!=Pass2 || Pass1.length<6 || Pass1.length>20)
    {
        alert("Password not match...Please enter correct password\nPassword length must be greaterthan 6 character and lessthan 20 character");
        return false;
    }
    if(Email.length<8 || Email.length>45)
    {
        alert("Please enter vallid email address\nEmail length must be greaterthan eight character and lessthan fourtyfive character");
        return false;
    }
    if(Address.length<20)
    {
        alert("Address length must be twenty character or greater");
        return false;
    }
    if(City.length<3 || City.length>30)
    {
        alert("City length must be greaterthan three character and lessthan 30 character");
        return false;
    }
    if(State==="Choose your state" || State==="")
    {
        alert("Please select your state");
        return false;
    }
    if(ZIP.length<5 ||ZIP.length>8)
    {
        alert("Please Enter Correct PIN/ZIP Code");
        return false;
    }
    if(Phone.length<10 || Phone.length>14)
    {
        alert("Please enter correct phone number");
        return false;
    }
    else
    {
        alert(fname,lname,username,Pass1,Email,Address,City,State,ZIP,Phone,Gender,AOI);
        return true;
    }

    // ==========================================================================================================================
    // ==========================================================================================================================
}