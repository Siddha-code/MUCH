noseX = 0;
noseY = 0;
function preload() {
    much = loadImage('https://i.postimg.cc/L6fc5N4m/moustache-png-image-mustache-png-2000-1021.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotpose);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(much, noseX, noseY, 100, 80)
}
function Namer() {
    Name = document.getElementById("Name_input").value + ".png";
   console.log("Name Set As" , Name);
}
setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },250);
    function take_snapshot() {
        save(Name);
    }
    function modelLoaded() {
        console.log('PoseNet Is Neutrlised');
    }
    function gotpose(results) {
        if (results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x - 50;
            noseY = results[0].pose.nose.y + 20;
            console.log("nose x =" + noseX);
            console.log("nose y =" + noseY);
        }
    }