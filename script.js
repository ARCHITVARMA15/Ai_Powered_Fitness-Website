let select = document.querySelector(".select-heading");
let options = document.querySelector(".options");
let arrow = document.querySelector(".select-heading img");
let option = document.querySelectorAll(".option");
let selecttext = document.querySelector(".select-heading span");


select.addEventListener("click",()=>{
    options.classList.toggle("active-options");
    arrow.classList.toggle("rotate")
})

option.forEach((item)=>{
    item.addEventListener("click",()=>{
        selecttext.innerText = item.innerText
    })
})

//chat bot 
let prompt = document.querySelector(".prompt")
let chatbtn = document.querySelector(".input-area button")
let chatContainer = document.querySelector(".chat-container")
let h1 = document.querySelector(".h1");
let chatimg = document.querySelector("#chatbotimg")
let chatbox = document.querySelector(".chat-box")
let userMessage="";

chatimg.addEventListener("click",()=>{
    chatbox.classList.toggle("active-chat-box")
    if(chatbox.classList.contains("active-chat-box")){
        chatimg.src="cross.svg"
    }else{
        chatimg.src="chat.svg"
    }
})
