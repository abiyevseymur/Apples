function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("apple", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("apple");
    if(ev.target.nodeName!== 'SPAN'){
        ev.target.appendChild(document.getElementById(data));   
    }
}
