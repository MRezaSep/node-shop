// import from packages
const momentJalaali = require("moment-jalaali");

// Convert Persian date string to date object
const convertToDate = (persianDateString) => {
  const persianDateMoment = momentJalaali(persianDateString, "jYYYY-jMM-jDD");
  const timestamp = persianDateMoment.toDate();
  return timestamp;
};

// Reverse to Persian date string
const reversToPersianDate = (timestamp) => {
  const persianDateMoment = momentJalaali(timestamp);
  const persianYear = persianDateMoment.jYear();
  const persianMonth = persianDateMoment.jMonth() + 1;
  const persianDay = persianDateMoment.jDate();

  const reversedPersianDateString = `${persianYear}-${persianMonth
    .toString()
    .padStart(2, "0")}-${persianDay.toString().padStart(2, "0")}`;
  return reversedPersianDateString;
};

// export
module.exports = { convertToDate, reversToPersianDate };
