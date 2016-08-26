(function () {
  window.addEventListener('load', function () {
    var script = document.createElement('script');
    script.async = true;
    script.src = '//localhost:8080/widget.js';

    var element = document.getElementById('script_unique_id');
    element.parentNode.insertBefore(script, element);
  }, false);
})();