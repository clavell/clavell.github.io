var arTitles = ["game", "review", "about","random"];
var navLinks = ["embedded_game.html",
                "review.html",
                "index.html#about",
                "https://en.wikipedia.org/wiki/Special:RandomInCategory/Steampunk_video_games"]; 

var imagePaths = ["/images/tiger-pixabay.jpg",
                "/images/hot-air-balloon-pixabay.png",
                "https://d2fzf9bbqh0om5.cloudfront.net/images/5019/blog_main/the_8_best_steampunk_games_you_should_be_playing.jpg?1548054878",
            ];

var thumbTitles = ["Steampunk Adventure",
                    "hot air balloon warz",
                    "Fantasy time space man",
                    "clock watcher 64",                    
                    "program the AE (it's hard)",
                    "chess",
                  ];

var thumbImages = ["images/steampunk_adventure.jpg",
                  "images/hot-air-balloon-pixabay.png",
                  "images/fantasy_time_space_man.jpg",
                  "images/clock_watcher_64.png",
                  "images/AnalyticalEngineWiki.jpg",
                  "images/chess.jpg"];

var thumbLinks = ["https://gameades.itch.io/steampunk-adventure",
                  "","","","",""];

/************************************************************************************************* */
//a function to set a ranom picture for the slideshow
function setMain(){
  var slides = document.getElementById("slides");
  var mainImage = document.createElement("img");
  var whichImage = Math.floor(Math.random()*6)
  mainImage.src= thumbImages[whichImage];
  slides.appendChild(mainImage);
  mainImage.className = "mainImage";
}
//end setMain function


/********************************************************************************************************** */

//a function written to open the menu used in conjunction with menuClose() when hovering over the menu
//these did not perform as intended so subbing out in favour of clickMenuOpen() and clickMenuClose()
//keeping in I figure out a fix
var open = false;
function menuOpen(){
  document.getElementById("nav").style.width = "100px";
  document.getElementById("spinner").src = "fidget-spinner/reverse-transparent-bg-fidget-spinner.gif";    
  setTimeout('document.getElementById("nav").style.width = "250px"', 200);    
}
//end menuOpen function

/****************************************************************************************************** */

//a function written to close the menu after opened with menuOpen() function when mouse leaves area
//see menuOpen comments for more info
function menuClose() {    
  document.getElementById("nav").style.width = "200px";
  document.getElementById("spinner").src = "fidget-spinner/transparent-bg-fidget-spinner.gif";
  setTimeout('document.getElementById("nav").style.width = "50px"', 200);
    
  }

/********************************************************************************************************** */

//function to open menu sidebar when menu icon clicked see menuOpen() function for reason why this function
//was written
function clickMenuOpen(){
  var nav = document.getElementById("nav");
  nav.style.width = "100px";
  document.getElementById("spinner").src = "fidget-spinner/reverse-transparent-bg-fidget-spinner.gif";     
  setTimeout('nav.style.width = "250px"', 200);
  setTimeout('nav.onclick = clickMenuClose', 700);  
  open = true;  
}

/******************************************************************************************************* */
//accompanying function to clickMenuOpen()
function clickMenuClose() {   
  var nav = document.getElementById("nav"); 
  nav.style.width = "200px";
  document.getElementById("spinner").src = "fidget-spinner/transparent-bg-fidget-spinner.gif";
  setTimeout('nav.style.width = "50px"', 200);    
  open=false;
}
//end clickMenuClose function

/********************************************************************************************** */
//function to decide whether to open or close menu on click
function clickSpinner(){
  if(open){
    clickMenuClose();
  }
  else{
    clickMenuOpen();
  }
}
//end clickSpinner function

/************************************************************************************* */

//a function to create the thumbnails in the sidebar (lins with pictures)
function addThumbnails(images,links,text){
    for(var x=0; x<images.length;x++){
        var nail = document.createElement('div');
        var image = document.createElement('img');
        var link = document.createElement('a');
        var title = document.createElement('div');
        title.innerHTML = text[x];
        link.href = links[x];
        image.src = images[x];
        title.className="thumbTitles";
        image.className="thumbPhotos";
        link.className="thumbLinks";
        nail.className="thumbnail";
        link.appendChild(image);
        nail.appendChild(link);
        link.appendChild(title);   
        document.getElementById("thumbnails").appendChild(nail);
        
        //here we want to make all of the fake links disappear when moused over hahahaha!!
        if(x!=0){
          nail.onmouseenter =function(){this.style.opacity = 0;
                                        this.style.transition = "0.5s"};
          nail.className=nail.className + " disappear";
        }
    }
}//end addThumbnails function
addThumbnails(thumbImages,thumbLinks,thumbTitles);

/*********************************************************************************************** */

//a function that populates a container with links without pictures
function createElement(content, containerID, links,color,overColor){
    // console.log(content.length);
    var nav = document.getElementById(containerID);
    //var navBarItems = [];
    for(let x=0;x<content.length;x++){
        let elem = document.createElement("div");
        let link = document.createElement("a");
        let text = document.createElement("span");
        text.innerHTML = content[x];
        link.href = links[x];
        link.style.textDecoration = "none";
        link.style.color = color;
        //link.onmouseover = "this.style.color = " + overColor;
        link.appendChild(text);
        elem.appendChild(link);        
        nav.appendChild(elem);
        
    }    
}//end createElement function
createElement(arTitles,"navContent",navLinks,"#222222","#a1a1a1");   
createElement(arTitles,"header",navLinks,"#f1f1f1","#a1a1a1");

/******************************************************************************************* */
setMain();

function testArticle(form){
  var items = document.getElementById("main").children
  items[0].innerHTML = form.elements.title.value;
  items[1].innerHTML = "written by " + form.elements.author.value;
  //split up the review to keep the format of the article more or less the same.
  var str = form.elements.review.value;
  var firstHalf = str.slice(0,Math.floor(str.length/2))
  var secondHalf = str.slice(Math.ceil(str.length/2));
  items[2].innerHTML = firstHalf;
  items[4].innerHTML = secondHalf;
  items[3].outerHTML = form.elements.video.value;
}


