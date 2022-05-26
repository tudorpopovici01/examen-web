

let list = document.getElementById('colorList');
list.onclick = function (){
    const listItems = document.querySelectorAll("ul.disciplines li");
    // console.log(listItems);
    listItems.forEach(el => {
        el.style.background = "green";        
    });
}

document.querySelectorAll("ul.disciplines li").forEach(function(el){
    el.addEventListener("click", function(){
        el.style.background = "green";
    })
})

setTimeout(function(){
    const oldValue = +document.getElementById("counter").value;
    const newValue = oldValue + 2;
console.log('oldValue=', oldValue);
console.log('newValue =', newValue);
    document.getElementById("counter").value = newValue;
}, 2000)

setInterval(function(){
    const oldValue = +document.getElementById("counterContinuu").value;    
    if (oldValue < 20) {
        const newValue = oldValue + 1;
        document.getElementById("counterContinuu").value = newValue;
    }
}, 2000)