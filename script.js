/* 
 function isOlderEdgeOrIE() {
    return (
      window.navigator.userAgent.indexOf("MSIE ") > -1 ||
      !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
      window.navigator.userAgent.indexOf("Edge") > -1
    );
  }
  
  function valueTotalRatio(value, min, max) {
    return ((value - min)*0.1 / (max - min)).toFixed(2);
  }
  
  function getLinearGradientCSS(ratio, leftColor, rightColor) {
    return [
      '-webkit-gradient(',
      'linear, ',
      'left top, ',
      'right top, ',
      'color-stop(' + ratio + ', ' + leftColor + '), ',
      'color-stop(' + ratio + ', ' + rightColor + ')',
      ')'
    ].join('');
  }
  
  function updateRangeEl(rangeEl) {
    rangeEl.forEach(e => {
        var ratio = valueTotalRatio(e.value, e.min, e.max);
        e.style.backgroundImage = getLinearGradientCSS(ratio, '#fb6470', '#bcbcbe');
    })
  }
  
  function initRangeEl() {
    var rangeEl = document.querySelectorAll('input[type=range]');
    var textEl = document.querySelector('input[type=text]');
  

    if (isOlderEdgeOrIE()) {
      rangeEl.style.height = "20px";
      // IE 11/10 fires change instead of input
      // https://stackoverflow.com/a/50887531/3528132
      rangeEl.forEach(elem => elem.addEventListener("change", function(e) {
        textEl.value = e.target.value;
      }));
      rangeEl.forEach(elem => elem.addEventListener("input", function(e) {
        textEl.value = e.target.value;
      }));
    } else {
      updateRangeEl(rangeEl);
      rangeEl.forEach(elem => elem.addEventListener("input", function(e) {
        updateRangeEl(e.target);
        textEl.value = e.target.value;
      }));
    }
  }
  
  initRangeEl(); */

const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)