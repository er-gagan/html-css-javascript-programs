function ButtonPress(val)
{
    let v = document.getElementById("value").value
    strlen=v.length
    if(strlen!=0)
    {
        val=v+val
        document.getElementById("value").value=val
    }
    else
    {
        document.getElementById("value").value=""
        document.getElementById("value").value=val
    }

}

function Clear()
{
    location.reload()
}

let Num1=Num2=null

function Plus()
{
    Num1 = Number(document.getElementById("value").value)
    document.getElementById("value").value=""
}

function Equal()
{   
    Num2 = Number(document.getElementById("value").value)
    document.getElementById("value").value=Num1+Num2
}

function Minus()
{
    Plus()
}