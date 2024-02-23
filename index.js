let button = document.querySelectorAll(".drum")
button.forEach((but)=>{
    but.addEventListener("click",()=>{
      let inner = but.innerHTML
      console.log(inner)
      playgame(inner)
      animation(inner)
      
    })
})

document.addEventListener("keypress",(evt)=>{
  let i = console.log(evt.key)
  playgame(evt.key);
  animation(evt.key)
})





let playgame = (inner) => {
  if(inner=="w")
  {  
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play()
  }
  else if(inner=="a")
  {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play()
  }
  else if(inner=="s")
  {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play()
  }
  else if(inner=="d")
  {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play()
  }
  else if(inner=="j")
  {
    var audio = new Audio("sounds/snare.mp3");
    audio.play()
  }
  else if(inner=="k")
  {
    var audio = new Audio("sounds/crash.mp3");
    audio.play()
  }
  else if(inner=="l")
  {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play()
  }
}
let animation = (evt)=>{
  let a= document.querySelector("." + evt)
  a.classList.add("pressed");

  setTimeout(()=>{
    a.classList.remove("pressed");
  },100)

}