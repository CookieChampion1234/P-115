function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}

function draw(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modeLoaded(){
    console.log("Posenet is initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x: " + noseX);
        console.log("Nose y: " + noseY);
    }
}

function takeSnapshot(){
    save("myFilterImage.png")
}