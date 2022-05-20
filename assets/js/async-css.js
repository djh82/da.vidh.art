Array.prototype.slice
  .call(document.querySelectorAll('[data-async="css-async-load"]'))
  .map(function (a) {
    a.addEventListener("load", function () {
      (this.media = "all"), (this.onload = null);
    });
  });