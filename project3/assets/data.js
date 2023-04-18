const dataUrl = 'https://data.cityofnewyork.us/resource/bkwf-xfky.json'

const parseData = (classes) => {
    let sampleCompliance = 0
    let sampleOperational = 0
    let sampleResample = 0

    classes.forEach(classs => {
        if (classs.sample_class == 'Compliance') {
            sampleCompliance++
        } 
        else if (classs.sample_class == 'Operational') {
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
}


fetch(dataUrl + '?$limit=100000')
    .then(response => response.json())
    .then(data => {
        parseData(data)
        //console.log(data)
    })

//&sample_class=Compliance
//&turbidity_ntu=0.84
//$where=turbidity_ntu > 1