let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

// Get the container element
var btnContainer = document.getElementById("main-nav")
console.log(btnContainer)

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("haha");
console.log(btns)


// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-li");
    current[0].className = current[0].className.replace(" active-li", "");
    this.className += " active-li";
  });
}


// Khởi tạo thanh trượt
function initSlider() {
  var slider = document.getElementById("slider");
  var range = document.createElement("div");
  range.className = "range";
  slider.appendChild(range);

  var startLabel = document.getElementById("start");
  var endLabel = document.getElementById("end");

  var min = 10000; // Giá trị nhỏ nhất (10,000 VNĐ)
  var max = 15000000; // Giá trị lớn nhất (15,000,000 VNĐ)
  var start = 500000; // Giá trị mặc định cho điểm bắt đầu (500,000 VNĐ)
  var end = 10000000; // Giá trị mặc định cho điểm kết thúc (10,000,000 VNĐ)
  // Cập nhật giá trị hiển thị
  startLabel.innerText = start.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  endLabel.innerText = end.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  // Cập nhật giá trị hiển thị
  startLabel.innerText = start;
  endLabel.innerText = end;

  // Cập nhật vị trí của thanh trượt khi giá trị thay đổi
  function updateSlider() {
    var width = slider.offsetWidth;
    var rangeWidth = (end - start) * width / (max - min);
    var rangeOffset = (start - min) * width / (max - min);
    range.style.width = rangeWidth + "px";
    range.style.left = rangeOffset + "px";
  }
  // Sự kiện khi di chuyển thanh trượt
  function handleSlide(event) {
    var posX = event.clientX - slider.offsetLeft;
    var pos = posX * (max - min) / slider.offsetWidth + min;

    if (pos >= min && pos <= max) {
      if (Math.abs(pos - start) < Math.abs(pos - end)) {
        start = pos;
      } else {
        end = pos;
      }

      updateSlider();
      startLabel.innerText = start.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      endLabel.innerText = end.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
  }
  // Sự kiện khi nhấp chuột vào thanh trượt
      function handleMouseDown(event) {
        document.addEventListener("mousemove", handleSlide);
        document.addEventListener("mouseup", handleMouseUp);
      }

      // Sự kiện khi nhả chuột ra khỏi thanh trượt
      function handleMouseUp() {
        document.removeEventListener("mousemove", handleSlide);
        document.removeEventListener("mouseup", handleMouseUp);
      }

      // Gán sự kiện cho thanh trượt
      slider.addEventListener("mousedown", handleMouseDown);

      // Khởi tạo thanh trượt ban đầu
      updateSlider();
    }

    // Gọi hàm khởi tạo thanh trượt
    initSlider();



    //Detail 
    let slideIndexsub = 1;
    showSlidessub(slideIndexsub);

    // Next/previous controls
    function plusSlidessub(m) {
      showSlidessub(slideIndexsub += m);
    }

    // Thumbnail image controls
    function currentSlidesub(m) {
      showSlidessub(slideIndexsub = m);
    }

    function showSlidessub(m) {
      let isub;
      let slidessub = document.getElementsByClassName("mySlidessub");
      let dotssub = document.getElementsByClassName("demo");
      if (m > slidessub.length) {slideIndexsub = 1}
      if (m < 1) {slideIndexsub = slidessub.length}
      for (isub = 0; isub < slidessub.length; isub++) {
        slidessub[isub].style.display = "none";
      }
      for (isub = 0; isub < dotssub.length; isub++) {
        dotssub[isub].className = dotssub[isub].className.replace("active-img", "");
      }
      slidessub[slideIndexsub-1].style.display = "block";
      dotssub[slideIndexsub-1].className += "active-img";
}