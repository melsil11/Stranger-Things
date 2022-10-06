

function elevenBio(){
    document.getElementById('hidden1').innerHTML ="Eleven was discovered in the woods by a group of kids that would soon become her friends. "
}

function removeHandler() {
    document.getElementById('bio1').removeEventListener('click', elevenStatus)
}
function elevenStatus(){
    document.getElementById('hidden1').innerHTML ="Alive"
}

document.getElementById('bio1').addEventListener('click', elevenBio)
document.getElementById('bio2').addEventListener('click', )  
document.getElementById('bio3').addEventListener('click', ) 
document.getElementById('bio4').addEventListener('click', )
document.getElementById('bio5').addEventListener('click', )  
document.getElementById('bio6').addEventListener('click', ) 
document.getElementById('status1').addEventListener('click', elevenStatus)
document.getElementById('status2').addEventListener('click', )  
document.getElementById('status3').addEventListener('click', ) 
document.getElementById('status4').addEventListener('click', )
document.getElementById('status5').addEventListener('click', )  
document.getElementById('status6').addEventListener('click', ) 