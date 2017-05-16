// /* globals L $ */
//
// $(document).ready(function () {
//   function change_background () {
//     document.getElementById('background').style.backgroundImage = 'url("Assets/Celebrate/cake_2.jpg")'
//   }
// })
var celebrateCakes = ['Assets/Celebrate/cake_0.jpg', 'Assets/Celebrate/cake_1.jpg', 'Assets/Celebrate/cake_2.jpg', 'Assets/Celebrate/cake_3.jpg', 'Assets/Celebrate/cake_4.jpg', 'Assets/Celebrate/cake_5.jpg', 'Assets/Celebrate/cake_6.jpg', 'Assets/Celebrate/cake_7.jpg', 'Assets/Celebrate/cake_9.jpg', 'Assets/Celebrate/cake_10.jpg', 'Assets/Celebrate/cake_11.jpg', 'Assets/Celebrate/cake_12.jpg']
var index = 0

function nextImage () {
  if (index < celebrateCakes.length - 1) {
    index++
  } else {
    index = 0
  }
  document.getElementById('background').style.backgroundImage = 'url(' + celebrateCakes[index] + ')'
}

function previousImage () {
  if (index === 0) {
    index = 11
  } else {
    index--
  }
  document.getElementById('background').style.backgroundImage = 'url(' + celebrateCakes[index] + ')'
}
