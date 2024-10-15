// ------------------------------------------------------- >> variabels <<
const mainContiner = document.querySelector(".mainContiner");
const content = document.querySelector(".content");
const buttonContiner = document.querySelector(".buttonContiner");
let submit = document.querySelector(".submitButton");
let cansel = document.querySelector(".canselButton");
let mainText = document.querySelector(".mainText");
const backtohome = document.querySelector(".BackToHome");
// ------------------------------------------------------- >> variabels <<
//
// ------------------------------------------------------- >> on submit <<
submit.addEventListener("click", () => {
  mainContiner.classList.add("rise");
  buttonContiner.classList.add("onsubmit");
  content.classList.add("flexDisplay");
  mainText.textContent = "شماره همراه خود را وارد کنید";
});

// ------------------------------------------------------- >> on submit <<
//
// ------------------------------------------------------- >> on cansel <<
cansel.addEventListener("click", () => {
  window.open("../../home_screen/index.html");
});
// ------------------------------------------------------- >> on cansel <<
//
// ------------------------------------------------------- >> phone validator <<
const phoneInput = document.querySelector(".phoneContainer");
const phonesubmit = document.querySelector(".phoneSubmitButton");
const phoneError = document.querySelector(".phoneError");
const phoneBox = document.querySelector(".phoneBox");
const otpContainer = document.querySelector(".optContainer");

function setCookie(name, value, expirationMinutes) {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + expirationMinutes * 60 * 1000
  );

  const cookieValue =
    encodeURIComponent(value) +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/";

  document.cookie = name + "=" + cookieValue;
}

phonesubmit.addEventListener("click", phoneValidator);
let PhoneNumberValue = '';
function phoneValidator() {
  phonesubmit.classList.add("loading");
  const phonevalue = phoneInput.value.trim();
  const fullPhoneValue = `+98${phonevalue}`;
  
  const persianNumberPattern = /^[\u0660-\u0669\u06F0-\u06F9]+$/;

  if (persianNumberPattern.test(phonevalue)) {
    mainContiner.classList.add("incorrect");
    phoneError.classList.add("onError");
    phonesubmit.classList.remove("loading");
    phoneError.innerHTML = "شماره باید به حروف لاتین باشد";
  } else {
    // on validate
    fetch("https://banibon.ir/api/v1/auth/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        phoneNumber: fullPhoneValue,
        club: true,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          mainContiner.classList.add("verified");
          phonesubmit.classList.remove("loading");
          mainContiner.classList.remove("incorrect");
          phoneError.classList.remove("onError");
          phonesubmit.style.display = "none";
          phoneBox.classList.add("removeDisplay");
          otpContainer.classList.add("addDisplay");
          mainText.textContent = "کد ارسال شده را وارد کنید";
          mainContiner.classList.add("otp");
          setCookie("phoneNumber", fullPhoneValue, 30);
         PhoneNumberValue = fullPhoneValue;
          setTimeout(() => {
            mainContiner.classList.remove("verified");
          }, 1000);
        } else if (response.status == 400) {
          mainContiner.classList.add("incorrect");
          phoneError.classList.add("onError");
          phonesubmit.classList.remove("loading");
          phoneError.innerHTML = "شماره وارد شده را بررسی کنید";
          throw new Error();
        } else if (response.status == 401) {
          mainContiner.classList.add("incorrect");
          phoneError.classList.add("onError");
          phonesubmit.classList.remove("loading");
          phoneError.innerHTML = "شما قبلا در باشگاه مشتریان ثبت نام کرده‌اید";
          throw new Error();
        } else {
          mainContiner.classList.add("incorrect");
          phoneError.classList.add("onError");
          phonesubmit.classList.remove("loading");
          phoneError.innerHTML =
            "خطا در برقراری ارتباط با سرور لطفا بعدا تلاش کنید";
          throw new Error();
        }
      })
      // on error
      .catch((error) => {
        console.error("lolos:", error);
      });
    // on error
  }
}

// ------------------------------------------------------- >> phone validator <<
//
// ------------------------------------------------------- >> otp validator <<
const inputs = document.querySelectorAll(".optContainer input");

inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("paste", handleOtpPaste);
  input.addEventListener("keyup", handleOtp);
});

function handleOtpPaste(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length === inputs.length) {
    inputs.forEach((input, index) => (input.value = value[index]));
    otpSubmit();
  }
}

function handleOtp(e) {
  let input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let feildIndex = input.dataset.index;
  if (value.length > 0 && feildIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }
  if (e.key === "Backspace" && feildIndex > 0) {
    input.previousElementSibling.focus();
  }
  if (feildIndex == inputs.length - 1) {
    otpSubmit();
  }
}

function otpSubmit() {
  let otp = "";

  inputs.forEach((inputValue) => {
    otp += inputValue.value;
  });

  fetch("https://banibon.ir/api/v1/auth/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      phoneNumber: PhoneNumberValue,
      code: parseInt(otp),
      club: true,
    }),
  })
    .then((response) => {
      if (response.status == 200) {
        window.location.assign("./../main_screen/index.html");
      }
      else if (response.status == 470) {
        mainContiner.classList.add("incorrect");
        phoneError.classList.add("onError");
        phonesubmit.classList.remove("loading");
        phoneError.innerHTML = "خطا در فرستادن اطلاعات به سرور";
        throw new Error("cant send params in body");
      } 
      else if (response.status == 471) {
        mainContiner.classList.add("incorrect");
        phoneError.classList.add("onError");
        phonesubmit.classList.remove("loading");
        phoneError.innerHTML = "برای این شماره تلفن کدی ارسال نشده است";
        throw new Error("phone number error");
      } else if (response.status == 472) {
        mainContiner.classList.add("incorrect");
        phoneError.classList.add("onError");
        phonesubmit.classList.remove("loading");
        phoneError.innerHTML = "کد منقضی شده است";
        throw new Error("code error");
      } else if (response.status == 473) {
        mainContiner.classList.add("incorrect");
        phoneError.classList.add("onError");
        phonesubmit.classList.remove("loading");
        phoneError.innerHTML = "کد اشتباه است";
        throw new Error("wrong code");
      } else {
        mainContiner.classList.add("incorrect");
        phoneError.classList.add("onError");
        phonesubmit.classList.remove("loading");
        phoneError.innerHTML = "خطای ناشناخته";
        throw new Error("wrong code");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
// ------------------------------------------------------- >> otp validator <<
