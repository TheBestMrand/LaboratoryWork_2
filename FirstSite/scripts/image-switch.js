function change_image()
{
    var image = document.getElementById('main-image');

    if(document.getElementById('second-image').checked)
    {
        image.src = "images/switch/second.jpg";
    }
    else if(document.getElementById('third-image').checked)
    {
        image.src = "images/switch/third.jpg";
    }
    else
    {
        image.src = "images/switch/first.jpg";
    }

}