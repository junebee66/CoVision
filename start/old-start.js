// function mosesCharacter(){

//     fetch("./bible.json")
//         .then (function(resp){
//         return resp.json();
//     })
//     .then(function (data){

//         let mosesName = data.characters[1].name;
//         document.querySelector("#name").innerHTML = mosesName;

//         let mosesDes = data.characters[1].description;
//         document.querySelector("#storyDes").innerHTML = mosesDes;

//         document.getElementById("pic").src="assets/moses.png";

//         let mosesQ = data.characters[1].god;
//         document.querySelector("#bibleVerse").innerHTML = mosesQ;

//         // console.log(godQ);

//     });
// }


// function abrahamCharacter(){

//     fetch("./bible.json")
//         .then (function(resp){
//         return resp.json();
//     })
//     .then(function (data){

//         let abrahamName = data.characters[0].name;
//         document.querySelector("#name").innerHTML = abrahamName;

//         let abrahamDes = data.characters[0].description;
//         document.querySelector("#storyDes").innerHTML = abrahamDes;
        
//         document.getElementById("pic").src="assets/abraham.png";

//         let abrahamQ = data.characters[0].god;
//         document.querySelector("#bibleVerse").innerHTML = abrahamQ;

//     });
// }

// //trying to use the text analyzer called text razor
// // fetch("https://api.textrazor.com", {
// //     headers: {
// //         'Content-Type': 'application/x-www-form-urlencoded',
// //         'X-TextRazor-Key': '8ffe70cfbf8843f31eec5fd8a4bd2ccd84841cc0540626da93f36ac3'
// //     },
// //     method: 'POST',
// //     mode: 'no-cors',
// //     url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
// //     extractor: 'senses'
// // })

// // .then (function(resp){
// //     return resp.json();
// // })
// // .then (function(data){
// //     console.log(data);
// // })


// let inputArray = [];
// let bibleArray = [];
// let abrahamArray = [];
// let mosesArray = [];
// let abrahamCount;
// let mosesCount;


// document.addEventListener("DOMContentLoaded", function(){

//     document.querySelector("#start").addEventListener("click", generateWords);
//     document.querySelector("#restart").addEventListener("click", refreshPage);



//     // document.querySelector('input').addEventListener("keyup", function(){
//     //     let val = this.value;
//     //     let output = RiTa.rhymes(val);
//     //     document.querySelector("#output").innerHTML = output;
//     // })

// })




// function refreshPage(){
//     document.location.reload(true);
// }



// function generateWords(abrahamCount, mosesCount){
//     let input = document.querySelector('input').value;
//     let tokens = RiTa.tokenize(input);

//     let abrahamText = RiTa.tokenize(abraham);
//     let mosesText = RiTa.tokenize(moses);
    
//     for (i = 0; i < tokens.length; i++){
//         let inputPos = RiTa.pos(tokens[i]);
//         inputArray.push(inputPos);

//         }
        

//         for (b = 0; b < abrahamText.length; b++){
//             let abrahamPosF = RiTa.pos(abrahamText[b]);
//             abrahamArray.push(abrahamPosF);
//         }

//         for (i = 0; i < mosesText.length; i++){
//             let mosesPos = RiTa.pos(mosesText[i]);
//             mosesArray.push(mosesPos);
//         }

//         console.log("this is matching function result " + matching(inputArray, abrahamArray));

//         abrahamCount = matching(inputArray, abrahamArray);
//         mosesCount = matching(inputArray, mosesArray);

//         compare(abrahamCount, mosesCount);
//         document.querySelector("#counterNum").innerHTML = mosesCount;

// }
    

//     function matching(inputArray, bibleArray, counter){   
//         counter = 0;
//         if(inputArray.length < bibleArray.length){
//             for( i = 0; i<inputArray.length; i++){
//             for( b = 0; b<bibleArray.length; b++){
//                 if (inputArray[i][0] == bibleArray[b][0]){
//                     counter++
//                     // console.log(counter);
//                 };
//             }
//             }
//         }else{
//             console.log("user input is longer");
//             for( i = 0; i<bibleArray.length; i++){
//                 for( b = 0; b<inputArray.length; b++){
//                     if (inputArray[b][0] == bibleArray[i][0]){
//                         counter--

//                     };
//                 }
//                 }

//         }
//         console.log(bibleArray);
//         return counter;
//     }

//     function compare(abrahamCount, mosesCount){

