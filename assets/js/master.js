let inputs = document.querySelectorAll(".inputs>input");
let spans = document.querySelectorAll(".spans>span");

let _name = document.getElementById("name");

inputs.forEach((val, i) => {
  val.addEventListener("input", () => {
    if (val.value.search(/[^0-9]/) >= 0) {
      val.value = val.value.slice(0, val.value.length - 1);
    } else {
      if (i < 3) {
        if (val.value.length == 4) {
          val.nextElementSibling.focus();
        } else if (val.value.length > 4) {
          val.value = val.value.slice(0, val.value.length - 1);
          val.nextElementSibling.focus();
        }
      } else {
        if (val.value.length == 4) {
          _name.focus();
        } else if (val.value.length > 4) {
          val.value = val.value.slice(0, val.value.length - 1);
          _name.focus();
        }
      }
      spans[i].innerHTML = val.value;
    }
  });
});

// holder ********

let _holder = document.getElementById("name");
let fName = document.getElementById("fullname");

_holder.addEventListener("input", (e) => {
  let k = e.target.value;
  if (k.search(/[ا-ی]/) >= 0) {
    k = k.slice(0, k.length - 1);
    e.target.value = k;
  } else {
    fName.innerHTML = e.target.value;
  }
});

// change *****

let _year = document.getElementById("year");
let _month = document.getElementById("month");

let _yy = document.getElementById("yy");
let _mm = document.getElementById("mm1");
_month.addEventListener("change", () => {
  _mm.innerHTML = _month.value;
});

_year.addEventListener("change", () => {
  _yy.innerHTML = _year.value;
});

// cvv2 ************

let _cvv2 = document.getElementById("cvv2");
let maincard = document.querySelector(".maincard");
_cvv2.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  setTimeout(() => {
    maincard.classList.add("active");
  }, 200);
});

window.addEventListener("click", () => {
  setTimeout(() => {
    maincard.classList.remove("active");
  }, 200);
});

let backcvv = document.getElementById("backcvv");
_cvv2.addEventListener("input", () => {
  if (_cvv2.value.search(/[a-z]/) >= 0 || _cvv2.value.search(/[ا-ی]/) >= 0) {
    _cvv2.value = _cvv2.value.slice(0, _cvv2.value.length - 1);
  }
  backcvv.innerHTML = _cvv2.value;
});

// ************

let _w = maincard.clientWidth / 20;
maincard.addEventListener("mousemove", (e) => {
  x = e.offsetX / 10 - _w;
  maincard.style.transform = "perspective(800px)rotateY(" + x + "deg)";
});

maincard.addEventListener("mouseleave", (e) => {
  maincard.style.transform = "perspective(800px)rotateY(0deg)rotateX(0deg)";
});
