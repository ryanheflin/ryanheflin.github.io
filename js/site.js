async function loadSidebar() {
  const container = document.getElementById("site-sidebar");

  const response = await fetch("components/sidebar.html");
  const html = await response.text();

  container.innerHTML = html;
}

loadSidebar();
