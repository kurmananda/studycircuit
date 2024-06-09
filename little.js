var n;
function q2()
{
    document.getElementById('forq1').innerHTML="What's the next 2 decimals of your mains %ile...? 98. _ _";
    document.getElementById('inputt').disabled=false;
    document.getElementById('sub').disabled=false;
}
function sub()
{
    n=document.getElementById('inputt').value;
    console.log(n);
    if(n == "98")
        {
            window.location.href = "if_you.html"
        }
    else fake();
}
function fake()
{
    document.getElementById('forq1').innerHTML="Rey, endhuk raa malla inko fake accnt ahh...?"; 
    document.getElementById('btnMN1').innerHTML="blocked"; 
    document.getElementById('btnMN2').innerHTML="blocked";
    document.getElementById('btnMN3').innerHTML="blocked";
    document.getElementById('btnMN4').innerHTML="blocked";
    document.getElementById('btnMN1').disabled=true; 
    document.getElementById('btnMN2').disabled=true;
    document.getElementById('btnMN3').disabled=true;
    document.getElementById('btnMN4').disabled=true;
    document.getElementById('inputt').disabled=true;
    document.getElementById('sub').disabled=true;
    document.getElementById('headingg').innerHTML="closing in 3secs";
    setTimeout(window.close,3000)
}
