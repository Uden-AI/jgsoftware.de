/* global katex: false */

(function () {
  var input = document.getElementById("input");
  var output = document.getElementById("output");

  function render() {
      katex.render(input.value, output, {displayMode: true, leqno: true, throwOnError: false, errorColor: "#ff8f8f"});
  }

  input.addEventListener("input", render);

  render();
})();