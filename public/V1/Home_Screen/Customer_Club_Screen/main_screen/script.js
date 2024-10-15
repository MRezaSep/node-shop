// ------------------------------------------------ >> window on load scripts <<
// const WelcomeContiner = document.querySelector(".WelcomeContiner");
// window.addEventListener("load", () => {

// });

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
const CookiePhoneNumber = getCookie("phoneNumber");

window.addEventListener("DOMContentLoaded", () => {
  const PhoneNumberFeild = document.querySelector("#PhoneNumber");
  PhoneNumberFeild.value = CookiePhoneNumber;
});
// ------------------------------------------------ >> window on load scripts <<

// ------------------------------------------------ >> Filds Values <<

// ------------------------------------------------ >> Filds Values <<

// ------------------------------------------------ >> user Info Script <<

// ----------------- >> Contact Way Selector
const ContactWays = document.querySelectorAll(".ContactWay");
const ContactWayTitleText = document.querySelector(".ContactWayTitleText");
const ContactWayContiner = document.querySelector(".ContactWayContiner");
const ContactWayTitle = document.querySelector(".ContactWayTitle");
const IsntagramFeild = document.querySelector("#IsntagramFeild");
ContactWayTitle.addEventListener("click", () => {
  ContactWayContiner.classList.toggle("onClick");
});

