//  var bulb = document.querySelector("#bulb")
//  var btn = document.querySelector("button")
//  var flag = 0


//  btn.addEventListener("click", function(){
//     if(flag == 0){
//     bulb.style.backgroundColor = "yellow"
//     console.log("clicked")
//     flag = 1
//      } else{
//         bulb.style.backgroundColor = "pink"
//         console.log("again")
//         flag = 0
//     }
//  })
// var heading=document.querySelector("#heading");

// function increase(){
//     heading.innerHTML++;
// }
// function decrease(){
//     if(heading.innerHTML>0){
//         heading.innerHTML--;
//     }
//     else{
//         heading.innerHTML;
//     }
    

// }

// counter app ha ye

var scriptbhai = document.querySelector("#scriptbhai")
var addval = doucment.querySelector("#plus")
var minusval = doucment.querySelector("#minus")

var flag = 0;


function addval(){
    
    console.log("mjhe add krde bhai")
    flag++;
    scriptbhai.innerHTML = flag
}

function minusval(){
    console.log("kam kyu krta ho mjhe sahab")
    flag = flag - 1;
    scriptbhai.innerHTML =flag

}
function resetval(){
    console.log("wapis ajao bhai")
    flag = 0;
    scriptbhai.innerHTML =flag
}
// yaha pe khatam ha ye app jani 