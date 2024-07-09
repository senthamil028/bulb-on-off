var bulb=0;
function findbulb()
{
    if(bulb==0)
    {
        document.getElementById('image').src='bulb image on.png';
        bulb=1;
    }
    else{
        document.getElementById('image').src='images off.jpg';
        bulb=0;
    }
}
