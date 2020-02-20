
window.onload = function () {
  document.querySelector(".tab_header").addEventListener('click', fTabs);
  function fTabs(event) {
    console.log(event)
    if (event.target.className == 'tab')
      var dataTab = event.target.getAttribute('data-tab');
    var tab = document.getElementsByClassName('tab');

    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove('active')
    }
    event.target.classList.add('active');
    var tabBody = document.getElementsByClassName('content-tab')
    for (let i = 0; i < tabBody.length; i++) {
      if (dataTab == i) {
        tabBody[i].style.display = 'block'
      } else {
        tabBody[i].style.display = 'none'
      }

    }
  }
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("popover_button");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function clock() {
  var x = new Date(2020, 9, 1, 00, 00, 00)
  var d = new Date();
  var day = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();

  if (day <= 9) day = "0" + day;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;

  date_time = `${day} day ${hours} hours ${minutes}min`;
  if(d!==x){
    document.getElementById("doc_time").innerHTML = date_time;
    setTimeout("clock()", 1000);
  }

}
clock()