//         if (abrahamCount > mosesCount){
//             abrahamCharacter();
//             console.log("abraham won!!");
//         } else{
//             mosesCharacter();
//             console.log("moses won!");
//         }
//         console.log("moses count:" + mosesCount);
//         console.log("abraham count:" + abrahamCount);

//     }

//     // function refresh (){
//     //     abrahamCount = 0;
//     //     mosesCount = 0;
//     //     document.querySelector("#counterNum").innerHTML = mosesCount;
//     //     // generateWords(counterReset, counterReset);


//     // }

//     //resetting//

//     // function refresh (){
//     //     let input = document.querySelector('input').value;
//     //     let tokens = RiTa.tokenize(input);
//     //     let abrahamText = RiTa.tokenize(abraham);
//     //     let mosesText = RiTa.tokenize(moses);
    
//     //     for (i = 0; i < tokens.length; i++){

//     //         let inputPos = RiTa.pos(tokens[i]);
//     //         inputArray.push(inputPos);
//     //         }

//     //         for (b = 0; b < abrahamText.length; b++){
        
//     //             let abrahamPosF = RiTa.pos(abrahamText[b]);
        
//     //             abrahamArray.push(abrahamPosF);
        
//     //         }
            

//     //         for (i = 0; i < mosesText.length; i++){
//     //                 let mosesPos = RiTa.pos(mosesText[i]);
//     //                 mosesArray.push(mosesPos);
//     //         }



//     //         // let abrahamCount = clearing(inputArray, abrahamArray);
//     //         // let mosesCount = clearing(inputArray, mosesArray);

//     //         let abrahamCount = 0;
//     //         let mosesCount = 0;


//     //         // console.log("this is clearing function result" + clearing(inputArray, abrahamArray));


//     //         compare(abrahamCount, mosesCount);
//     //         document.querySelector("#counterNum").innerHTML = mosesCount;
//     // }
    
    
//     // function clearing(inputArray, bibleArray){   
//     //     let counter =0;  
//     //         // for( i = 0; i<inputArray.length; i++){
//     //         // for( b = 0; b<bibleArray.length; b++){
//     //         //     if (inputArray[i] == bibleArray[b]){
//     //         //         counter = 0;
//     //         //         console.log("this is the counter " + counter);
//     //         //     };
//     //         // }
//     //         // }
//     // }





// //canvas

// // function canvasColor(){
// //     var c = document.getElementById("canvas");
// //     var ctx = c.getContext("2d");

// //     c.setup();
// //     c.draw();

// //     // Create gradient
// //     var grd = ctx.createRadialGradient(75,50,5,90,60,100);
// //     grd.addColorStop(0,"red");
// //     grd.addColorStop(1,"white");

// //     // Fill with gradient
// //     ctx.fillStyle = grd;
// //     ctx.fillRect(10,10,150,80);
// // }





// //decision maker
// var t;

// function setup() {
  
//   let canvas1=createCanvas(550,400);
//   canvas1.parent('godCanvas');
//   canvas1.style('border-radius', '18px');
//   background(0);
//   t = 0;
//   time = 20;
//   abrahamCount = 50;
//   mosesCount = 3;
// }

// function draw() {
//     background(0,-1);

//     var x = width * noise(t);
//     var y = height * noise(t+3);
//     var r = 360 * noise(t+50);
//     var g = 360 * noise(t+15);
//     var b = 360 * noise(t+20);

//     noStroke();
    
//     abrahamCount = matching(inputArray, abrahamArray);
//     mosesCount = matching(inputArray, mosesArray);

//     fill(r, g, b);
//     ellipse(x, y, mosesCount/8, abrahamCount/6);
//     t = t + 0.01;
// }



//Google Image Search
let img;
let url = "https://www.googleapis.com/customsearch/v1?";
let apikey = "AIzaSyCZQ1QeIL94Jg1xj25v5CKVCmlSnyLzN1U"; //register API key here: https://developers.google.com/custom-search/json-api/v1/overview
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

let newImg;
let pos;


//livep5
let myVideo;
let myCamera;
let friends = {};
let liveMediaConnection;
let parsedData;



