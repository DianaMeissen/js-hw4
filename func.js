'use strict';

var multiItemSlider = (function () {
  return function (selector, config) {
    var sliderControls = document.querySelectorAll('.slider__control');
    var controlClick = function () {
    var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
    transformItem(direction);
    };

    var setUpListeners = function () {
    sliderControls.forEach(function (item) {
      item.addEventListener('click', controlClick);
    });
    };

    function transformItem (direction) {
      var item = document.querySelector('slider__item'),
      i = -300;

      if (direction === 'left') {
          item.style.transform = `translateX(${i}px);`;
          i -= 300;
      } else {
          i = 0;
          item.style.transform = `translateX(${i}px);`;
          i += 300;
      }
    };

    setUpListeners();

    return {
      right: function () {
        transformItem('right');
      },
      left: function () { 
        transformItem('left');
      }
    }
  }
}());

var slider = multiItemSlider('.slider');

