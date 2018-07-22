function headerfun(){
var header = document.getElementById("demo");
var btns = header.getElementsByClassName("dashboard");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}
function fundrop() {
  document.getElementById("Dropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
function fundrop() {
  document.getElementById("Dropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
function fundrop1() {
  document.getElementById("Dropdown2").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn1')) {

  var dropdowns = document.getElementsByClassName("dropdown-content1");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show1')) {
      openDropdown.classList.remove('show1');
    }
  }
}
}
function innerbox12(){
  const box=new XMLHttpRequest();
  
  box.onload=function(){
    if(this.status===200){
    const data=JSON.parse(this.responseText);
    let output=` `;
    const var1 =`<div class="innerbox">\
      <div class="image">\
        <img src="{imagepath}">\
      </div>\
      <div class="branch">{heading}</div>\
      <div class="text2">{paragraph}</div>\
</div>`;
    for( var i=0;i<data.length;i++){
      output+=var1.replace('{imagepath}',data[i].imagepath).replace('{heading}',data[i].heading).replace('{paragraph}',data[i].paragraph);
    }
    document.getElementById("replacecode").innerHTML = output;
  }}
  box.open('GET','../json/sample.json',true);
  box.send();
}

  
