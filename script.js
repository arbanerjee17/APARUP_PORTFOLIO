<script>
  function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  window.onclick = function(event) {
  const menu = document.getElementById("dropdownMenu");
  if (!event.target.matches('.menu-icon')) {
    menu.style.display = "none";
  }
}
    </script>
