// --------------------------------------------------------------------- > side bar scripts <
const sidebarClose = document.querySelector(".sidebarClose");
const moblieHeader = document.querySelector(".moblieHeader");
const sideBar = document.querySelector(".sideBar");
const hambergerMenu = document.querySelector(".hambergerMenu");
const MenuButton = document.querySelector(".MenuButton");

sideBar.addEventListener("click", () => {
  sideBar.classList.remove("sidebar");
  hambergerMenu.classList.remove("MenuOnClick");
});
sidebarClose.addEventListener("click", () => {
  sideBar.classList.remove("sidebar");
  hambergerMenu.classList.remove("MenuOnClick");
});

moblieHeader.addEventListener("click", () => {
  sideBar.classList.add("sidebar");
  hambergerMenu.classList.add("MenuOnClick");
});

// --------------------------------------------------------------------- > side bar scripts <
//
//  -------------------------------------------------------------------- > header scripts <
//
// ------------------------------------------- >> navigate to club <<
const signnupbtn = document.querySelector(".accountBox");

signnupbtn.addEventListener("click", () => {
  window.location.assign("../Customer_Club_Screen/entery/index.html");
});

// const navigateToAU = document.querySelector(".navigatoToAU");
// const aboutus = document.querySelector(".aboutUs");
// navigateToAU.addEventListener("click", () => {
//   aboutus.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
// });

// ------------------------------------------- >> navigate to club <<
//
//  -------------------------------------------------------------------- > header scripts <
//
//  -------------------------------------------------------------------- > main content scripts <
//
// ------------------------------------------- >> search event listener <<
// const searchContainer = document.querySelector(".bigAnimatedBtn");
// const leftline = document.querySelector(".leftLine");
// const rightline = document.querySelector(".rightLine");
// const topline = document.querySelector(".topLine");
// const bottomLine = document.querySelector(".bottomLine");
// const searchInput = document.querySelector(".searchInput");
// const advancedSearch = document.querySelector(".advancedSearch");

// searchContainer.addEventListener("mouseenter", () => {
//   topline.classList.add("top");
//   rightline.classList.add("right");
//   bottomLine.classList.add("bottom");
//   leftline.classList.add("left");
//   searchContainer.classList.add("active");
// });
// searchContainer.addEventListener("mouseleave", () => {
//   topline.classList.remove("top");
//   rightline.classList.remove("right");
//   bottomLine.classList.remove("bottom");
//   leftline.classList.remove("left");
//   searchContainer.classList.remove("active");
// });

// searchInput.addEventListener("click", () => {
//   searchContainer.classList.add("active");
// });

// advancedSearch.addEventListener("click", () => {
//   advancedSearch.classList.toggle("active");
// });
// ------------------------------------------- >> search event listener <<

// ------------------------------------------- >> navigate animate screen <<
spalshScreen = document.querySelector(".splashScreen");
downloadScreen = document.querySelector(".downloadScreen");

setTimeout(() => {
  spalshScreen.classList.add("gtdownload");
}, 3000);

setTimeout(() => {
  downloadScreen.classList.add("animate");
}, 3000);

// ------------------------------------------- >> navigate animate screen <<

const GTSButton = document.querySelector(".GTSButton");
GTSButton.addEventListener("click", () => {
  window.location.assign("./../Customer_Club_Screen/entery/index.html");
});

