function start_identifying(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/caxJZvNEz/model.json", ModelReady);
}

function ModelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    
    if(error){
        console.log(error)
    }
    else{
        console.log(results);

        color_r = Math.floor(Math.random() * 255) + 1;
        color_g = Math.floor(Math.random() * 255) + 1;
        color_b = Math.floor(Math.random() * 255) + 1;

        console.log(color_r)

        
        document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(2);
        document.getElementById("accuracy").style.color = "rgb("+color_r+","+color_g+","+color_b+")"+"%";

        if(results[0].label == "Meowing"){
            document.getElementById("display").src = "cat.png";
    
        }
        else if(results[0].label == "Barking"){
            document.getElementById("display").src = "dog.png";
    
        }
        else if(results[0].label == "Mooing"){
            document.getElementById("display").src = "cow.jpg";
    
        }
        else{
            document.getElementById("display").src = "lion.jpeg";
    
        }
    }
}