//BG
let r = 0
let g = 0
let b = 0

//shader
let myShader;

//Google Image Search
let img;
let url = "https://www.googleapis.com/customsearch/v1?";
let apikey = "AIzaSyD8kkvH4qAvUGcTf4pGDzXgI3wmZi8bE9E"; //register API key here: https://developers.google.com/custom-search/json-api/v1/overview
let engineID = "012341178072093258148:awktesmhn9w"; // //https://cse.google.com/all  | create search engine and get the searchengine ID
let query = "phone"; //search keywords
let searchType = "image";
let imgSize = "large"; //https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters
let request; //full API
let getImg;

let keywords = [];
let keyword;
let incomingWord;
let kannada;

let pointClouds = [];

let newImg;
let posX = 0;
let posY = 0;
let posZ = 0;

let imgX = 0;
let imgY = 0;
let imgZ = 0;

let pos =0;


//livep5
let myVideo;
let myCamera;
let friends = {};
let liveMediaConnection;
let parsedData;

let canvas1
let canvas2;
let mapCamera;


document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#go").addEventListener("click", fetchImageSend);
})


function preload() {
  
  myShader = loadShader("shader.vert", "shader.frag");

}


function setup() {
    let canvasWidth = document.getElementById("right-canvas").offsetWidth;
    let canvasHeight = document.getElementById("right-canvas").offsetHeight;
     canvas1 =createCanvas(canvasWidth, canvasHeight, WEBGL);
        canvas1.parent('right-canvas');



  // img = loadImage("strokes.jpg");
  // img = loadImage("woman.jpg");
  // img = loadImage("woman.jpg");
  
  myCamera = createCamera();
//   mapCamera = createCamera();

//   console.log(mapCamera);
//   mapCamera.parent(canvas2);
  

  //search button
    // search = createButton("GO");
    // search.style("font-family", "kannada");
    // let col = color("#E25544");
    // search.style('background-color', col);
    // search.style('font-color', 255);
    // search.mousePressed(fetchImageSend);
    // search.size(width,50);
    // search.position(0,height-70);

//input
    // incomingWord = createInput();
    // incomingWord.style("font-family", "kannada");
    // incomingWord.size(width,100);
    // incomingWord.position(0,0);

  
  //livep5 #01
  liveMediaConnection = new p5LiveMedia(this, null, null, "my-oom");
  liveMediaConnection.on("stream", gotStream);
  liveMediaConnection.on("data", gotData);
  myVideo = createCapture(VIDEO, gotLocalMediaStream);
  myVideo.muted = true;
  myVideo.hide();
  
  stroke(0);
  debugMode(GRID);

  
  
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  g = map(mouseX, 0, 600, 255, 0);
  b = map(mouseY, 0, 600, 255, 0);
  a = map(mouseY, 0, 10, 1, 0);
  background(r,g,b, a);
  // background(255);
  // background(255, 50);
  
  orbitControl(1,1,0.01);
  noStroke();
  
  //shader
  
  push();
  shader(myShader);

  // Send the frameCount to the shader
  myShader.setUniform("uFrameCount", frameCount);

  // Rotate our geometry on the X and Y axes
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);
  
  //rotateX(mouseX/500);
  //rotateY(mouseY/500);

  // Draw some geometry to the screen
  // We're going to tessellate the sphere a bit so we have some more geometry to work with
  sphere(800, 500, 500);
  
  
  pop();
  
  
  // sphereDetail(3);

  // translate(width/2,height/2);
  // rotateY(radians(frameCount));
  

  // console.log(myCamera.eyeX);
  
  //livep5 #02

  for (let id in friends) {
    let p = friends[id];
    p.show();
  }
  
  
  // for (let getImg in keywords) {
  //   let g = keywords[query];
  //   g.show();
  // }

  if (img){
  
  convertImg();
  }
  
  
  

  
    
  if (keyIsDown(UP_ARROW)){
    myCamera.move(0,0,-2);
  }
  if (keyIsDown(DOWN_ARROW)){
    myCamera.move(0,0,2);
  }
  if (keyIsDown(LEFT_ARROW)){
    myCamera.pan(0.01);
  }
  if (keyIsDown(RIGHT_ARROW)){
    myCamera.pan(-0.01);
  }
  
  // do this once every 10 frames
  if (frameCount % 10 === 0){
    sharePosition();
  }
  
}




//google
function fetchImageSend() {
//   query = incomingWord.value();
  query = document.querySelector('input').value;
  request =
    url +
    "key=" +
    apikey +
    "&cx=" +
    engineID +
    "&imgSize=" +
    imgSize +
    "&searchType=" +
    searchType +
    "&q=" +
    query;
  // console.log(request);
  loadJSON(request, googleImg); //this is the key syntax and line of code to make a query request and get a query response
  console.log("fetching for send");
  keywords.push(query);
  
  if (liveMediaConnection){
    let imgSend = {
      keywords: keywords,
    }
    liveMediaConnection.send(JSON.stringify(imgSend));
  }
  
  posX = myCamera.eyeX;
  posY = myCamera.eyeY;
  posZ = myCamera.eyeZ;

  

}


