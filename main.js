img = "";
Status = "";
objects =[];

function setup()
{
canvas = createCanvas(640,420);
canvas.center();    
objectdetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function preload()
{
 img = loadImage("dog_cat.jpg");   
}

function draw()
{
image(img,0 , 0, 640, 420);
if(Status  != ""){
 for(i = 0; i < objects.length; i++){
     document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTED";

     fill("red");
     percent = floor(objects[i].confidence * 100);
     text(objects[i].label + " " + percent + " % ", objects[i].x + 15, objects[i].y + 15); 
    noFill();
    stroke("red"); 
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
 }   
}
}


function modelLoaded() {
 console.log("Model Loaded");
 Status = true;
 objectdetector.detect(img, gotResult);   
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}