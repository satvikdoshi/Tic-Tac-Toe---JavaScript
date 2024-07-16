const singlePlayer=document.querySelector("#singlePlayerPage1");
const multiPlayer=document.querySelector("#multiPlayerPage1");
const help=document.querySelector("#helpPage1");
const quit=document.querySelector("#quitPage1");

const optionArray=[singlePlayer,multiPlayer,help,quit];
optionArray.forEach(option=>{
    option.addEventListener("click",(obj)=>{
        // console.log(obj.target.id);
       if(obj.target.id=="multiPlayerPage1")
       window.open("index.html","_self")
       else if(obj.target.id=="quitPage1")
       window.open("about:blank","_self");
       else if(obj.target.id=="singlePlayerPage1")
       window.open("");
       else if(obj.target.id=="helpPage1")
       window.open("help.html","_self");
    })
})
