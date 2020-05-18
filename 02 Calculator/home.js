function ButtonPress(val)
{
    let v = document.getElementById("value3").value
    strlen=v.length
    if(strlen!=0)
    {
        val=v+val
        document.getElementById("value3").value=val
    }
    else
    {
        document.getElementById("value3").value=""
        document.getElementById("value3").value=val
    }

}

function Clear()
{
    location.reload()
}

let Num1=Num2=null

function Plus()
{
    Num1 = Number(document.getElementById("value3").value)
    document.getElementById("value0").value=Num1
    document.getElementById("value1").value="+"
    document.getElementById("value2").value=""
    document.getElementById("value3").value=""
}
function Minus()
{
    Num1 = Number(document.getElementById("value3").value)
    document.getElementById("value0").value=Num1
    document.getElementById("value1").value="-"
    document.getElementById("value2").value=""
    document.getElementById("value3").value=""
}
function Multiply()
{
    Num1 = Number(document.getElementById("value3").value)
    document.getElementById("value0").value=Num1
    document.getElementById("value1").value="*"
    document.getElementById("value2").value=""
    document.getElementById("value3").value=""
}
function Divide()
{
    Num1 = Number(document.getElementById("value3").value)
    document.getElementById("value0").value=Num1
    document.getElementById("value1").value="/"
    document.getElementById("value2").value=""
    document.getElementById("value3").value=""
}

function Power()
{
    Num1 = Number(document.getElementById("value3").value)
    document.getElementById("value2").value=Num1
    document.getElementById("value3").value=Num1*Num1
}

function Equal()
{   
    Num2 = Number(document.getElementById("value3").value)
    document.getElementById("value2").value=Num2
    sign = document.getElementById("value1").value
    if(sign==="+")
    {
        document.getElementById("value3").value=Num1+Num2
    }
    else if(sign==="-")
    {
        document.getElementById("value3").value=Num1-Num2
    }
    else if(sign==="*")
    {
        document.getElementById("value3").value=Num1*Num2
    }
    else if(sign==="/")
    {
        document.getElementById("value3").value=Num1/Num2
    }
}

