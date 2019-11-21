var imagePaths = ["/images/tiger-pixabay.jpg",
                "/images/hot-air-balloon-pixabay.png",
                "https://d2fzf9bbqh0om5.cloudfront.net/images/5019/blog_main/the_8_best_steampunk_games_you_should_be_playing.jpg?1548054878",
            ]

//a function written to open the menu used in conjunction with menuClose() when hovering over the menu
//these did not perform as intended so subbing out in favour of clickMenuOpen() and clickMenuClose()
//keeping in I figure out a fix
function menuOpen(){
  document.getElementById("nav").style.width = "100px";
  document.getElementById("spinner").src = "fidget-spinner/reverse-transparent-bg-fidget-spinner.gif";    
  setTimeout('document.getElementById("nav").style.width = "250px"', 200);    
}
//end menuOpen function

//a function written to close the menu after opened with menuOpen() function when mouse leaves area
//see menuOpen comments for more info
function menuClose() {    
  document.getElementById("nav").style.width = "200px";
  document.getElementById("spinner").src = "fidget-spinner/transparent-bg-fidget-spinner.gif";
  setTimeout('document.getElementById("nav").style.width = "50px"', 200);
    
  }

//function to open menu sidebar when menu icon clicked see menuOpen() function for reason why this function
//was written
function clickMenuOpen(){
  var nav = document.getElementById("nav");
  nav.setAttribute("onclick","clickMenuClose;");
  nav.style.width = "100px";
  document.getElementById("spinner").src = "fidget-spinner/reverse-transparent-bg-fidget-spinner.gif";     
  setTimeout('nav.style.width = "250px"', 200);
  setTimeout('nav.onclick = clickMenuClose', 700);    
}

function clickMenuClose() {   
  var nav = document.getElementById("nav"); 
  nav.onclick = "clickMenuOpen();"
  nav.style.width = "200px";
  document.getElementById("spinner").src = "fidget-spinner/transparent-bg-fidget-spinner.gif";
  setTimeout('nav.style.width = "50px"', 200);    
  }

//a function to create the thumbnails in the sidebar (lins with pictures)
function addThumbnails(elements,images,links,text){
    for(var x=0; x<elements.length;x++){
        var nail = document.createElement('div');
        var image = document.createElement('img');
        var link = document.createElement('a');
        var text = document.createElement('span');
        text.innerHTML = text[x];
        link.href = links[x];
        image.src = images[x];
        image.className="thumbPhotos";
        link.appendChild(image)
        nail.appendChild(link);
        nail.appendChild(text);   
        document.getElementById('thumbnails').appendChild(nail);
    }
}//end addThumbnails function


//a function that populates a container with links without pictures
function createElement(content, containerID, links,color,overColor){
    console.log(content.length);
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


//functions below from W3 schools for moving through slides
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
