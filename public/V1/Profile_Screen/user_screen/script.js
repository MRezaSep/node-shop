// import from packages
// import axios from "axios";

// axios.post("banibon.ir/api/v1", {}).then(

//   ).catch()
// ------------------------------------------------ >> window on load scripts <<
const WelcomeContiner = document.querySelector(".WelcomeContiner");
window.addEventListener("load", () => {
  // add welcome conteiner animation
  setTimeout(() => {
    WelcomeContiner.classList.add("welcomeNotification");
  }, 1000);
  // add welcome conteiner animation

  // fill feild with ther values
  document.querySelector(
    ".UserName"
  ).innerText = `${UserFirstName} ${UserLastName}`;
  document.querySelector("#UserName").value = UserFirstName;
  document.querySelector("#LastName").value = UserLastName;
  document.querySelector("#AddressText").value = UserAddress;
  document.querySelector("#PhoneNumber").value = UserNumber;
  document.querySelector("#NationalCode").value = UserNationalCode;
  document.querySelector("#Job").value = UserJob;

  // fill feild with ther values
  //
});
// ------------------------------------------------ >> window on load scripts <<

// ------------------------------------------------ >> Filds Values <<
let UserFirstName = "سبحان";
let UserLastName = "یاقوتی";
let UserAddress = "مشهد ,الهیه ,خیابان رحمانیه ,رحمانیه ۲۱ ,مجتمع مهر";
let UserNumber = "۹۰۴ ۴۵۳ ۳۲۴۷";
let UserNationalCode = "۰۹۲۶۲۱۵۷۸۷";
let UserJob = "برنامه نویس";

// ------------------------------------------------ >> Filds Values <<

// ------------------------------------------------ >> user Info Script <<

// ----------------- >> remove welcome conteiner animation
setTimeout(() => {
  WelcomeContiner.classList.remove("welcomeNotification");
}, 3000);
// ----------------- >> remove welcome conteiner animation

// ----------------- >> image picker
const imagePicker = document.querySelector(".ImagePicker");
UserImage = document.querySelector(".UserImageFile");
userIcon = document.querySelector(".userIcon");

imagePicker.addEventListener("change", function () {
  const selectedFile = imagePicker.files[0];

  if (selectedFile) {
    const imageURL = URL.createObjectURL(selectedFile);
    userIcon.classList.add("removeIcon");
    UserImage.classList.add("addImage");
    UserImage.style.backgroundImage = `url(${imageURL})`;
  }
});
// ----------------- >> image picker

// ----------------- >> Contact Way Selector
const ContactWays = document.querySelectorAll(".ContactWay");
const ContactWayTitleText = document.querySelector(".ContactWayTitleText");
const ContactWayContiner = document.querySelector(".ContactWayContiner");
const ContactWayTitle = document.querySelector(".ContactWayTitle");

ContactWayTitle.addEventListener("click", () => {
  ContactWayContiner.classList.toggle("onClick");
});

ContactWays.forEach((SelectedContactWay) => {
  SelectedContactWay.addEventListener("click", () => {
    let SelectedWay =
      SelectedContactWay.querySelector(".ContactWatText").innerText;
    ContactWayTitleText.innerText = SelectedWay;
    ContactWayContiner.classList.remove("onClick");
  });
});
// ----------------- >> Contact Way Selector

// ----------------- >> Marrid date Picker <<
//
// variable
const MdHeaderContiner = document.querySelector("#MdHeaderContiner");
const MdHeaderText = document.querySelector("#MdHeaderText");
const MdDatePicker = document.querySelector("#MdDatePicker");
const MdSubmitButton = document.querySelector("#MdSubmitButton");

let SelectedMarridDay = 0;
let SelectedMarridMonth = "";
let SelectedMarridYear = 0;
MdTitle = [SelectedMarridDay, SelectedMarridMonth, SelectedMarridYear];
// variable

// ---------- >> Marrid date listener

// header on click
MdHeaderContiner.addEventListener("click", () => {
  MdDatePicker.classList.toggle("openMd");
});
// header on click

// submit on click
MdSubmitButton.addEventListener("click", () => {
  MdDatePicker.classList.remove("openMd");
  MdHeaderText.textContent = MdTitle;
});
// submit on click

