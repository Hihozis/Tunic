let slideIndex = 1;
let scroll = 1;

let slide = data =>{
  slideIndex += data;
  setTimeout(showSlide, 0000, slideIndex);
};

let showSlide = data =>{
  const widthcontainer = 80;
  const count = 2;
  const sliderImgWidth= (widthcontainer-(count*5))/count;

  const slides = document.getElementsByClassName("wrapImg");
  const countImagesInList = slides.length;

  let countItemInList;
  if(count==0) countItemInList=countImagesInList;
  else countItemInList = Math.ceil(countImagesInList/count);

  document.getElementById("slider").style.width = widthcontainer+"vw";

  for(let i = 1; i<=countImagesInList; i++){
    document.getElementById("slide"+i).style.width = sliderImgWidth+"vw";
  }

  if(data>countItemInList) slideIndex = 1;
  else if(data<1) slideIndex = countItemInList;

  if(slideIndex == 1) scroll = 0;
  else scroll = -(slideIndex-1)*widthcontainer;

  document.getElementById('list').style.transform = "translateX("+scroll+"vw)";
};

showSlide(slideIndex);