function fetchReceive(keywordsArray) {
  console.log("featch receive keywordsArray is " + keywordsArray);
  
  
  query = keywordsArray[keywordsArray.length -1];
  request =
    url +
    "key=" +
    apikey +
    "&cx=" +
    engineID +
    "&imgSize=" +
    imgSize +
    "&searchType=" +
    searchType +
    "&q=" +
    query;
  // console.log(request);
  loadJSON(request, googleImg); //this is the key syntax and line of code to make a query request and get a query response
  console.log("fetching from receive");
  pos = random(-width/4, width/4);
  
  console.log(pos);
  
  posX = myCamera.eyeX;
  posY = myCamera.eyeY;
  posZ = myCamera.eyeZ;
  
  pos = random(-width/4, width/4);
}

function googleImg(imgData) {
  getImg = imgData.items[0].image.thumbnailLink;
  document.getElementById("imgFetched").src=getImg;
  loadImage(getImg, 
            incomingImg => {img = incomingImg; 
                            
                            pointClouds.push(img);
                            
                           img.resize(300,300);
                            
                            console.log("new image added");
                    
                           });


  
}



//livep5 #03

function gotData(data, id) {
  // console.log("got incoming data from peer with ID", id);
  parsedData = JSON.parse(data);
  
  
  
  if(friends[id]){
  friends[id].update(parsedData.x,parsedData.y,parsedData.z);
    }
  // console.log("this is data" + data);
  
  imgX = parsedData.x;
  imgY = parsedData.y;
  imgZ = parsedData.z;
  
  if(parsedData.keywords){
  fetchReceive(parsedData.keywords);
  keywords.push(parsedData.keywords);
  }
  console.log("once received, the keywords array" + keywords);
}

// this function is called when our webcamera stream is ready
function gotLocalMediaStream(stream) {
  console.log("got local stream!");
  liveMediaConnection.addStream(stream, "CAPTURE");
}

// this function is called when a remote stream is ready
function gotStream(stream, id) {
  console.log("got remote stream!");
  
  friends[id] = new Friend(stream, id);

  // hide the HTML <video> element
  stream.hide();
}



function convertImg(){
  // if (img) {
      // console.log("drawing");
  
  
  for (let i = 0; i < pointClouds.length; i++) {
      let pointCloud = pointClouds[i];
      push();
      translate(imgX, imgY, imgZ);
    console.log(pointCloud);
      // translate(myCamera.eyeX, myCamera.eyeY, myCamera.eyeZ);
      // translate(posX-100, posY, posZ);
    
      // translate(pos,pos);

      // rotateY(radians(frameCount));
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.005);
      let tiles = 50;
      let tileSize = pointCloud.width / tiles;

      
      for (let x = 0; x < tiles; x++) {
        for (let y = 0; y < tiles; y++) {
          let c = pointCloud.get(x * tileSize, y * tileSize);
          let b = map(brightness(c), 0, 255, 1, 0);
          let z = map(b, 0, 1, -150, 150);

          push();
          // translate(x*tileSize - width/2, y*tileSize - height/2, z);
          // fill(c);
          // ambientMaterial(c);
          // sphere(tileSize*b*0.5);
          stroke(c); // Change the color
          strokeWeight(10);
          point(x * tileSize, y * tileSize, z);
          pop();
        }
      }
      pop();
    }
  
}


function sharePosition(){
  if (liveMediaConnection){
    let dataToSend = {
      x: myCamera.eyeX,
      y: myCamera.eyeY,
      z: myCamera.eyeZ,
    }
    liveMediaConnection.send(JSON.stringify(dataToSend));
  }
}




class Friend {
    constructor(stream, id){
      this.id = id;
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.stream = stream;
    }
    
    update(x,y,z){
      this.x = x;
      this.y = y;
      this.z = z;
    }
    
    show(){
    if(this.stream){
      push();
      translate(this.x, this.y, this.z);
      texture(this.stream);
      box(100, 100);
      pop();
    }
    }
  }





//   var s2 = function(sketch ) {

//     sketch.setup = function() {
//      let canvas2 = sketch.createCanvas(500, 500, sketch.WEBGL);
//      canvas2.parent('route-map');
//     //  canvas2.position(100,0);
//    }
//    sketch.draw = function() {
//      //for canvas 2
//      console.log(canvas1);
//      sketch.image(canvas1, 500,500);
//     //  sketch.background(100);
//     //  sketch.rotateX(sketch.frameCount * 0.01);
//     //  sketch.rotateZ(sketch.frameCount * 0.02);
//     //  sketch.cone(30, 50);
//    }
//  };
 
//  // create the second instance of p5 and pass in the function for sketch 2
//  new p5(s2);