const GoToClub = document.querySelector("#GoToClub");
GoToClub.addEventListener("click", () => {
  window.location.assign("./../Customer_Club_Screen/entery/index.html");
});
//
// ------------------------------------------- >> discount builder <<
const dicsountNavBar = document.querySelector(".dicsountNavBar");
const navbar = document.querySelector(".navbar");
const discountList = [
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
];
for (let discount = 0; discount < discountList.length; discount++) {
  // -------------- > craete html <
  const discountBox = document.createElement("div");
  discountBox.setAttribute("class", "discountBox");
  const discountText = document.createElement("span");
  discountText.setAttribute("class", "discountText");
  const discountIcon = document.createElement("i");
  discountIcon.setAttribute("id", "discountIcon");
  discountIcon.setAttribute("class", "fa-solid fa-percent");
  // -------------- > craete html <
  //
  // -------------- > fill html with content <
  discountText.innerHTML = discountList[discount];
  discountBox.appendChild(discountText);
  discountBox.appendChild(discountIcon);
  navbar.appendChild(discountBox);
  // -------------- > fill html with content <
}
// ------------------------------------------- >> discount builder <<
//
//  -------------------------------------------------------------------- > main content scripts <
//
//  -------------------------------------------------------------------- > secounf content scripts <
//
// --------------------------------------------------------- >> comments builder <<
const commentContainer = document.querySelector(".commnets");
const commnetsBox = document.querySelector(".commnetContainer");
const userComments = [
  "زمان رسیدن مرسوله به موقع بود ",
  "از کیفیت کالا راضی بودم",
  "لطفا رنگ زرد این محصول هم اضافه کنید",
  "واقعا یکی از جالب ترین سایت های انلاین شاپ و",
  "با تشکر از پشتیبانی",
  "لطفا در گزینه پرداخت با کیف پول را ادیت کنید",
  "قیمت و جنس کالا دریافتی عالی بود",
  "من خرید این محصول رو پیشنهاد میکنم",
  "زمان رسیدن مرسوله به موقع بود ",
  "از کیفیت کالا راضی بودم",
  "لطفا رنگ زرد این محصول هم اضافه کنید",
  "واقعا یکی از جالب ترین سایت های انلاین شاپ و",
  "با تشکر از پشتیبانی",
  "لطفا در گزینه پرداخت با کیف پول را ادیت کنید",
  "قیمت و جنس کالا دریافتی عالی بود",
  "من خرید این محصول رو پیشنهاد میکنم",
];
const adminComments = ["حتما در تغییرات محصول اضافه خواهد شد"];
const userImage = [
  "./../../../assets/image/user1.png",
  "./../../../assets/image/user2.png",
  "./../../../assets/image/user3.png",
  "./../../../assets/image/user4.png",
  "./../../../assets/image/user5.png",
  "./../../../assets/image/user6.png",
  "./../../../assets/image/user7.png",
  "./../../../assets/image/user8.png",
  "./../../../assets/image/user1.png",
  "./../../../assets/image/user2.png",
  "./../../../assets/image/user3.png",
  "./../../../assets/image/user4.png",
  "./../../../assets/image/user5.png",
  "./../../../assets/image/user6.png",
  "./../../../assets/image/user7.png",
  "./../../../assets/image/user8.png",
];
const adminImage = "assets/image/admin.png";
// ------------------------------------ >> user comment builder <<
// for (let userComment = 0; userComment < userComments.length; userComment++) {
//   // -------------------------- >> craete html <<
//   const userDiv = document.createElement("div");
//   userDiv.setAttribute("class", "userComment");
//   const userText = document.createElement("span");
//   userText.setAttribute("class", "uComment");
//   const userImg = document.createElement("img");
//   userImg.setAttribute("class", "userImg");
//   userImg.setAttribute("src", `${userImage[userComment]}`);
//   // -------------------------- >> craete html <<
//   //
//   // -------------- > fill html with content <
//   userText.innerText = userComments[userComment];
//   userDiv.appendChild(userText);
//   userDiv.appendChild(userImg);
//   commentContainer.appendChild(userDiv);
//   commnetsBox.appendChild(commentContainer);
//   // -------------- > fill html with content <
// }
// ------------------------------------ >> user comment builder <<
//
// --------------------------------------------------------- >> comments builder <<
//
// --------------------------------------------------------- >> squre builder <<
const frameSlider = document.querySelector(".frameSlider");
const frameSlider2 = document.querySelector(".frameSlider2");

