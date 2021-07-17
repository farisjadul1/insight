function myFunction() {
    var x = document.getElementById("nav1");
    if (x.className === "navup") {
      x.className += " responsive";
    } else {
      x.className = "navup";
    }
  }
