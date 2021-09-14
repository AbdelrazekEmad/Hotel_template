let list_iteams = document.querySelectorAll(".switcher li ");
let proprty = document.querySelectorAll(".gallary .proprty");

list_iteams.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangeProprty);
});

function removeActive() {
  list_iteams.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function mangeProprty() {
  proprty.forEach((prop) => {
    prop.style.display = "none";
  });

  document.querySelectorAll(this.dataset.btn).forEach((e) => {
    e.style.display = "block";

  });
  
console.log(document.querySelectorAll(this.dataset.btn))
}

 
// var i = 0;
// var images = [];
// var time = 3000;

// images[0] = "house-1.jpg";
// images[1] = "slider-2.jpg";
// images[2] = "slider-3.jpg";

// function changeimg() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeimg()", time);
// }

// window.onload = changeimg;
