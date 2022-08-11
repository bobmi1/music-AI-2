song = "";
leftwristX = 0;
rightwristX = 0;
leftwristY = 0;
rightwristY = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas( 600, 500 );
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded );
    poseNet.on("pose", gotPoses);
}
function draw() {
    
}
function gotPoses(results){
    if (results.length > 0 ){
        console.log( "Results are "+ results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        leftwristY = results[0].pose.leftWrist.y;
        rightwristY = results[0].pose.rightWrist.y; 

        console.log("leftwristX is " + leftwristX + "leftwristY is " + leftwristY + "rightwristX is " + rightwristX + "rightwristY is " + rightwristY );
       
    }
 }

function modelLoaded(){
    console.log("The Posent is Loaded")
 }