// ---------- >> Marrid date listener

// ---------- >> marrid date builder

// -------------- >> day Scripts
//
// variables
const MdDayBodyContiner = document.querySelector("#MdDayBodyContiner");
// variables
//
// Day scroll buttons
const MdDayUp = document.querySelector("#MdDayUp");
const MdDayDown = document.querySelector("#MdDayDown");

MdDayUp.addEventListener("click", () => {
  MdDayBodyContiner.scrollBy({
    top: -60,
    behavior: "smooth",
  });
});

MdDayDown.addEventListener("click", () => {
  MdDayBodyContiner.scrollBy({
    top: 60,
    behavior: "smooth",
  });
});
// Day scroll buttons
//
// day builder
let MdSelectedDayBox = null;
for (let Day = 1; Day <= 31; Day++) {
  // crate html
  const DayBox = document.createElement("div");
  DayBox.setAttribute("class", "DayBox");
  const DayText = document.createElement("span");
  DayText.setAttribute("class", "DayText");
  // crate html
  //
  // fill html
  DayText.textContent = Day;
  DayBox.appendChild(DayText);
  MdDayBodyContiner.appendChild(DayBox);
  // fill html
  //
  // event listener
  DayBox.addEventListener("click", () => {
    let SelectedDay = DayBox.querySelector(".DayText").innerText;
    if (MdSelectedDayBox) {
      MdSelectedDayBox.classList.remove("selectedDay");
    }
    DayBox.classList.add("selectedDay");
    MdSelectedDayBox = DayBox;
    MdTitle[0] = SelectedDay;
  });
  // event listener
}
// day builder
//
// -------------- >> day Scripts

// -------------- >> month builder
//
// variable
const MdMonthBodyContiner = document.querySelector("#MdMonthBodyContiner");
const Mdmonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "ابان",
  "اذر",
  "دی",
  "بهمن",
  "اسفند",
];
// variable
//
// Month scroll buttons
const MdMonthUp = document.querySelector("#MdMonthUp");
const MdMonthDown = document.querySelector("#MdMonthDown");

MdMonthUp.addEventListener("click", () => {
  MdMonthBodyContiner.scrollBy({
    top: -60,
    behavior: "smooth",
  });
});

MdMonthDown.addEventListener("click", () => {
  MdMonthBodyContiner.scrollBy({
    top: 60,
    behavior: "smooth",
  });
});
// Month scroll buttons
//
// month builder
let MdSelectedMonthBox = null;
for (let Month = 0; Month < Mdmonths.length; Month++) {
  // crate html
  const MonthBox = document.createElement("div");
  MonthBox.setAttribute("class", "MonthBox");
  const MonthText = document.createElement("span");
  MonthText.setAttribute("class", "MonthText");
  // crate html
  //
  // fill html
  MonthText.textContent = Mdmonths[Month];
  MonthBox.appendChild(MonthText);
  MdMonthBodyContiner.appendChild(MonthBox);
  // fill html
  //
  // event listener
  MonthBox.addEventListener("click", () => {
    let SelectedMonth = MonthBox.querySelector(".MonthText").innerText;
    if (MdSelectedMonthBox) {
      MdSelectedMonthBox.classList.remove("selectedMonth");
    }
    MonthBox.classList.add("selectedMonth");
    MdSelectedMonthBox = MonthBox;
    MdTitle[1] = SelectedMonth;
  });
  // event listener
}
// month builder
//
// -------------- >> month builder

// -------------- >> year Script
//
// variables
const MdYearBodyContiner = document.querySelector("#MdYearBodyContiner");
// variables
//
// Year scroll buttons
const MdYearUp = document.querySelector("#MdYearUp");
const MdYearDown = document.querySelector("#MdYearDown");

MdYearUp.addEventListener("click", () => {
  MdYearBodyContiner.scrollBy({
    top: -60,
    behavior: "smooth",
  });
});