for (let count = 0; count < 150; count++) {
  // create html
  const squre = document.createElement("div");
  squre.setAttribute("class", "squre");
  // create html
  //
  // fill html
  frameSlider.appendChild(squre);
  // fill html
}

for (let count = 0; count < 150; count++) {
  // create html
  const squre = document.createElement("div");
  squre.setAttribute("class", "squre");
  // create html
  //
  // fill html
  frameSlider2.appendChild(squre);
  // fill html
}
// --------------------------------------------------------- >> squre builder <<
//
// const slider = document.querySelector(".slider");
// slider.addEventListener("wheel", (event) => {
//   slider.scrollLeft += event.deltaY; // Adjust the scrolling speed if needed
// });
//
//
const imagecontainer = document.querySelector(".imageCotnainer");
imagecontainer.addEventListener("click", () => {
  if (imagecontainer.requestFullscreen) {
    imagecontainer.requestFullscreen();
  } else if (imagecontainer.mozRequestFullScreen) {
    // Firefox
    imagecontainer.mozRequestFullScreen();
  } else if (imagecontainer.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    imagecontainer.webkitRequestFullscreen();
  } else if (imagecontainer.msRequestFullscreen) {
    // IE/Edge
    imagecontainer.msRequestFullscreen();
  }
});
//
//  -------------------------------------------------------------------- > secounf content scripts <
//
//  -------------------------------------------------------------------- > footer content scripts <
//
// ------------------------------------------------- >> nav bar builder <<
const SdicsountNavBar = document.querySelector(".SdiscountNavBar");
const navbar2 = document.querySelector(".navbar2");

const SdiscountList = [
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
  "تخفیف ۱۵٪ درصدی اسباب بازی ها",
  "تخفیف ۱۵٪ درصدی پوشاک",
  "تخفیف ۱۵٪ درصدی لوازم خانگی",
];

for (let discount = 0; discount < SdiscountList.length; discount++) {
  // -------------- > craete html <
  const discountBox = document.createElement("div");
  discountBox.setAttribute("class", "discountBox");
  const discountText = document.createElement("span");
  discountText.setAttribute("class", "discountText");
  const discountIcon = document.createElement("i");
  discountIcon.setAttribute("id", "discountIcon");
  discountIcon.setAttribute("class", "fa-solid fa-percent");
  // -------------- > craete html <
  //
  // -------------- > fill html with content <
  discountText.innerHTML = SdiscountList[discount];
  discountBox.appendChild(discountText);
  discountBox.appendChild(discountIcon);
  navbar2.appendChild(discountBox);
  SdicsountNavBar.appendChild(navbar2);
  // -------------- > fill html with content <
}
// ------------------------------------------------- >> nav bar builder <<
//
// ------------------------------------------------- >> icon container builder <<
const iconsCotnainer = document.querySelector(".iconsCotnainer");

const iconList = [
  "./../../../assets/image/support.png",
  "./../../../assets/image/express-delivery.png",
  "./../../../assets/image/7-day-back.png",
  "./../../../assets/image/payment-on-the-spot.png",
  "./../../../assets/image/original-products.png",
];

for (let icons = 0; icons < iconList.length; icons++) {
  // ----------------- > html create <
  const iconBox = document.createElement("div");
  iconBox.setAttribute("class", "iconBox");
  const icon = document.createElement("img");
  icon.setAttribute("class", "icon");
  // ----------------- > html create <
  // ----------------- > html fill <
  icon.src = iconList[icons];
  iconBox.appendChild(icon);
  iconsCotnainer.appendChild(iconBox);
  // ----------------- > html fill <
}
// ------------------------------------------------- >> icon container builder <<
//
// ------------------------------------------------- >> go to up listener <<
const floathingActionButton = document.querySelector(
  ".floathingActionContainer"
);
floathingActionButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ------------------------------------------------- >> go to up listener <<
//
//  -------------------------------------------------------------------- > footer content scripts <
