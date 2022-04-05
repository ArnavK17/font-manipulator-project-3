
leftwrist = 0;
rightwrist = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(510,160);
    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model is Initialized"); 
}
function gotPoses(result){
if(result.length>0){
    console.log(result);
leftwrist= result[0].pose.leftWrist.x;
rightwrist= result[0].pose.rightWrist.x;
difference= floor( leftwrist - rightwrist);
}
}
function draw(){
    background("6C91C2");

textSize(difference);
    fill("black");
    text("Arnav",40,300);
}