MdYearDown.addEventListener("click", () => {
  MdYearBodyContiner.scrollBy({
    top: 60,
    behavior: "smooth",
  });
});
// Year scroll buttons
//
// year builder
//
let MdSelectedYearBox = null;
for (let Year = 1325; Year <= 1402; Year++) {
  // crate html
  const YearBox = document.createElement("div");
  YearBox.setAttribute("class", "YearBox");
  const YearText = document.createElement("span");
  YearText.setAttribute("class", "YearText");
  // crate html
  //
  // fill html
  YearText.textContent = Year;
  YearBox.appendChild(YearText);
  MdYearBodyContiner.appendChild(YearBox);
  // fill html
  //
  // event listener
  YearBox.addEventListener("click", () => {
    let SelectedYear = YearBox.querySelector(".YearText").innerText;
    if (MdSelectedYearBox) {
      MdSelectedYearBox.classList.remove("selectedYear");
    }
    YearBox.classList.add("selectedYear");
    MdSelectedYearBox = YearBox;
    MdTitle[2] = SelectedYear;
  });
  // event listener
}
// -------------- >> year Script

// ---------- >> marrid date builder

// ----------------- >> Marrid date Picker <<

// ----------------- >> Birthday Picker <<

// birthDay Picker listener

// variable
const BdHeaderContiner = document.querySelector("#BdHeaderContiner");
const BdDatePickerContiner = document.querySelector("#BdDatePicker");
const BdSubmitButton = document.querySelector("#BdSubmitButton");
const BdHeaderText = document.querySelector("#BdHeaderText");

let SelectedBirthDay = 0;
let SelectedBirthMonth = "";
let SelectedBirthYear = 0;
BdTitle = [SelectedBirthDay, SelectedBirthMonth, SelectedBirthYear];
// variable
//
// header on click
BdHeaderContiner.addEventListener("click", () => {
  BdDatePickerContiner.classList.toggle("openBd");
});
// header on click
//
// submit on click
BdSubmitButton.addEventListener("click", () => {
  BdDatePickerContiner.classList.remove("openBd");
  BdHeaderText.textContent = BdTitle;
});
// submit on click
//
// birthDay Picker listener
//
// -------------- >> day Scripts
//
// variables
const DayBodyContiner = document.querySelector(".DayBodyContiner");
// variables
//
// Day scroll buttons
const BdDayUp = document.querySelector("#BdDayUp");
const BdDayDown = document.querySelector("#BdDayDown");

BdDayUp.addEventListener("click", () => {
  DayBodyContiner.scrollBy({
    top: -60,
    behavior: "smooth",
  });
});

BdDayDown.addEventListener("click", () => {
  DayBodyContiner.scrollBy({
    top: 60,
    behavior: "smooth",
  });
});
// Day scroll buttons
//
// day builder
let SelectedDayBox = null;
for (let Day = 1; Day <= 31; Day++) {
  // crate html
  const DayBox = document.createElement("div");
  DayBox.setAttribute("class", "DayBox");
  const DayText = document.createElement("span");
  DayText.setAttribute("class", "DayText");
  // crate html
  //
  // fill html
  DayText.textContent = Day;
  DayBox.appendChild(DayText);
  DayBodyContiner.appendChild(DayBox);
  // fill html
  //
  // event listener
  DayBox.addEventListener("click", () => {
    let SelectedDay = DayBox.querySelector(".DayText").innerText;
    if (SelectedDayBox) {
      SelectedDayBox.classList.remove("selectedDay");
    }
    DayBox.classList.add("selectedDay");
    SelectedDayBox = DayBox;
    BdTitle[0] = SelectedDay;
  });
  // event listener
}
// day builder
//
// -------------- >> day Scripts
//
// -------------- >> month builder
//
// variable
const MonthBodyContiner = document.querySelector(".MonthBodyContiner");
const Bdmonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "ابان",
  "اذر",
  "دی",
  "بهمن",
  "اسفند",
];
// variable
//
// Month scroll buttons
const BdMonthUp = document.querySelector("#BdMonthUp");
const BdMonthDown = document.querySelector("#BdMonthDown");

BdMonthUp.addEventListener("click", () => {
  MonthBodyContiner.scrollBy({
    top: -60,
    behavior: "smooth",
  });
});