var s1 = function( sketch ) {
    sketch.setup = function() {
        let canvasWidth = document.getElementById("right-canvas").offsetWidth;
        let canvasHeight = document.getElementById("right-canvas").offsetHeight;
  
      let canvas1 = sketch.createCanvas(canvasWidth, canvasHeight, sketch.WEBGL);
      canvas1.parent('right-canvas');

      myCamera = sketch.createCamera();
    //   textFont(kannada);
      //search button
        search = sketch.createButton("GO");
        search.style("font-family", "kannada");
        search.mousePressed(sketch.fetchImageSend());
        search.size(100,100);
        search.position(10,10);
      
        incomingWord = sketch.createInput();
        incomingWord.style("font-family", "kannada");
        incomingWord.size(100,100);
        incomingWord.position(300,100);
    
      
      //livep5 #01
      liveMediaConnection = new p5LiveMedia(this, null, null, "my-oom");
      liveMediaConnection.on("stream", sketch.gotStream());
      liveMediaConnection.on("data", sketch.gotData());
      myVideo = sketch.createCapture("VIDEO", sketch.gotLocalMediaStream());
      myVideo.muted = true;
      myVideo.hide();
      
      sketch.debugMode(GRID);


    }
    sketch.draw = function() {
      //for canvas 1
      sketch.orbitControl(1,1,0.01);
      sketch.noStroke();

      for (let id in friends) {
        let p = friends[id];
        p.show();
      }

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


    sketch.fetchImageSend = function() {
        query = incomingWord.value();
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
        
        pos = random(-width/2, width/2);
    }

      
    sketch.fetchReceive = function(keywordsArray) {
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
      }
      
      sketch.googleImg = function(imgData) {
        getImg = imgData.items[0].image.thumbnailLink;
        // img = createImg(getImg, "image", "", draw);
        // console.log(getImg);
        loadImage(getImg, 
                  incomingImg => {img = incomingImg; 
                                  
                                 img.resize(100,100);
                                  
                                  console.log("new image added");
                          
                                 });
      }
      
      
      
      //livep5 #03
      
      sketch.gotData = function(data, id) {
        // console.log("got incoming data from peer with ID", id);
        parsedData = JSON.parse(data);
        
        if(friends[id]){
        friends[id].update(parsedData.x,parsedData.y,parsedData.z);
          }
        
        if(parsedData.keywords){
        fetchReceive(parsedData.keywords);
        keywords.push(parsedData.keywords);
        }
        console.log("once received, the keywords array" + keywords);
      }
      
      // this function is called when our webcamera stream is ready
      sketch.gotLocalMediaStream = function(stream) {
        console.log("got local stream!");
        liveMediaConnection.addStream(stream, "CAPTURE");
      }
      
      // this function is called when a remote stream is ready
      sketch.gotStream = function(stream, id) {
        console.log("got remote stream!");
        
        friends[id] = new Friend(stream, id);
      
        // hide the HTML <video> element
        stream.hide();
      }
      
      
      sketch.convertImg = function() {
        // if (img) {
            // console.log("drawing");
        
            push();
            translate(pos,pos);
            // rotateY(radians(frameCount));
            let tiles = 50;
            let tileSize = img.width / tiles;
      
            
            for (let x = 0; x < tiles; x++) {
              for (let y = 0; y < tiles; y++) {
                let c = img.get(x * tileSize, y * tileSize);
                let b = map(brightness(c), 0, 255, 1, 0);
                let z = map(b, 0, 1, -150, 150);
      
                push();
                // translate(x*tileSize - width/2, y*tileSize - height/2, z);
                // fill(c);
                // ambientMaterial(c);
                // sphere(tileSize*b*0.5);
                stroke(c); // Change the color
                strokeWeight(1);
                point(x * tileSize, y * tileSize, z);
                pop();
              }
            }
            pop();
          // }
        
      }
      
      sketch.sharePosition = function() {
        if (liveMediaConnection){
          let dataToSend = {
            x: myCamera.eyeX,
            y: myCamera.eyeY,
            z: myCamera.eyeZ,
          }
          liveMediaConnection.send(JSON.stringify(dataToSend));
        }
      }

  };
  
  // create a new instance of p5 and pass in the function for sketch 1
  new p5(s1);
  
  var s2 = function( sketch ) {
  
     sketch.setup = function() {
        let googleWidth = document.getElementById("google-img").offsetWidth;
        let googleHeight = document.getElementById("google-img").offsetHeight;
      let canvas2 = sketch.createCanvas(googleWidth, googleHeight, sketch.WEBGL);
      canvas2.parent('google-img');
    }
    sketch.draw = function() {
      //for canvas 2
      sketch.background(100,-10);
      
      sketch.rotateX(sketch.frameCount * 0.01);
      sketch.rotateZ(sketch.frameCount * 0.02);
      sketch.cone(30, 50);
    }
  };
  
  // create the second instance of p5 and pass in the function for sketch 2
  new p5(s2);



  
  
  