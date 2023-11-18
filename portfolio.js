document.getElementById("ProjectsTab").hidden = true;
document.getElementById("ContactTab").hidden = true;

document.getElementsByClassName('nav-link')[0]
  .addEventListener('click', function(event) {
    document.getElementsByClassName('nav-link')[0].classList.add("active");
    document.getElementsByClassName('nav-link')[1].classList.remove("active");
    document.getElementsByClassName('nav-link')[2].classList.remove("active");
    document.getElementById("HomeTab").hidden = false;
    document.getElementById("ProjectsTab").hidden = true;
    document.getElementById("ContactTab").hidden = true;
  });


  document.getElementsByClassName('nav-link')[1]
  .addEventListener('click', function(event) {
    document.getElementsByClassName('nav-link')[1].classList.add("active");
    document.getElementsByClassName('nav-link')[0].classList.remove("active");
    document.getElementsByClassName('nav-link')[2].classList.remove("active");
    document.getElementById("HomeTab").hidden = true;
    document.getElementById("ProjectsTab").hidden = false;
    document.getElementById("ContactTab").hidden = true;
  });


  document.getElementsByClassName('nav-link')[2]
  .addEventListener('click', function(event) {
    document.getElementsByClassName('nav-link')[2].classList.add("active");
    document.getElementsByClassName('nav-link')[0].classList.remove("active");
    document.getElementsByClassName('nav-link')[1].classList.remove("active");
    document.getElementById("HomeTab").hidden = true;
    document.getElementById("ProjectsTab").hidden = true;
    document.getElementById("ContactTab").hidden = false;
  });