BdMonthDown.addEventListener("click", () => {
  MonthBodyContiner.scrollBy({
    top: 60,
    behavior: "smooth",
  });
});
// Month scroll buttons
//
// month builder
let SelectedMonthBox = null;
for (let Month = 0; Month < Bdmonths.length; Month++) {
  // crate html
  const MonthBox = document.createElement("div");
  MonthBox.setAttribute("class", "MonthBox");
  const MonthText = document.createElement("span");
  MonthText.setAttribute("class", "MonthText");
  // crate html
  //
  // fill html
  MonthText.textContent = Bdmonths[Month];
  MonthBox.appendChild(MonthText);
  MonthBodyContiner.appendChild(MonthBox);
  // fill html
  //
  // event listener
  MonthBox.addEventListener("click", () => {
    let SelectedMonth = MonthBox.querySelector(".MonthText").innerText;
    if (SelectedMonthBox) {
      SelectedMonthBox.classList.remove("selectedMonth");
    }
    MonthBox.classList.add("selectedMonth");
    SelectedMonthBox = MonthBox;
    BdTitle[1] = SelectedMonth;
  });
  // event listener
}
// month builder
//
// -------------- >> month builder
//
// -------------- >> year Script
//
// variables
const YearBodyContiner = document.querySelector(".YearBodyContiner");
// variables
//
// Year scroll buttons
const BdYearUp = document.querySelector("#BdYearUp");
const BdYearDown = document.querySelector("#BdYearDown");

BdYearUp.addEventListener("click", () => {
  YearBodyContiner.scrollBy({
    top: -60,
    behavior: "smooth",
  });
});

BdYearDown.addEventListener("click", () => {
  YearBodyContiner.scrollBy({
    top: 60,
    behavior: "smooth",
  });
});
// Year scroll buttons
//
// year builder
//
let SelectedYearBox = null;
for (let Year = 1325; Year <= 1402; Year++) {
  // crate html
  const YearBox = document.createElement("div");
  YearBox.setAttribute("class", "YearBox");
  const YearText = document.createElement("span");
  YearText.setAttribute("class", "YearText");
  // crate html
  //
  // fill html
  YearText.textContent = Year;
  YearBox.appendChild(YearText);
  YearBodyContiner.appendChild(YearBox);
  // fill html
  //
  // event listener
  YearBox.addEventListener("click", () => {
    let SelectedYear = YearBox.querySelector(".YearText").innerText;
    if (SelectedYearBox) {
      SelectedYearBox.classList.remove("selectedYear");
    }
    YearBox.classList.add("selectedYear");
    SelectedYearBox = YearBox;
    BdTitle[2] = SelectedYear;
  });
  // event listener
}
// -------------- >> year Script
//
// ----------------- >> Birthday Picker <<

// ----------------- >> radio value listener
const radioButtons = document.getElementsByName("MaritalStatus");
const MarideDatePicker = document.querySelector("#MarideDatePicker");

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("click", function () {
    var selectedGender = radioButton.value;
    if (selectedGender == "married") {
      MarideDatePicker.classList.add("remove");
    } else {
      MarideDatePicker.classList.remove("remove");
    }
  });
});
// ----------------- >> radio value listener

// ----------------- >> submit listener
const SubmitButton = document.querySelector(".SubmitButton");
SubmitButton.addEventListener("click", () => {
  SubmitButton.classList.add("onSubmit");
  setTimeout(() => {
    SubmitButton.classList.remove("onSubmit");
  }, 2000);
});

// ----------------- >> submit listener

// ------------------------------------------------ >> user Info Script <<

// ------------------------------------------------ >> Side Bar Event Listener <<

// wnidow on load \\
const sideBarBtn = document.querySelector(".SideBarButton");
function addClassList() {
  sideBarBtn.classList.add("startAnimate");
}

window.onload = addClassList;
// wnidow on load \\
//
// side Bar Listener \\
const SideBar = document.querySelector(".SideBar");
sideBarBtn.addEventListener("click", () => {
  sideBarBtn.classList.toggle("startAnimate");
  sideBarBtn.classList.toggle("onClick");
  SideBar.classList.toggle("openSideBar");
});
// side Bar Listener \\
//
// ------------------------------------------------ >> Side Bar Event Listener <<
