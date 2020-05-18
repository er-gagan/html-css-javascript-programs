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
        document.getElementById("value").value=val
    }

}

function Clear()
{
    location.reload()
}