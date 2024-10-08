# CoVision
![image is not loaded, please try again](./assets/co-vision-night.png)
This is an online virtual meeting tool that helps members in a creative group project to come to a same vision in a discussion. The communications are solely depend on a text to point cloud visualization for users to co-build a vision together. 


**Click here for...**

>
[💻 Website](https://junebee66.github.io/co-vision/)<br/> 
[🌈 Pitchdeck](https://www.behance.net/gallery/204391925/CoVision-Collaborate-with-Fusing-Vision)<br/>
[✍🏻 Documentation Page](https://quixotic-mandible-495.notion.site/Final-Collaborative-Space-fedbe986f725457aa2a89fec423bd3ac)<br/>

## **🫱 How to Use?**
![image is not loaded, please try again](./assets/mockup/white-bg-working.jpg)
![image is not loaded, please try again](./assets/instructions.jpg)
<!-- ![video is not loaded, please try again](assets/point-cloud-feature.png) -->
### **🛑 DISCLAIMER 🛑**
This project is still in progress stage. Most functions work, but it might take up to 30 second to 1 minute to load in the beginning to laod libraries. Thank you for your patience!

### **⭐️ Website Functionality**
>In “Covision”, users are able to hear each other and discuss just like regular in-person conversations. However, the fact of being online and using this platform create a filter that provides a distance between two users, preventing aggressive conversations that might lead into fights. User will type their ideas down and let “CoVision” to generate 3D point cloud models in their shared virtual space. By moving around in the space, the user are able to spawn objects at their desired locations. In the end, you will see a point cloud collage created by both users that is monitored by google’s algorithm as the best images on the internet.

**1️⃣ Your Thoughts Text Box**
> Please type the thoughts that you want to share with your teammates in the text box located in the midedle of the left panel.
>![image is not loaded, please try again](./assets/part-1.gif)

**2️⃣ Google Image Search**
> After the user type the thoughts that he/she/they want to share with their teammates, click on the arrow key to submit. CoVision will do a google search for the input and display the best image result here.

**3️⃣ 3D Virutal Space & PointCloud Generations**
> The big box on the right side of the screen is a first person view camera that allows users to navigate in the 3D virtual scene they co-created together. Users are able to seeeach other as boxes. All the thoughts inputted into the left panel will be generated as point clouds and spawn in this place at where the user is currently standing. 
> ![image is not loaded, please try again](./assets/part-2.gif)

**4️⃣ Top Down Map**
> This map is hosted by a top down camera in the 3D scene, helping the user to better understand the user and their teammate’s location in the context of this specific virtual space. Furthermore, it visualizes the relationships between the pointclouds you created and your teammates created.

![image is not loaded, please try again](./assets/mockup/people-using.jpg)



## **✍🏻Process & Documentation**
![image is not loaded, please try again](./assets/sketch.png)

**1. Image Rasterize**</br>
I followed the tutorial by Tim Rodenbröker with [resterizing an image](https://timrodenbroeker.de/how-to-rasterize-an-image-with-processing/) with processing and transalte the code into javascript languse in p5.

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

**2. [Google Image API & Point Cloud Array](https://serpapi.com/images-results)**</br>

Everytime user hit on the arrow button, google api will search and fetch an image according to use input. Then the user input "query" will be pushed into an array and shared across P5liveMidea Library, so the other user will be able to loop the array and see the same images

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




    document.addEventListener("DOMContentLoaded", function(){

        document.querySelector("#go").addEventListener("click", fetchImageSend);
    })


    function setup() {
        for (let id in friends) {
            let p = friends[id];
            p.show();
        }
        
        
        for (let getImg in keywords) {
            let g = keywords[query];
            g.show();
        }

    
    }


    function fetchImageSend() {
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


    function gotData(data, id) {
    parsedData = JSON.parse(data);
    
        if(parsedData.keywords){
        fetchReceive(parsedData.keywords);
        keywords.push(parsedData.keywords);
        }

    }





**3. P5 Live Media**</br>

    funtion setup(){
        liveMediaConnection = new p5LiveMedia(this, null, null, "my-covision");
        liveMediaConnection.on("stream", gotStream);
        liveMediaConnection.on("data", gotData);
        myVideo = createCapture(VIDEO, gotLocalMediaStream);
        myVideo.muted = true;
        myVideo.hide();
        
        debugMode(GRID);
        
        }
    }



**4. Shader Background**</br>
For the coloring shader this it the p5 code:

        function draw() {
  
        shader(myShader);
        myShader.setUniform("uFrameCount", frameCount);


        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.005);
        
        we have some more geometry to work with
        sphere(800, 500, 500);
        }

the shader frag code:
    
    precision mediump float;

    varying vec2 vTexCoord;

    // Get the normal from the vertex shader
    varying vec3 vNormal;

    void main() {
    
    // Normalize the normal
    vec3 color = vNormal * 0.5 + 0.5;
    
    // Lets just draw the texcoords to the screen
    gl_FragColor = vec4(color ,1.0);
    }

the shader vertices code:

    uniform float uFrameCount;

    varying vec2 vTexCoord;
    varying vec3 vNormal;

    void main() {

    // copy the position data into a vec4, using 1.0 as the w component
    vec4 positionVec4 = vec4(aPosition, 1.0);

    // Frequency and Amplitude will determine the look of the displacement
    float frequency = 80.0;//20.0
    float amplitude = 0.4;//0.1

    // Displace the x position withe the sine of the x + time. Multiply by the normal to move it in the correct direction
    // You could add more distortions to the other axes too. 
    float distortion = sin(positionVec4.x * frequency + uFrameCount * 0.2);//0.1
    positionVec4.x += distortion * aNormal.x * amplitude;

    // Send the normal to the fragment shader
    vNormal = aNormal;


    // Move our vertex positions into screen space
    // The order of multiplication is always projection * view * model * position
    // In this case model and view have been combined so we just do projection * modelView * position
    gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;

    // Send the texture coordinates to the fragment shader
    vTexCoord = aTexCoord;
    }


## **☁️ Future Development Envision**
- point cloud spawning at different places
- the top down map
![image is not loaded, please try again](./assets/mockup/white-bg.jpg)

## **References**
[Webcam Sharing (P5 LiveMedia)](https://github.com/vanevery/p5LiveMedia) by p5.js</br>
[Google Image API](https://serpapi.com/images-results) by ml5</br>
[WebGL](https://p5js.org/reference/#/p5/WEBGL) by Serp Api</br>
[Image Resterize](https://timrodenbroeker.de/how-to-rasterize-an-image-with-processing/) by Tim Rodenbröker</br>


