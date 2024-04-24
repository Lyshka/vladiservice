const hideHeaderMenus = () => {
  const headerMenuALL = document.querySelectorAll<HTMLElement>(".headerMenu");
  const toggleHeaderMobileMenu = document.getElementById(
    "toggleHeaderMobileMenu"
  ) as HTMLButtonElement;
  const burderHeaderMobileMenu = toggleHeaderMobileMenu.querySelector(
    "#burderHeaderMobileMenu"
  ) as HTMLElement;
  const closeHeaderMobileMenu = toggleHeaderMobileMenu.querySelector(
    "#closeHeaderMobileMenu"
  ) as HTMLElement;

  if (closeHeaderMobileMenu.classList.contains("active")) {
    burderHeaderMobileMenu.classList.toggle("active");
    closeHeaderMobileMenu.classList.toggle("active");
  }

  headerMenuALL.forEach((headerMenu) => {
    headerMenu.classList.remove("open");
  });
};

const mobileMenu = () => {
  const mobileMenu = document.getElementById("mobileMenu") as HTMLElement;
  const openMobileMenu = document.getElementById(
    "openMobileMenu"
  ) as HTMLElement;

  let open = false;

  openMobileMenu.onclick = () => {
    open = !open;

    if (open) {
      hideHeaderMenus();
      openMobileMenu.classList.add("active");
      mobileMenu.classList.add("open");
    } else {
      openMobileMenu.classList.remove("active");
      mobileMenu.classList.remove("open");
    }
  };
};
mobileMenu();

const headerMobileMenu = () => {
  const headerMobileMenu = document.getElementById(
    "headerMobileMenu"
  ) as HTMLElement;
  const linkALL = headerMobileMenu.querySelectorAll<HTMLLinkElement>(
    ".header-nav-mobile-menu a"
  );
  const toggleHeaderMobileMenu = document.getElementById(
    "toggleHeaderMobileMenu"
  ) as HTMLButtonElement;
  const burderHeaderMobileMenu = toggleHeaderMobileMenu.querySelector(
    "#burderHeaderMobileMenu"
  ) as HTMLElement;
  const closeHeaderMobileMenu = toggleHeaderMobileMenu.querySelector(
    "#closeHeaderMobileMenu"
  ) as HTMLElement;

  toggleHeaderMobileMenu.onclick = () => {
    burderHeaderMobileMenu.classList.toggle("active");
    closeHeaderMobileMenu.classList.toggle("active");

    if (closeHeaderMobileMenu.classList.contains("active")) {
      headerMobileMenu.classList.add("open");
    } else {
      headerMobileMenu.classList.remove("open");
    }
  };

  linkALL.forEach((link) => {
    link.onclick = () => {
      hideHeaderMenus();
    };
  });
};
headerMobileMenu();
