function showSidebar()
{
    const side = document.querySelector('.sidee')
    side.style.display = "flex"
    const kit = document.getElementById('ki')
    kit.style.textAlign = 'left'
    const e = document.getElementById('gii')
    e.src="./ikons/giphy (1).webp"
}
function hideSidebar()
{
    const side = document.querySelector('.sidee')
    side.style.display = "none"
    const kit = document.getElementById('ki')
    kit.style.textAlign = 'right'
    const e = document.getElementById('gii')
    e.src="./ikons/giphy.webp"
}

function calcu()
{
    const mech = document.getElementById('calcu-matter')
    console.log(mech.style.display);
    
    if(mech.style.display == 'flex'){mech.style.display = 'none'}
    else{mech.style.display = "flex"}
}
function mech()
{
    const mech = document.getElementById('mech-matter')
    console.log(mech.style.display);
    
    if(mech.style.display == 'flex'){mech.style.display = 'none'}
    else{mech.style.display = "flex"}
}
function bee()
{
    const mech = document.getElementById('bee-matter')
    console.log(mech.style.display);
    
    if(mech.style.display == 'flex'){mech.style.display = 'none'}
    else{mech.style.display = "flex"}
}
function envi()
{
    const mech = document.getElementById('envi-matter')
    console.log(mech.style.display);
    
    if(mech.style.display == 'flex'){mech.style.display = 'none'}
    else{mech.style.display = "flex"}
}
function iss()
{
    const mech = document.getElementById('iss-matter')
    console.log(mech.style.display);
    
    if(mech.style.display == 'flex'){mech.style.display = 'none'}
    else{mech.style.display = "flex"}
}
function commu()
{
    const mech = document.getElementById('commu-matter')
    console.log(mech.style.display);
    
    if(mech.style.display == 'flex'){mech.style.display = 'none'}
    else{mech.style.display = "flex"}
}