const container = document.querySelector('.container')
const singleCard = document.querySelector('#singleCard')
const form = document.querySelector('form')



// function to display Eleven bio
document.getElementById('bio1').addEventListener('click', elevenBio)
function elevenBio(){
    document.getElementById('hidden1').innerHTML ="Eleven was discovered in the woods by a group of kids that would soon become her friends. "
}
// Function to display if Eleven alive or dead
document.getElementById('status1').addEventListener('click', elevenStatus)
function elevenStatus(){
    document.getElementById('hidden1').innerHTML ="Alive"
}
// Function to display Lucas Bio
document.getElementById('bio2').addEventListener('click', lucasBio) 
function lucasBio(){
    document.getElementById('hidden2').innerHTML="Lucas is a sensable kid who believes in making responsible decisions."
}
// function to display if Lucas is dead or alive
document.getElementById('status2').addEventListener('click', lucasStatus)
function lucasStatus(){
    document.getElementById('hidden2').innerHTML ="Alive"
}
// function to display Steve bio
document.getElementById('bio3').addEventListener('click', steveBio) 
function steveBio(){
    document.getElementById('hidden3').innerHTML="Once a hated character, Steve has had a character metamorphosis and is now a trusted friend."
}
// Function to display if Steve alive or dead
document.getElementById('status3').addEventListener('click', steveStatus)
function steveStatus(){
    document.getElementById('hidden3').innerHTML ="Alive"
}
// function to display Will bio
document.getElementById('bio4').addEventListener('click', willBio)
function willBio(){
    document.getElementById('hidden4').innerHTML="Trapped in the upsidedown, this determined kid found a way to communicate with the world and lead his family to his rescue."
}
// Function to display if Will alive or dead
document.getElementById('status4').addEventListener('click', willStatus)
function willStatus(){
    document.getElementById('hidden4').innerHTML ="Alive"
}
// function to display Max bio
document.getElementById('bio5').addEventListener('click', maxBio)
function maxBio(){
    document.getElementById('hidden5').innerHTML="A new commer to Hawkins, Indiana, Max has quickly become a beacon of fierce force of survival."
}
// Function to display if Max alive or dead
document.getElementById('status5').addEventListener('click', maxStatus)
function maxStatus(){
    document.getElementById('hidden5').innerHTML ="Alive"
}
// function to display Billy bio
document.getElementById('bio6').addEventListener('click', billyBio)
function billyBio(){
    document.getElementById('hidden6').innerHTML="A deep character with layers of trauma made Billy a perfect host for the evil that would surround the residents of Hawkins."
}
// Function to display if Billy alive or dead
document.getElementById('status6').addEventListener('click', billyStatus)
function billyStatus(){
    document.getElementById('hidden6').innerHTML ="Dead?"
}





document.getElementById('bio1').addEventListener('click', elevenBio)
document.getElementById('bio2').addEventListener('click', lucasBio)  
document.getElementById('bio3').addEventListener('click', steveBio) 
document.getElementById('bio4').addEventListener('click', willBio)
document.getElementById('bio5').addEventListener('click', maxBio)  
document.getElementById('bio6').addEventListener('click', billyBio) 
document.getElementById('status1').addEventListener('click', elevenStatus)
document.getElementById('status2').addEventListener('click', lucasStatus)  
document.getElementById('status3').addEventListener('click', steveStatus) 
document.getElementById('status4').addEventListener('click', willStatus)
document.getElementById('status5').addEventListener('click', maxStatus)  
document.getElementById('status6').addEventListener('click', billyStatus) 

// function removeHandler() {
//     document.getElementById('bio1').removeEventListener('click', elevenStatus)
// }

// show one card
// const showOneCard = (card) => {
//     while(singleCard.firstChild){
//         singleCard.removeChild(singleCard.firstChild)
//     }
//     console.log(card)
//     container.getElementsByClassName.display = 'none'
//     const carddeck = document.createElement('div')
//     carddeck.classList.add('singleCard')
    
// }