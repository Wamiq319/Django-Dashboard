document.addEventListener("DOMContentLoaded", () => {
  /* +++++++++++++++++++++++++++++++
     SIDEBAR  HANDLING CODE 
 ++++++++++++++++++++++++++++++*/
  const sideBarMenuBtn = document.querySelector(".sidebar-hamburger");
  const menuItems = document.querySelectorAll(".sidebar-menu-item");
  const parentMenus = document.querySelectorAll(".sidebar-menu-parent");
  let gactiveSubMenu = null; // Global variable to track the active submenu
  let activeMenuItem = null; // Global variable to track the active menu item

  // Click Function for changing Sidebar width
  sideBarMenuBtn.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    document
      .querySelector(".page-content")
      .classList.toggle("sidebar-collapsed");
    const menuText = sidebar.querySelectorAll(".menu-text");
    menuText.forEach((text) => {
      text.classList.toggle("gHIDE");
    });
  });

  // Add click event listener to each parent menu item

  parentMenus.forEach((parent) => {
    const subMenuItems = parent.querySelectorAll(
      ".submenu-container  .sidebar-sub-menu-item"
    );

    subMenuItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();

        // If there is an active submenu, remove the 'active' class
        if (gactiveSubMenu) {
          gactiveSubMenu.classList.remove("active");
        }

        // Add 'active' class to the clicked item and update the global variable
        item.classList.add("active");
        gactiveSubMenu = item;
      });
    });
  });

  // Add click event listener to each menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // If there is an active menu item, remove the 'active' class
      if (activeMenuItem) {
        activeMenuItem.classList.remove("active");
      }

      // Add 'active' class to the clicked item and update the global variable
      this.classList.add("active");
      activeMenuItem = this;
    });
  });
});
