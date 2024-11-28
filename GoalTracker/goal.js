let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let goalList = document.createElement("li");
    goalList.innerText=inp.value;
    ul.appendChild(goalList);
    inp.value="";
    
    let delBtn = document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    goalList.appendChild(delBtn);

    
    



})
ul.addEventListener("click", function(event){
    if(event.target.nodeName==="BUTTON"){
        let lis = event.target.parentElement;
        lis.remove();
    }

})


//short-term

let inp2 = document.querySelector(".short-term-input");
let btn2 = document.querySelector(".short-term-button");
let ul2 = document.querySelector(".short-term-list");

btn2.addEventListener("click", function(){
    let goalList2 = document.createElement("li");
    goalList2.innerText=inp2.value;
    ul2.appendChild(goalList2);
    inp2.value="";
    
    let delBtn2 = document.createElement("button");
    delBtn2.innerText="Delete";
    delBtn2.classList.add("delete");
    goalList2.appendChild(delBtn2);
})

ul2.addEventListener("click", function(event2){
    if(event2.target.nodeName==="BUTTON"){
        let lis2 = event2.target.parentElement;
        lis2.remove();
    }

})