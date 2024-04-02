<script>
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = document.querySelectorAll('img');
  lazyImages.forEach(function(img) {
    img.setAttribute('loading', 'lazy');
  });
});
</script>