const BaseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCountry = document.querySelector(".from select");
const toCountry = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let dropdown of dropdowns) {
  for (CCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = CCode;
    newOption.value = CCode;
    if (dropdown.name === "from" && CCode === "USD") {
      newOption.selected = "selected";
    } 
    else if (dropdown.name === "to" && CCode === "INR") {
      newOption.selected = "selected";
    }
    dropdown.append(newOption);
  }

  dropdown.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};


const GetRates = async () => {
  let amount = document.querySelector(".amount input");
  let enteredAmount= amount.value;
  if (enteredAmount === "" || enteredAmount < 1) {
    enteredAmount = 1;
    enteredAmount.value = "1";
  }
  const URL = `${BaseURL}/${fromCountry.value.toLowerCase()}/${toCountry.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCountry.value.toLowerCase()];

  let ansAmount = enteredAmount * rate;
  msg.innerText = `${enteredAmount} ${fromCountry.value} = ${ansAmount} ${toCountry.value}`;
};


btn.addEventListener("click", (e) => {
  e.preventDefault();
  GetRates();
});

