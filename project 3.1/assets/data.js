console.log('---------------- NEW STUFF ------------------')

const dataUrl = 'https://data.cityofnewyork.us/resource/2xir-kwzz.json'

const beach = document.querySelector('#one')
const sectionOne = document.querySelector('.container')
const sectionTwo = document.querySelector('.containersectiontwo')
const backClick = document.querySelector('.back')
const backgroundVideo = document.querySelector('.vid')
const backgroundLoop = document.querySelector('#background_vidd')
const imageTop = document.querySelector('.hoverPreview')
const imageTopTwo = document.querySelector('.hoverPreviewTwo')
const hoverEffect = document.querySelector('.hovertext')
const graph = document.querySelector('#indexList')


const main = document.querySelector('main')
const listItemTwo = document.querySelector('li') 


//const paragraph = document.querySelector('p')
//paragraph.className = "newStyle";

// let sampleData = []

// const parseData = (data) => {
//     let sampleID = 0
//     let beachName = 0
//     let enterococci = 0
//     let sampleLocation = 0
//     let turbidity = 0
//     // let date = '092022'
//     let center = 0


//     data.forEach(sample => {
//         // // const samplePoint = document.createElement('div')
//         // samplePoint.classList.add('sampleData')
//         // main.appendChild(samplePoint)

//         // const listItemTwo = document.createElement('li') // Make the `li`
        
//         // const title = document.querySelector('.title') // Get p name
// 		// title.innerHTML = sample.beach_name// Put the JSON title inside
// 		// // listItemTwo.appendChild(title) // And add it to the `li`!

//         // const sampleID = document.querySelectorAll('.sampleID') // Get p name
// 		// sampleID.innerHTML = sample.sample_id// Put the JSON title inside
// 		// // listItemTwo.appendChild(sampleID) // And add it to the `li`!

//         // const sampleLocationCenter = document.querySelector('.sampleLocation') // Get p name
// 		// sampleLocationCenter.innerHTML = 'Sample_location: ' + sample.sample_location// Put the JSON title inside
// 		// // listItemTwo.appendChild(sampleLocationCenter) // And add it to the `li`!

//         // const bacteriaResults = document.querySelector('.bacteriaResults') // Get p name
// 		// bacteriaResults.innerHTML = 'Bacteria_results: ' + sample.enterococci_results// Put the JSON title inside
// 		// // listItemTwo.appendChild(bacteriaResults) // And add it to the `li`!

//         const itemTitle = document.createElement('p') // Make an `h2`
// 		itemTitle.innerHTML = sample.beach_name + '<br>' + '<br>' + sample.sample_id + '<br>' + 'sample location: ' + sample.sample_location + '<br>' + 'enterococci results: ' + sample.enterococci_results// Put the JSON title inside
// 		listItemTwo.appendChild(itemTitle) // And add it to the `li`!

        

//         if (sample.beach_name = 'beach_name', sample.sample_id = 'sample_id',  sample.enterococci_results = 'enterococci_results', sample.sample_location = 'sample_location') {
//             beachName++
//             sampleID++
//             sampleLocation++
//             enterococci++
//         } 
        
    

//        // console.log(classs.sample_class)
//        graph.appendChild(listItemTwo)

//     })

    

//     console.log('beach name: ' + beachName)
//     console.log('sample id: ' + sampleID)
//     console.log('sample location: ' + sampleLocation)

//     //document.getElementById('gray').innerHTML = 'Beach Name: ' + beachName;
//     //document.getElementById('orange').innerHTML = 'Sample ID: ' + sampleID;
//     //document.getElementById('red').innerHTML = 'Sample Location: ' + sampleLocation;

//     //paragraph.style.setProperty('--color--gray', beachName)
//     //graph.style.setProperty('--color--orange', sampleID)
//     //graph.style.setProperty('--color--red', sampleLocation)
// }

// //dropdown.oninput = () => {
// 	// Filter the locally-copied data
// 	// const dataCenter = localData.filter(sample => sample.sample_location == 'Center')
//     //const dataLeft = localData.filter(sample => sample.sample_location == 'Left')

// 	// Parse either set depending on the dropdown value
// 	//if (dropdown.value == 'Center') parseData(dataCenter)
//     //else if (dropdown.value == 'Left') parseData(dataLeft)
// 	//else parseData(localData) // Send the whole, unfiltered dataset
// //}



// fetch(dataUrl + '?$limit=150')
//     .then(response => response.json())
//     .then(data => {
//         //localData = data
//         parseData(data)
//         //console.log(data)
//     })

function myFunction() {
    if (sectionOne.style.display === "block") {
      sectionOne.style.display = "none";
      backgroundVideo.style.display = "block"
      sectionTwo.style.display = "block";
      backClick.style.display = "block";
      backgroundLoop.style.display = "none";
      imageTop.style.display = "block";
      document.querySelector("#barRight").style.display = "none";
      document.querySelector(".arrow").style.display = "none";
    } else {
      sectionOne.style.display = "block";
      sectionTwo.style.display = "none";
      backgroundVideo.style.display = "none"
      backClick.style.display = "none";
      backgroundLoop.style.display = "block";
      imageTop.style.display = "none";
      document.querySelector("#barRight").style.display = "block";
      document.querySelector(".arrow").style.display = "block";
    }
  }

function buttonFunction() {
    if (document.querySelector("h1").style.color === "rgb(40, 40, 40)") {
        document.querySelector("h1").style.color = "rgb(80, 20, 100)"
    }

    else {
        document.querySelector("h1").style.color = "rgb(40, 40, 40)"
    }
    
}

function myFunctionTwo() {
    if (document.querySelector(".hovertext").style.color === "rgb(40, 40, 40)") {
        document.querySelector(".hovertext").style.color = "green";
    }
    else {
        document.querySelector(".hovertext").style.color = "rgb(40, 40, 40)";
    }
  }

// hoverEffect.onmouseover = (event) => {
//     if (backgroundLoop.style.display === "block") {
//         backgroundLoop.style.display = "none";
//     }
//     else {
//         backgroundLoop.style.display = "block";
//     }
// }

  (function() {
    var pres = document.querySelectorAll("#background_vidd img");
    var len = pres.length;
    for(var i = 0; i < pres.length; i = i + 1) {
        pres[i].style.display = 'none';
    }
    var a = 0;
    window.setInterval(function() {
        pres[a].style.display = 'none';
        pres[(a + 1)%len].style.display = 'block';
        a = (a + 1) % len;
    }, 800);
}());

var mini = true;

function toggleSidebar() {
    if (mini) {
        console.log("opening sidebar");

        document.querySelector("#barRight").style.width = "30vw";
    document.querySelector("#indexList").style.gridTemplateColumns = "repeat(4, 2fr)";
    document.querySelector("#indexList").style.marginRight = "28rem";
    backgroundLoop.style.marginRight = "28rem";
    document.querySelector(".subheader").style.display = "block";
    document.querySelector(".coney").style.display = "block";
    document.querySelector(".arrow").style.display = "none";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.querySelector("#barRight").style.width = "2rem";
    document.querySelector("#indexList").style.gridTemplateColumns = "";
    document.querySelector("#indexList").style.marginRight = "0rem";
    backgroundLoop.style.marginRight = "0rem";
    document.querySelector(".subheader").style.display = "none";
    document.querySelector(".coney").style.display = "none";
    document.querySelector(".arrow").style.display = "block";
    this.mini = true;
  }
}
