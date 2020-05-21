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
    else{ return false; }
    // Checkbox Start
    if(document.getElementById("Dancing").checked){ AOI = "Dancing"; }
    if(document.getElementById("Singing").checked){ AOI += " Singing"; }
    if(document.getElementById("Playing").checked){ AOI += " Playing"; }
    if(document.getElementById("Studying").checked){ AOI += " Studying"; }
    if(document.getElementById("Travelling").checked){ AOI += " Travelling"; }
    if(document.getElementById("Teaching").checked){ AOI += " Teaching"; }
    else { return false; }
    
    console.log(fname,lname,username,Email,Pass1,Pass2,Address,City,State,ZIP,Phone,Gender,AOI);
}