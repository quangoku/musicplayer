const AUDIO=document.getElementById("audio");
const BUTTON=document.getElementById("button");
var check=0;
 function play_pause()
{
    if(!check)
        {
            check=1;
            AUDIO.play();
            BUTTON.style.animation="spin 5s linear infinite";
        }
        else {
            check=0;
            AUDIO.pause();
            BUTTON.style.animation="";
        }
}
function change_mode()
{  
    document.body.classList.toggle("dark_mode");
}
