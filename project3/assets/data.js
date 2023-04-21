/*
$(document).ready(function () {

    $('body').css('display', 'none');
    $('body').fadeIn(2000);

});
*/


console.log('---------------- NEW STUFF ------------------')

const dataUrl = 'https://data.cityofnewyork.us/resource/bkwf-xfky.json'
const graph = document.querySelector('#graph')
const main = document.querySelector('main')

let sampleData = []

const parseData = (data) => {
    let sampleCompliance = 0
    let sampleOperational = 0
    let sampleResample = 0
    let turbidity = 0

    data.forEach(sample => {
        const samplePoint = document.createElement('div')
        samplePoint.classList.add('sampleData')
        main.appendChild(samplePoint)

        if (sample.sample_class == 'Compliance') {
            sampleCompliance++
            
        } 
        else if (sample.sample_class == 'Operational') {
            sampleOperational++
        }
        else {
            sampleResample++
        }

       // console.log(classs.sample_class)

    })

    console.log('compliance sample: ' + sampleCompliance)
    console.log('operational sample: ' + sampleOperational)
    console.log('resample: ' + sampleResample)

    document.getElementById('gray').innerHTML = 'Compliance Sample: ' + sampleCompliance;
    document.getElementById('orange').innerHTML = 'Operational sample: ' + sampleOperational;
    document.getElementById('red').innerHTML = 'Resample: ' + sampleResample;

    graph.style.setProperty('--color--gray', sampleCompliance)
    graph.style.setProperty('--color--orange', sampleOperational)
    graph.style.setProperty('--color--red', sampleResample)
}


fetch(dataUrl + '?$limit=200000')
    .then(response => response.json())
    .then(data => {
        parseData(data)
        //console.log(data)
    })

//&sample_class=Compliance
//&turbidity_ntu=0.84
//$where=turbidity_ntu > 1

