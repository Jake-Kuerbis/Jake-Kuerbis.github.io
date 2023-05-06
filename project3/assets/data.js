/*
$(document).ready(function () {

    $('body').css('display', 'none');
    $('body').fadeIn(2000);

});

*/

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




console.log('---------------- NEW STUFF ------------------')

const dataUrl = 'https://data.cityofnewyork.us/resource/2xir-kwzz.json'
const graph = document.querySelector('#graph')
const main = document.querySelector('main')
const dropdown = document.querySelector('#shift') 

let sampleData = []

const parseData = (data) => {
    let sampleID = 0
    let beachName = 0
    let enterococci = 0
    let sampleLocation = 0
    let turbidity = 0
    let date = '092022'


    data.forEach(sample => {
        const samplePoint = document.createElement('div')
        samplePoint.classList.add('sampleData')
        main.appendChild(samplePoint)

        const listItemTwo = document.createElement('li') // Make the `li`
        
        const itemTitleThree = document.querySelector('.p') // Make an `h2`
		itemTitleThree.innerHTML = date// Put the JSON title inside
		listItemTwo.appendChild(itemTitleThree) // And add it to the `li`!

        const itemTitleTwo = document.createElement('p') // Make an `h2`
		itemTitleTwo.innerHTML = sample.beach_name + '<br>' + '<br>' + sample.sample_id + '<br>' + 'sample location: ' + sample.sample_location + '<br>' + 'enterococci results: ' + sample.enterococci_results// Put the JSON title inside
		listItemTwo.appendChild(itemTitleTwo) // And add it to the `li`!

        

        if (sample.beach_name = 'beach_name', sample.sample_id = 'sample_id',  sample.enterococci_results = 'enterococci_results', sample.sample_location = 'sample_location') {
            beachName++
            sampleID++
            sampleLocation++
            enterococci++
        } 
        
    

       // console.log(classs.sample_class)
       graph.appendChild(listItemTwo)

    })

    console.log('beach name: ' + beachName)
    console.log('sample id: ' + sampleID)
    console.log('sample location: ' + sampleLocation)

    document.getElementById('gray').innerHTML = 'Beach Name: ' + beachName;
    document.getElementById('orange').innerHTML = 'Sample ID: ' + sampleID;
    document.getElementById('red').innerHTML = 'Sample Location: ' + sampleLocation;

    graph.style.setProperty('--color--gray', beachName)
    graph.style.setProperty('--color--orange', sampleID)
    graph.style.setProperty('--color--red', sampleLocation)
}

dropdown.oninput = () => {
	// Filter the locally-copied data
	const dataCenter = localData.filter(sample => sample.sample_location == 'Center')
    const dataLeft = localData.filter(sample => sample.sample_location == 'Left')

	// Parse either set depending on the dropdown value
	if (dropdown.value == 'Center') parseData(dataCenter)
    else if (dropdown.value == 'Left') parseData(dataLeft)
	else parseData(localData) // Send the whole, unfiltered dataset
}



fetch(dataUrl + '?$limit=150')
    .then(response => response.json())
    .then(data => {
        localData = data
        parseData(localData)
        //console.log(data)
    })

//&sample_class=Compliance
//&turbidity_ntu=0.84
//$where=turbidity_ntu > 1

function myFunction() {
    var click = document.querySelector(".containerTwo");
    var clickResize = document.querySelector(".ManhattanBeachClick");
    var disappear = document.querySelector('.hoverContainer');
    var disappearr = document.querySelector('.hoverContainerClick')
    var clickResizeTwo = document.querySelector(".ManhattanBeachHoverClick");
    var clickResizeThree = document.querySelector(".hoverContainerTwo");
    var offClick = document.querySelector(".containerTwo");
    var display = document.querySelector("#background_vid");
    if (disappear.style.display === "block") {
        click.style.gridTemplateColumns = "repeat(3, 1fr)";
        disappear.style.display = "none";
        disappearr.style.display = "block";
        //clickResize.style.width = "35rem";
        //clickResizeTwo.style.width = "35rem";
        //clickResizeThree.style.width = "22rem";
        display.style.display = "block";
      } else {
        disappear.style.display = "block";
        disappearr.style.display = "none";
        //click.style.gridTemplateColumns = "repeat(3, 1fr)";
        //clickResize.style.width = "12rem";
        //clickResizeTwo.style.width = "12rem";
        display.style.display = "none";
      }
}