function StartClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jGTCHd3OH/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotresults);
}

function gotresults(error, results) {

}