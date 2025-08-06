$(function(){
    const createAndAppend = (tag, parent, attributes = {}, content ="")=>{
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
    }
    let limit
// This if statement determines how many seeds can fit in the screen width
    if($("#content").width() < 300){
        limit = 30
    }else if($("#content").width() < 700){
        limit = 40
    }else{
        limit = 60
    }
    //The arrays hold previous seed positions to prevent overlap
    const xArray = []
    const yArray = []
    //This program adds seeds to the background and ensures there are no duplicates
    for(let j = 0; j < limit; j++){
        let y = Math.floor(Math.random() * ($("#content-box").height()) + 54)
        let x = Math.floor((Math.random() * $("#content-box").width()) + 2)
        while(xArray.indexOf(x) > -1 || x > 375){
            x = Math.floor((Math.random() * $("#content-box").width()) + 2)
        }
        xArray.push(x, x-1, x+1, x-2, x+2)
        
        while(yArray.indexOf(y) > -1 || y > 200){
            y = Math.floor(Math.random() * ($("#content-box").height()) +54)
        }
        xArray.push(y, y-1, y+1, y-2, y+2)
        
        createAndAppend("i", document.body, {class: `fa-solid fa-droplet absolute top-${y} left-${x} z-1 `})
    }
})