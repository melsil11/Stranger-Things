const containers = document.getElementsByClassName('container')
const singleCard = document.getElementById('card')
const search = document.getElementsByClassName('searchBox')



// function to display Eleven bio
document.getElementById('bio1').addEventListener('click', elevenBio)
function elevenBio(){
    document.getElementById('hidden1').innerHTML ="Eleven was discovered in the woods by a group of kids that would soon become her family. Her new family would soon discover that she was no ordinary girl."
}
// Function to display if Eleven alive or dead
document.getElementById('status1').addEventListener('click', elevenStatus)
function elevenStatus(){
    document.getElementById('hidden1').innerHTML ="Alive"
}
// Function to display Lucas Bio
document.getElementById('bio2').addEventListener('click', lucasBio) 
function lucasBio(){
    document.getElementById('hidden2').innerHTML="Lucas is a sensable kid who found it hard to believe in Elevens powers until it became undeniable"
}
// function to display if Lucas is dead or alive
document.getElementById('status2').addEventListener('click', lucasStatus)
function lucasStatus(){
    document.getElementById('hidden2').innerHTML ="Alive"
}
// function to display Steve bio
document.getElementById('bio3').addEventListener('click', steveBio) 
function steveBio(){
    document.getElementById('hidden3').innerHTML="Once a hated character, Steve has had a character metamorphosis and is now a trusted friend to the group."
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

// function to display Johnathan bio
document.getElementById('bio7').addEventListener('click', johnBio)
function johnBio(){
    document.getElementById('hidden7').innerHTML='Once considered a loner, Johnathan has demonstrated great courage in protecting those he loves.'
}
// Function to display if Nancy alive or dead
document.getElementById('status7').addEventListener('click', johnStatus)
function johnStatus(){
    document.getElementById('hidden7').innerHTML ='Alive'
}

// function to display Robin bio
document.getElementById('bio8').addEventListener('click', robinBio)
function robinBio(){
    document.getElementById('hidden8').innerHTML='A delightful newcomer to the season, Robin has quickly won the hearts of fans for her chemistry with pal Steve.'
}
// Function to display if Robin alive or dead
document.getElementById('status8').addEventListener('click', robinStatus)
function robinStatus(){
    document.getElementById('hidden8').innerHTML ='Alive'
}

// function to display Dustin bio
document.getElementById('bio9').addEventListener('click', dustinBio)
function dustinBio(){
    document.getElementById('hidden9').innerHTML='Not only book smart, Dustin has faced danger and demonstrated great courage facing the evil that has perpetrated Hawkins.'
}
// Function to display if Dustin alive or dead
document.getElementById('status9').addEventListener('click', dustinStatus)
function dustinStatus(){
    document.getElementById('hidden9').innerHTML ='Alive'
}

// function to display Jim bio
document.getElementById('bio10').addEventListener('click', jimBio)
function jimBio(){
    document.getElementById('hidden10').innerHTML='A former man of the law, Jim elected to fight the evils of Hawkins with both his badge and his fists.'
}
// Function to display if Jim alive or dead
document.getElementById('status10').addEventListener('click', jimStatus)
function jimStatus(){
    document.getElementById('hidden10').innerHTML ='Alive'
}

// function to display Nancy bio
document.getElementById('bio11').addEventListener('click', nancyBio)
function nancyBio(){
    document.getElementById('hidden11').innerHTML='Once seen as a spoiled popular girl, Nancy has proven to herself and others that she is more than just a pretty face.'
}
// Function to display if Nancy alive or dead
document.getElementById('status11').addEventListener('click', nancyStatus)
function nancyStatus(){
    document.getElementById('hidden11').innerHTML ='Alive'
}

// function to display Joyce bio
document.getElementById('bio12').addEventListener('click', joyceBio)
function joyceBio(){
    document.getElementById('hidden12').innerHTML="A determined mother with a fierce left swing, Joyce protects her family from the evils that invade Hawkins. Not escaping the heartache of losing the man she loved, this fighter continues on. "
}
// Function to display if Joyce alive or dead
document.getElementById('status12').addEventListener('click', joyceStatus)
function joyceStatus(){
    document.getElementById('hidden12').innerHTML ='Alive'
}

// function to display Mike bio
document.getElementById('bio13').addEventListener('click', mikeBio)
function mikeBio(){
    document.getElementById('hidden13').innerHTML='Over time Mike has shown the complications involved with loving Eleven, which have challenged him and lead to great character growth.'
}
// Function to display if Mike alive or dead
document.getElementById('status13').addEventListener('click', mikeStatus)
function mikeStatus(){
    document.getElementById('hidden13').innerHTML ='Alive'
}

// function to display Erica bio
document.getElementById('bio14').addEventListener('click', ericaBio)
function ericaBio(){
    document.getElementById('hidden14').innerHTML='The fiery younger sister of Lucas, Erica has become a fierce fighter in the battle for Hawkins'   
}
// Function to display if Erica alive or dead
document.getElementById('status14').addEventListener('click', ericaStatus)
function ericaStatus(){
    document.getElementById('hidden14').innerHTML ='Alive'
}

// function for sound
let myAudio = document.querySelector('#audio')
myAudio.play()
document.getElementById('myBody').addEventListener('click', myAudio)

// /////////////////////////////////////////////////////////
// get search bar element
const searchInput = document.getElementById("searchInput")

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("card")

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target
    
    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase()
    
    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();
        
        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.display = "block"
        } else {
            // no match, don't display name
            nameElement.style.display = "none"
        }
    }
})

// document.getElementById('bio1').addEventListener('click', elevenBio)
// document.getElementById('bio2').addEventListener('click', lucasBio)  
// document.getElementById('bio3').addEventListener('click', steveBio) 
// document.getElementById('bio4').addEventListener('click', willBio)
// document.getElementById('bio5').addEventListener('click', maxBio)  
// document.getElementById('bio6').addEventListener('click', billyBio) 
// document.getElementById('status1').addEventListener('click', elevenStatus)
// document.getElementById('status2').addEventListener('click', lucasStatus)  
// document.getElementById('status3').addEventListener('click', steveStatus) 
// document.getElementById('status4').addEventListener('click', willStatus)
// document.getElementById('status5').addEventListener('click', maxStatus)  
// document.getElementById('status6').addEventListener('click', billyStatus) 

