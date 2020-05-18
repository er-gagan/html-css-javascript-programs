function Add()
{
    let a = Number(document.getElementById("first").value)
    let b = Number(document.getElementById("second").value)
    document.getElementById("Sum").value=a+b
}

function Clear()
{
    location.reload()
}