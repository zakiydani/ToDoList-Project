function Add() {
    let li = document.createElement("li");
    let list = document.getElementById("input").value;
    let isi = document.createTextNode(list);
    li.appendChild(isi);
    document.getElementById("ul").appendChild(li);
}