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

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

function highlightCurrentPage() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("#sidebar a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.remove(
        "text-gray-300",
        "hover:bg-gray-700",
        "hover:text-white"
      );

      link.classList.add("bg-gray-700", "font-bold");
      link.style.color = "var(--altafulla-yellow)";
    }
  });
}

loadSidebar();
