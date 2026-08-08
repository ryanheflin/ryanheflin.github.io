async function loadSidebar() {
  const container = document.getElementById("site-sidebar");

  if (!container) return;

  try {
    const response = await fetch("components/sidebar.html");

    if (!response.ok) {
      throw new Error("Could not load sidebar");
    }

    const html = await response.text();
    container.innerHTML = html;

    highlightCurrentPage();
  } catch (error) {
    console.error("Sidebar error:", error);
  }
}

loadSidebar();
