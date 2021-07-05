document.addEventListener('click', function(e){
    if(e.target.tagName=="BUTTON"){
     alert('BUTTON CLICKED');
    }
  })

  // Get an array of buttons from the page
var buttons = document.querySelectorAll(".btns");

// Loop through the resulting array
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function() {
    console.log("Hello World");
  });
}