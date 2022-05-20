var all_head_style = document.querySelectorAll('head > style');
for (var i = 0; i < all_head_style.length; i++) {
  var head_style = all_head_style[i];
  if (head_style.dataset.async === "css-async-load") {
    head_style.addEventListener('load',function() {
      this.media = 'all';
      this.onload = null;
    });
    // Check if the stylesheet is already loaded in case we missed the load event:
    // (uses some "magic": https://stackoverflow.com/a/21147238/2144578)
    if (head_style.sheet && head_style.sheet.cssRules) {
        head_style.media = 'all';
    }
  }
}