ContactWays.forEach((SelectedContactWay) => {
  SelectedContactWay.addEventListener("click", () => {
    let SelectedWay =
      SelectedContactWay.querySelector(".ContactWatText").innerText;
    const InstagramValue = "اینستاگرام";
    if (SelectedWay == InstagramValue) {
      ContactWayTitleText.innerText = SelectedWay;
      ContactWayContiner.classList.remove("onClick");
      IsntagramFeild.classList.add("AddInsta");
    } else if (SelectedWay !== InstagramValue) {
      ContactWayTitleText.innerText = SelectedWay;
      ContactWayContiner.classList.remove("onClick");
      IsntagramFeild.classList.remove("AddInsta");
    }
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
let MdMonthIndex = 0;

MdTitle = [SelectedMarridDay, SelectedMarridMonth, SelectedMarridYear];

MdDateString = `${MdTitle[2]}-${MdMonthIndex}-${MdTitle[0]}`;
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
  console.log(MdDateString);
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

    if (SelectedDay >= 9) {
    } else {
      MdTitle[0] = `0${SelectedDay}`;
    }
    MdDateString = `${MdTitle[2]}-${MdMonthIndex}-${MdTitle[0]}`;
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

    MdMonthIndex = `${Month}`;

    if (Month >= 9) {
      MdMonthIndex = `${Month + 1}`;
    } else {
      MdMonthIndex = `0${Month + 1}`;
    }
    MdDateString = `${MdTitle[2]}-${MdMonthIndex}-${MdTitle[0]}`;
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
    MdDateString = `${MdTitle[2]}-${MdMonthIndex}-${MdTitle[0]}`;
  });
  // event listener
}
// -------------- >> year Script

// ---------- >> marrid date builder

// ----------------- >> Marrid date Picker <<

// ----------------- >> Birthday Picker <<

// birthDay Picker listener

// 1325-01-08

// variable
const BdHeaderContiner = document.querySelector("#BdHeaderContiner");
const BdDatePickerContiner = document.querySelector("#BdDatePicker");
const BdSubmitButton = document.querySelector("#BdSubmitButton");
const BdHeaderText = document.querySelector("#BdHeaderText");

let SelectedBirthDay = 0;
let SelectedBirthMonth = "";
let SelectedBirthYear = 0;

let BdMonthIndex = 0;

BdTitle = [SelectedBirthDay, SelectedBirthMonth, SelectedBirthYear];

BdDateString = `${BdTitle[2]}-${BdMonthIndex}-${BdTitle[0]}`;
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
  console.log(BdDateString);
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

    if (SelectedDay >= 9) {
    } else {
      BdTitle[0] = `0${SelectedDay}`;
    }
    BdDateString = `${BdTitle[2]}-${BdMonthIndex}-${BdTitle[0]}`;
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

    BdMonthIndex = `${Month}`;

    if (Month >= 9) {
      BdMonthIndex = `${Month + 1}`;
    } else {
      BdMonthIndex = `0${Month + 1}`;
    }
    BdDateString = `${BdTitle[2]}-${BdMonthIndex}-${BdTitle[0]}`;
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
    BdDateString = `${BdTitle[2]}-${BdMonthIndex}-${BdTitle[0]}`;
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
const Layer2Continer = document.querySelector(".Layer2");
const SuccessSignUpContiner = document.querySelector(".SuccessSignUpContiner");
// ----------------- >> input Validator

// -------- > text validator <
function InputValidator(InputElement) {
  let InputValue = InputElement.value;
  let InputFeildContiner = InputElement.parentElement;
  let inputFatherContiner = InputFeildContiner.parentElement;
  let validationText = inputFatherContiner.lastElementChild;
  // Persian character range
  const persianPattern = /^[\u0600-\u06FF\s]+$/;
  // Persian character range
  if (InputValue === "") {
    InputFeildContiner.style.border = "2px solid rgba(220 ,0,0,1)";
    inputFatherContiner.classList.add("validationError");
    validationText.textContent = "مقدار نمیتواند خالی باشد";
  } else if (persianPattern.test(InputValue)) {
    InputFeildContiner.style.border = "2px solid #16FF00";
    inputFatherContiner.classList.remove("validationError");
  } else if (!persianPattern.test(InputValue)) {
    InputFeildContiner.style.border = "2px solid rgba(220 ,0,0,1)";
    inputFatherContiner.classList.add("validationError");
    validationText.textContent = "مقدار نمیتواند غیر از فارسی باشد";
  }
}

// -------- > text validator <

// -------- > Number validator <
function NumberValidator(InputElement) {
  let InputValue = InputElement.value;
  let InputFeildContiner = InputElement.parentElement;
  let inputFatherContiner = InputFeildContiner.parentElement;
  let validationText = inputFatherContiner.lastElementChild;
  // number carecter
  const numbersOnly = /^[0-9]+$/;
  // number carecter

  if (InputValue === "") {
    InputFeildContiner.style.border = "2px solid rgba(220 ,0,0,1)";
    inputFatherContiner.classList.add("validationError");
    validationText.textContent = "مقدار نمیتواند خالی باشد";
  } else if (numbersOnly.test(InputValue)) {
    InputFeildContiner.style.border = "2px solid #16FF00";
    inputFatherContiner.classList.remove("validationError");
  } else if (!numbersOnly.test(InputValue)) {
    InputFeildContiner.style.border = "2px solid rgba(220 ,0,0,1)";
    inputFatherContiner.classList.add("validationError");
    validationText.textContent = "مقدار نمیتواند غیر از عدد باشد";
  }
}
// -------- > Number validator <

// -------- > drop down validator <
function DropDownValidator(TitleClassName, TitleValue, isMarrid) {
  let DeafultTitleValue = TitleClassName.textContent;
  let TitleContiner = TitleClassName.parentElement;

  if (DeafultTitleValue !== TitleValue && isMarrid) {
    TitleContiner.style.border = "2px solid white";
  } else if (DeafultTitleValue === TitleValue) {
    TitleContiner.style.border = "2px solid rgba(220 ,0,0,1)";
  } else {
    TitleContiner.style.border = "2px solid white";
  }
}
// -------- > drop down validator <

// ----------------- >> input Validator

const SubmitButton = document.querySelector(".SubmitButton");
SubmitButton.addEventListener("click", () => {
  SubmitButton.classList.add("onSubmit");

  // simple validator
  InputValidator(document.querySelector("#FirstName"));
  InputValidator(document.querySelector("#LastName"));
  InputValidator(document.querySelector("#AddressText"));
  InputValidator(document.querySelector("#NationalCode"));
  InputValidator(document.querySelector("#Job"));

  DropDownValidator(
    document.querySelector(".ContactWayTitleText"),
    "انتخاب",
    false
  );
  DropDownValidator(document.querySelector("#BdHeaderText"), "انتخاب", false);
  // simple validator

  // Inputs Values
  let FirstNameValue = document.getElementById("FirstName").value;
  let LastNameValue = document.getElementById("LastName").value;
  let AddressValue = document.getElementById("AddressText").value;
  let NationalCodeValue = document.getElementById("NationalCode").value;
  let InstagramId = document.getElementById("InstagramFeild").value;
  let JobValue = document.getElementById("Job").value;
  let SelectedRadio = document.querySelector(
    'input[name="MaritalStatus"]:checked'
  ).value;

  let selectedValue = SelectedRadio === "married";
  let ContactWayText = document.querySelector(
    ".ContactWayTitleText"
  ).textContent;

  // Inputs Values

  fetch("https://banibon.ir/api/v1/auth/signup/club", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      first: FirstNameValue,
      last: LastNameValue,
      address: AddressValue,
      phoneNumber: CookiePhoneNumber,
      nationalCode: NationalCodeValue,
      job: JobValue,
      birthDate: BdDateString,
      marriageStatus: selectedValue,
      deleveryNewsWay: ContactWayText,
      marriageDayDate: MdDateString,
    }),
  })
    .then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        Layer2Continer.classList.add("oepnNotification");
        SuccessSignUpContiner.classList.add("pupUp");
      }
      //--------------------- >> on Server Error
      else if (response.status == 469) {
        SubmitButton.classList.remove("onSubmit");
        alert(
          "شما بیتشر از ۳۰ دقیقه در این بوده اید لطفا دوباره شروع به ثبت نام کنید"
        );
        throw new Error("cookie time has been ended");
      }
      //--------------------- >> on Server Error
      //--------------------- >> on empty Request
      else if (response.status == 470) {
        SubmitButton.classList.remove("onSubmit");
        // text feild validators
        InputValidator(document.querySelector("#FirstName"));
        InputValidator(document.querySelector("#LastName"));
        InputValidator(document.querySelector("#AddressText"));
        InputValidator(document.querySelector("#PhoneNumber"));
        InputValidator(document.querySelector("#NationalCode"));
        InputValidator(document.querySelector("#Job"));
        // text feild validators

        // drop down feild validators
        DropDownValidator(
          document.querySelector(".ContactWayTitleText"),
          "انتخاب",
          false
        );
        DropDownValidator(
          document.querySelector("#BdHeaderText"),
          "انتخاب",
          false
        );
        // DropDownValidator(
        //   document.querySelector("#MdHeaderText"),
        //   "انتخاب",
        //   true
        // );
        // drop down feild validators
        alert("همه ورودی ها باید کامل باشد ,لطفا بررسی کنید");
        throw new Error("Some Feilds Are Empty");
      }
      //--------------------- >> on empty Request

      //--------------------- >> on Server Error
      else if (response.status == 471) {
        SubmitButton.classList.remove("onSubmit");
        alert("! اطلاعات شما در سرور با موفقیت سیو نشد. لطفا دوباره تلاش کنید");
        throw new Error("Cant Update User In db");
      }
      //--------------------- >> on Server Error

      //--------------------- >> on Server Error
      else if (response.status == 472) {
        SubmitButton.classList.remove("onSubmit");
        alert("! اطلاعات شما در سرور با موفقیت سیو نشد. لطفا دوباره تلاش کنید");
        throw new Error("Cant Save User In db");
      }
      //--------------------- >> on Server Error

      //--------------------- >> on Other Error
      else {
        SubmitButton.classList.remove("onSubmit");
        alert("خطای ناشناخته");
        throw new Error("unknown Error");
      }
      //--------------------- >> on Other Error
    })
    .catch((error) => {
      console.error("lolos:", error);
    });
});

// ----------------- >> submit listener

// ----------------- >> nitification listener
const SubmitSignUpButton = document.querySelector(".SubmitSignUpButton");

SubmitSignUpButton.addEventListener("click", () => {
  window.location.assign("./../../../home_screen/index.html");
});

// ----------------- >> nitification listener

// ------------------------------------------------ >> user Info Script <<
