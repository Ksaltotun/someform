const topMenuBox = document.createElement("div");
const titleBox = document.createElement("div");
const title = document.createElement("div");
const mainMenuButtonBox = document.createElement("div");
const footerBox = document.createElement("div");
const footerMenuBox = document.createElement("div");
const contentFrame = document.createElement("div");
const h1 = document.createElement("h1");
const chatBox = document.createElement("div");
const madeIn = document.createElement("div");
const mainMenuText = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4", "Пункт 5"];
const footerText = [
  "\u00A9 2016 Городской сайт",
  "Пользовательское соглашение",
  "Инструкции",
  "Рекламодателям"
];
const formFieldQuant = 13;
const mainMenu = [];
const footerMenu = [];
const contentBox = [];
const quantButtonsFooter = footerText.length;
const quantButtonsTop = mainMenuText.length;
const boxForTypeForm = document.createElement("div");
const boxTitleForm = document.createElement("div");
const formTitle = document.createElement("div");
const h3 = document.createElement("h3");
const formButtons = document.createElement("div");
const personalDate = document.createElement("div");
const creditCartDate = document.createElement("div");
const result = document.createElement("div");
const addClass = (element, classes) => {
  let len = element.length;
  if (len) {
    for (let i = 0; i < len; i++) {
      element[i].classList.add(classes);
    }
  } else element.classList.add(classes);
};
/* chat consts */
const chatBoxHead = document.createElement("div");
const supportImg = document.createElement("div");
const supportDescription = document.createElement("div");
const greenPoint = document.createElement("div");
const chatBoxMessageFieldBox = document.createElement("div");
const chatBoxMessageField = document.createElement("div");
const chatBoxFooter = document.createElement("div");
const inputMessage = document.createElement("textarea");
const messageSubmit = document.createElement("div");
const annasMessageBox = document.createElement("div");
const annasMessagePic = document.createElement("div");
const annasMessageText = document.createElement("div");
const usersMessageBox = document.createElement("div");
const usersMessageText = document.createElement("div");

/*personaldate*/
const personalDateContentBox = document.createElement("div");
const personalDateContentTitle = document.createElement("div");
const personalDateContentForm = document.createElement("form");
const userNameBox = document.createElement("div");
const userNameDescr = document.createElement("label");
const userNameInput = document.createElement("input");

const userSurnameBox = document.createElement("div");
const userSurnameDescr = document.createElement("label");
const userSurnameInput = document.createElement("input");

const userFatherBox = document.createElement("div");
const userFatherDescr = document.createElement("label");
const userFatherInput = document.createElement("input");

const userBirthdayBox = document.createElement("div");
const userBirthdayDescr = document.createElement("label");
const userBirthdayInput = document.createElement("input");
const userBirthdayCalendar = document.createElement("div");

const userGenderBox = document.createElement("div");
const userGenderDescr = document.createElement("label");
const userGenderInput = document.createElement("form");
const userGenderInputMale = document.createElement("input");
const userGenderInputFemale = document.createElement("input");

const userCountryBox = document.createElement("div");
const userCountryDescr = document.createElement("label");
const userCountryInput = document.createElement("form");
const userCountryInputField = document.createElement("input");
const userCountryInputDatalist = document.createElement("datalist");

const userAdressBox = document.createElement("div");
const userAdressyDescr = document.createElement("label");
const userAdressInput = document.createElement("input");
const userAdressLink = document.createElement("div");

const userMotherBox = document.createElement("div");
const userMotherDescr = document.createElement("label");
const userMotherInput = document.createElement("input");

const userBankBox = document.createElement("div");
const userBankDescr = document.createElement("label");
const userBankInput = document.createElement("input");

const userSourceBox = document.createElement("div");
const userSourceDescr = document.createElement("label");
const userSourceInput = document.createElement("textarea");
const userSourceSoluthion = document.createElement("label");

const userFriendBox = document.createElement("div");
const userFriendDescr = document.createElement("label");
const userFriendInput = document.createElement("input");

const userTelBox = document.createElement("div");
const userTelDescr = document.createElement("label");
const userTelInput = document.createElement("input");
const userTelSoluthion = document.createElement("label");

const userFootballBox = document.createElement("div");
const userFootballDescr = document.createElement("label");
const userFootballInput = document.createElement("form");
const userFootballInputField = document.createElement("input");
const userFootballInputDatalist = document.createElement("datalist");
const alertMesage = document.createElement("span");
let formFields = personalDateContentForm.childNodes;

/*credit card consts */
const creditCardContentBox = document.createElement("div");
const creditCardContentTitle = document.createElement("div");
const creditCardContentForm = document.createElement("form");

const cardNumberBox = document.createElement("div");
const cardNumberDescr = document.createElement("label");
const cardNumberInput = document.createElement("input");

const monthYearBox = document.createElement("div");
const monthYearDescr = document.createElement("label");
const monthYearInput = document.createElement("input");

const codeBox = document.createElement("div");
const codeDescr = document.createElement("label");
const codeInput = document.createElement("input");
const codeSolution = document.createElement("div");

const cardTypeBox = document.createElement("div");
const cardTypeDescr = document.createElement("label");
const cardTypeInput = document.createElement("form");
const cardTypeDebet = document.createElement("input");
const cardTypeCredit = document.createElement("input");

const boxForForm = document.createElement("div");
const boxControllForm = document.createElement("div");
/*result form */

const resultContentBox = document.createElement("div");
const resultContentTitle = document.createElement("div");
const resultContentForm = document.createElement("div");
const resultContentCard = document.createElement("div");
const resultDopInfoBox = document.createElement("div");
const resultCreditBox = document.createElement("div");
const resultTableBox = document.createElement("div");
/*********************************** */

const nextButonForm = document.createElement("div");
const prevButtonForm = document.createElement("div");
const backArrow = document.createElement("div");
const textBack = document.createElement("div");
const resultTable = document.createElement('table');
const resultHead = ['Имя', 'Фамилия', 'Отчество', 'Дата рождения', 'Пол', 'Страна', 'Инфо'];
/*For choise box*/
const boxForChoise = document.createElement("div");
let regNumber = /[0-9]/;
let regDate = /^[0-9-/]*$/;
let stateTab = 0;
let resultData = [];
function makeTable(arr) {
  for (let i = 0; i < 2; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
          if (i === 0) {
              let cell = document.createElement('th');
              cell.innerText = resultHead[j];
              row.appendChild(cell);
          }
          if (i === 1) {
              if (j < 6) {
                  let cell = document.createElement('td');
                  cell.innerText = arr[j];
                  row.appendChild(cell);
              } else {
                  let cell = document.createElement('td');
                  cell.innerText = 'Доп. инфо';
                  row.appendChild(cell);
              }
          }
      }
      resultTable.appendChild(row);
  }
}

for (let i = 0; i < 4; i++) {
  let buff = document.createElement("div");
  buff.classList.add("wrapChoise" + i);
  if (i === 0) buff.innerText = "Выберите способ регистрации:";
  if (i === 1) {
    let form = document.createElement("form");
    form.classList.add("choiseForm");
    let radio0 = document.createElement("input");
    let radio0Lable = document.createElement("label");
    let radio1Lable = document.createElement("label");
    Object.assign(radio0Lable, {
      for: "userChoise",
      innerHTML: "Персональная <br/>"
    });
    Object.assign(radio0, {
      type: "radio",
      name: "userChoise",
      value: "person",
      checked: true
    });
    let radio1 = document.createElement("input");
    Object.assign(radio1Lable, {
      for: "userChoise",
      innerText: "Регистрация пользователей списком"
    });
    Object.assign(radio1, { type: "radio", name: "userChoise", value: "mass" });
    form.appendChild(radio0);
    form.appendChild(radio0Lable);
    form.appendChild(radio1);
    form.appendChild(radio1Lable);
    buff.appendChild(form);
  }
  if (i === 2) {
    let listBox = document.createElement("div");
    listBox.classList.add("listBox");
    let listTitle = document.createElement("div");
    listTitle.classList.add("listTitle");
    listTitle.innerText = "Загрузить список";
    let list = document.createElement("div");
    list.innerText = "People-list.csv";
    list.classList.add("list");
    listBox.appendChild(listTitle);
    listBox.appendChild(list);
    buff.appendChild(listBox);
  }
  if (i === 3) {
    let nextButon = document.createElement("div");
    nextButon.classList.add("nextButton");
    nextButon.innerText = "Далее";
    buff.appendChild(nextButon);
  }
  boxForChoise.appendChild(buff);
}

let nextButton = document.querySelector(".nextButton");

function clickNext(event) {
  if (event.target.classList.contains("nextButton")) {
    let form = document.querySelectorAll('[name = "userChoise"]');
    if (form[0].checked) {
      boxForChoise.style.display = "none";
      chatBox.style.display = "block";
      boxForTypeForm.style.display = "block";
    } else {
      console.log("mass");
    }
  }
}

document.body.addEventListener("click", clickNext);

/*box for typical form */

boxForTypeForm.classList.add("boxForTypeForm");
boxTitleForm.classList.add("boxTitleForm");
boxControllForm.classList.add("boxControllForm");
boxForForm.classList.add("boxForForm");
formTitle.classList.add("formTitle");
formButtons.classList.add("formButtons");
personalDate.classList.add("personalDate");
personalDate.innerText = "Личные данные";
creditCartDate.classList.add("creditCartDate");
creditCartDate.innerText = "Данные кредитной карты";
result.classList.add("result");
result.innerText = "Результат";
h3.innerText = "Типовая форма";
formTitle.appendChild(h3);
boxTitleForm.appendChild(formTitle);
boxTitleForm.appendChild(formButtons);
formButtons.appendChild(personalDate);
formButtons.appendChild(creditCartDate);
formButtons.appendChild(result);

boxForTypeForm.appendChild(boxTitleForm);
boxForTypeForm.appendChild(boxForForm);
boxForTypeForm.appendChild(boxControllForm);
/* credit cart */
creditCardContentBox.classList.add("creditCardContentBox");
creditCardContentTitle.classList.add("creditCardContentTitle");
creditCardContentForm.classList.add("creditCardContentForm");
creditCardContentTitle.innerText = "Все поля формы обязательны для заполнения";

cardNumberBox.classList.add("cardNumberBox");
cardNumberDescr.classList.add("cardNumberDescr");
cardNumberDescr.classList.add("cardDescr");
cardNumberInput.classList.add("cardNumberInput");
cardNumberDescr.innerText = "Номер карты:";
cardNumberBox.appendChild(cardNumberDescr);
cardNumberBox.appendChild(cardNumberInput);
creditCardContentForm.appendChild(cardNumberBox);

monthYearBox.classList.add("monthYearBox");
monthYearDescr.classList.add("monthYearDesc");
monthYearDescr.classList.add("cardDescr");
monthYearInput.classList.add("monthYearInput");
monthYearDescr.innerText = "Месяц/год:";
monthYearBox.appendChild(monthYearDescr);
monthYearBox.appendChild(monthYearInput);
creditCardContentForm.appendChild(monthYearBox);

codeBox.classList.add("codeBox");
codeDescr.classList.add("codeDescr");
codeDescr.classList.add("cardDescr");
codeInput.classList.add("codeInput");
codeInput.type = 'password';
codeInput.value = '';
codeSolution.classList.add("codeSolution");
codeDescr.innerText = "CVC2 или CVV2:";
codeSolution.innerText = "3 цифры";
codeBox.appendChild(codeDescr);
codeBox.appendChild(codeInput);
codeBox.appendChild(codeSolution);
creditCardContentForm.appendChild(codeBox);

cardTypeBox.classList.add("cardTypeBox");
cardTypeDescr.classList.add("cardTypeDescr");
cardTypeDescr.classList.add("cardDescr");
cardTypeInput.classList.add("cardTypeInput");
cardTypeDebet.classList.add("cardTypeDebet");
cardTypeDebet.style.width = '20px';
cardTypeCredit.style.width = '20px';
cardTypeCredit.classList.add("cardTypeCredit");


cardTypeDescr.innerText = "Тип карты:";
Object.assign(cardTypeDebet, {
  type: "radio",
  name: "cardType",
  value: "debet",
  checked: true
});
Object.assign(cardTypeCredit, {
  type: "radio",
  name: "cardType",
  value: "credit"
});
cardTypeInput.appendChild(cardTypeDebet);
cardTypeInput.appendChild(document.createTextNode("Дебетная"));
cardTypeInput.appendChild(cardTypeCredit);
cardTypeInput.appendChild(document.createTextNode("Кредитная"));
cardTypeBox.appendChild(cardTypeDescr);
cardTypeBox.appendChild(cardTypeInput);
creditCardContentForm.appendChild(cardTypeBox);
let cardFields = creditCardContentForm.children;
addClass(cardFields, "formfields");

creditCardContentBox.appendChild(creditCardContentTitle);
creditCardContentBox.appendChild(creditCardContentForm);

/*chat */

chatBoxHead.classList.add("chatBoxHead");
supportImg.classList.add("supportImg");
supportDescription.classList.add("supportDescription");
supportDescription.innerText = "Анна в чате";
greenPoint.classList.add("greenPoint");
chatBoxMessageFieldBox.classList.add("chatBoxMessageFieldBox");
chatBoxMessageField.classList.add("chatBoxMessageField");
chatBoxFooter.classList.add("chatBoxFooter");
inputMessage.classList.add("inputMessage");
inputMessage.placeholder = "Ваше сообщение ...";
messageSubmit.classList.add("messageSubmit");
annasMessageBox.classList.add("annasMessageBox");
annasMessagePic.classList.add("annasMessagePic");
annasMessageText.classList.add("annasMessageText");
annasMessageText.innerText =
  "Здравствуйте! Пишите мне, если у вас возникнут вопросы по работе сайта";
annasMessageBox.appendChild(annasMessagePic);
annasMessageBox.appendChild(annasMessageText);
chatBoxHead.appendChild(supportImg);
chatBoxHead.appendChild(supportDescription);
chatBoxHead.appendChild(greenPoint);
chatBoxFooter.appendChild(inputMessage);
chatBoxFooter.appendChild(messageSubmit);
chatBox.appendChild(chatBoxHead);
chatBoxMessageFieldBox.appendChild(chatBoxMessageField);
chatBox.appendChild(chatBoxMessageFieldBox);
chatBox.appendChild(chatBoxFooter);
usersMessageBox.classList.add("usersMessageBox");
usersMessageText.classList.add("usersMessageText");
usersMessageBox.appendChild(usersMessageText);

setTimeout(() => chatBoxMessageField.appendChild(annasMessageBox), 5000);
function chattedClick() {
  let messageBox = document.createElement("div"),
    messageText = document.createElement("div"),
    suppMessageBox = document.createElement("div"),
    suppMessagePic = document.createElement("div"),
    suppMessageText = document.createElement("div");
  suppMessageBox.classList.add("annasMessageBox");
  suppMessagePic.classList.add("annasMessagePic");
  suppMessageText.classList.add("annasMessageText");
  suppMessageBox.appendChild(suppMessagePic);
  suppMessageBox.appendChild(suppMessageText);
  suppMessageText.innerText = annasMessageText.innerText;
  messageBox.classList.add("usersMessageBox");
  messageText.classList.add("usersMessageText");
  messageBox.appendChild(messageText);
  if (inputMessage.value.length) {
    messageText.innerText = inputMessage.value;
    chatBoxMessageField.append(messageBox);
    inputMessage.value = "";
    setTimeout(() => chatBoxMessageField.appendChild(suppMessageBox), 1000);
  }
  console.log(inputMessage.value);
}
messageSubmit.addEventListener("click", chattedClick);

/** personal data */
alertMesage.classList.add("alertMesage");
alertMesage.innerText = "Это поле заполнено неправильно!";
personalDateContentBox.classList.add("personalDateContentBox");
personalDateContentTitle.classList.add("personalDateContentTitle");
personalDateContentForm.classList.add("personalDateContentForm");
personalDateContentBox.appendChild(personalDateContentTitle);
personalDateContentBox.appendChild(personalDateContentForm);
boxForForm.appendChild(personalDateContentBox);
boxForForm.appendChild(creditCardContentBox);
personalDateContentTitle.innerText =
  "Все поля формы обязательны для заполнения";

userNameDescr.classList.add("userNameDescr");
userNameBox.classList.add("userNameBox");
userNameInput.classList.add("userNameInput");

userSurnameBox.classList.add("userSurnameBox");
userSurnameDescr.classList.add("userSurnameDescr");
userSurnameInput.classList.add("userSurnameInput");

userFatherBox.classList.add("userFatherBox");
userFatherDescr.classList.add("userFatherDescr");
userFatherInput.classList.add("userFatherInput");

userBirthdayBox.classList.add("userBirthdayBox");
userBirthdayDescr.classList.add("userBirthdayDescr");
userBirthdayInput.classList.add("userBirthdayInput");
userBirthdayCalendar.classList.add("userBirthdayCalendar");

userGenderBox.classList.add("userGenderBox");
userGenderDescr.classList.add("userGenderDescr");
userGenderInput.classList.add("userGenderInput");
userGenderInputMale.classList.add("userGenderInputMale");
userGenderInputFemale.classList.add("userGenderInputFemale");

userCountryBox.classList.add("userCountryBox");
userCountryDescr.classList.add("userCountryDescr");
userCountryInput.classList.add("userCountryInput");
userCountryInputField.classList.add("userCountryInputField");
userCountryInputDatalist.classList.add("userCountryInputDatalist");

userAdressBox.classList.add("userAdressBox");
userAdressyDescr.classList.add("userAdressyDescr");
userAdressInput.classList.add("userAdressInput");
userAdressLink.classList.add("userAdressLink");

userMotherBox.classList.add("userMotherBox");
userMotherDescr.classList.add("userMotherDescr");
userMotherInput.classList.add("userMotherInput");

userBankBox.classList.add("userBankBox");
userBankDescr.classList.add("userBankDescr");
userBankInput.classList.add("userBankInput");

userSourceBox.classList.add("userSourceBox");
userSourceDescr.classList.add("userSourceDescr");
userSourceInput.classList.add("userSourceInput");
userSourceSoluthion.classList.add("userSourceSoluthion");

userFriendBox.classList.add("userFriendBox");
userFriendDescr.classList.add("userFriendDescr");
userFriendInput.classList.add("userFriendInput");

userTelBox.classList.add("userTelBox");
userTelDescr.classList.add("userTelDescr");
userTelInput.classList.add("userTelInput");
userTelSoluthion.classList.add("userTelSoluthion");

userFootballBox.classList.add("userFootballBox");
userFootballDescr.classList.add("userFootballDescr");
userFootballInput.classList.add("userFootballInput");
userFootballInputField.classList.add("userFootballInputField");
userFootballInputDatalist.classList.add("userFootballInputDatalist");
/*------------------ */
userNameDescr.innerText = "Имя:";
userNameBox.appendChild(userNameDescr);
userNameBox.appendChild(userNameInput);

userSurnameBox.appendChild(userSurnameDescr);
userSurnameDescr.innerText = "Фамилия:";
userSurnameBox.appendChild(userSurnameInput);

userFatherBox.appendChild(userFatherDescr);
userFatherBox.appendChild(userFatherInput);
userFatherDescr.innerText = "Отчество:";

userBirthdayBox.appendChild(userBirthdayDescr);
userBirthdayBox.appendChild(userBirthdayInput);
userBirthdayBox.appendChild(userBirthdayCalendar);
userBirthdayDescr.innerText = "Дата рождения:";
userBirthdayInput.type = "date";

userGenderBox.appendChild(userGenderDescr);
userGenderBox.appendChild(userGenderInput);
userGenderInput.appendChild(userGenderInputMale);
userGenderInput.appendChild(document.createTextNode("Мужской"));
userGenderInput.appendChild(userGenderInputFemale);
userGenderInput.appendChild(document.createTextNode("Женский"));
userGenderInputFemale.innerText = "Женский";
userGenderInputMale.innerText = "Мужской";
Object.assign(userGenderInputMale, {
  type: "radio",
  name: "sex",
  value: "Мужской",
  checked: true
});
Object.assign(userGenderInputFemale, {
  type: "radio",
  name: "sex",
  value: "Женский"
});
userGenderDescr.innerText = "Пол:";
userCountryBox.appendChild(userCountryDescr);
userCountryBox.appendChild(userCountryInput);
userCountryDescr.innerText = "Страна проживания:";
userCountryInput.appendChild(userCountryInputField);
userCountryInput.appendChild(userCountryInputDatalist);
userCountryInputField.setAttribute("list", "Countryes");
userCountryInputDatalist.id = "Countryes";
let countryes = ["Беларусь", "Казахстан", "Россия", "Украина"];
for (let i = 0; i < 4; i++) {
  let country = document.createElement("option");
  country.innerText = countryes[i];
  userCountryInputDatalist.appendChild(country);
}
userGenderInputFemale.style.width = "50px";
userGenderInputMale.style.width = "50px";
userAdressBox.appendChild(userAdressyDescr);
userAdressBox.appendChild(userAdressInput);
userAdressBox.appendChild(userAdressLink);
userAdressLink.innerHTML =
  '<a href="https://www.b2b.by/info/post_indexes.html">Узнать индекс</a>';
userAdressyDescr.innerText = "Адрес, почтовый индекс:";

userMotherBox.appendChild(userMotherDescr);
userMotherBox.appendChild(userMotherInput);
userMotherDescr.innerText = "Девичья фамилия матери:";

userBankBox.appendChild(userBankDescr);
userBankBox.appendChild(userBankInput);
userBankDescr.innerText = "Кодовое слово в вашем банке:";

userSourceBox.appendChild(userSourceDescr);
userSourceBox.appendChild(userSourceInput);
userSourceBox.appendChild(userSourceSoluthion);
userSourceDescr.innerText = "Как вы узнали о нашем сайте:";
userSourceSoluthion.innerText = "Из газет, телевидения, радио или проч.";

userFriendBox.appendChild(userFriendDescr);
userFriendBox.appendChild(userFriendInput);
userFriendDescr.innerText = "Email друга:";
userTelBox.appendChild(userTelDescr);
userTelInput.style.paddingLeft = "25px";
userTelInput.style.width = "225px";
userTelBox.appendChild(userTelInput);
userTelDescr.innerText = "Телефон вашей девушки:";

userFootballBox.appendChild(userFootballDescr);
userFootballBox.appendChild(userFootballInput);
userFootballDescr.innerText = "Ваша любимая футбольная команда:";

userFootballInput.appendChild(userFootballInputField);
userFootballInput.appendChild(userFootballInputDatalist);

userFootballInputField.setAttribute("list", "Teams");
userFootballInputDatalist.id = "Teams";
let teams = ["Спартак", "Зенит", "ФК Гомель", "Динамо"];
let pans = ["Rondell", "Tefal", "Neva", "Berghoff"];
function setPreset(arr) {
  userFootballInputDatalist.innerText = "";
  for (let i = 0; i < 4; i++) {
    let team = document.createElement("option");
    team.innerText = arr[i];
    userFootballInputDatalist.appendChild(team);
  }
}
setPreset(teams);

/******************************* */

personalDateContentForm.appendChild(userNameBox);
personalDateContentForm.appendChild(userSurnameBox);
personalDateContentForm.appendChild(userFatherBox);
personalDateContentForm.appendChild(userBirthdayBox);
personalDateContentForm.appendChild(userGenderBox);
personalDateContentForm.appendChild(userCountryBox);
personalDateContentForm.appendChild(userAdressBox);
personalDateContentForm.appendChild(userMotherBox);
personalDateContentForm.appendChild(userBankBox);
personalDateContentForm.appendChild(userSourceBox);
personalDateContentForm.appendChild(userFriendBox);
personalDateContentForm.appendChild(userTelBox);
personalDateContentForm.appendChild(userFootballBox);
addClass(formFields, "formfields");
for (let i = 0, len = formFields.length; i < len; i++) {
  addClass(formFields[i].firstChild, "descriptionFields");
}
let userData = [];
let creditCard = [];
function makeArray() {
  userData = [];
  for (let i in formFields) {
    if (!isNaN(i) && formFields[i].classList) {
      if (formFields[i].classList.contains("userGenderBox")) {
        if (formFields[i].childNodes[1].childNodes[0].checked) {
          userData.push("Мужской");
        } else {
          userData.push("Женский");
        }
      }
      if (formFields[i].classList.contains("userCountryBox")) {
        userData.push(formFields[i].childNodes[1].childNodes[0].value);
      }
      if (formFields[i].classList.contains("userFootballBox")) {
        userData.push(formFields[i].childNodes[1].childNodes[0].value);
      }
      if (formFields[i].childNodes[1] != undefined) {
        if (formFields[i].childNodes[1].value != undefined) {
          userData.push(formFields[i].childNodes[1].value);
        }
      }
    }
  }
 
}

function cardDate() {
  creditCard[0] = cardNumberInput.value;
  creditCard[1] = monthYearInput.value;
  creditCard[2] = codeInput.value;
  if (cardTypeDebet.checked) { creditCard[3] = 'debet' }
  else { creditCard[3] = 'credit' }
  
}
cardDate();

function changeSex() {
  if (formFields[4].childNodes[1].childNodes[0].checked) {
    userTelDescr.innerText = "Телефон вашей девушки:";
    userFootballDescr.innerText = "Ваша любимая футбольная команда:";
    setPreset(teams);
  } else {
    userTelDescr.innerText = "Телефон вашего парня:";
    userFootballDescr.innerText = "Какую сковороду предпочитаете:";
    setPreset(pans);
  }
}

formFields[4].childNodes[1].addEventListener("change", changeSex);


function isTelBel(event) {

  if ((userTelInput.value.slice(0, 4) == "+375") && regNumber.test(userTelInput.value.slice(1, userTelInput.value.length))) {

    userTelInput.style.borderColor = "#a7a7a7";
    alertMesage.remove;
    userTelInput.style.backgroundImage = "url(./images/bel-flag.png)";
    return 'bel';
  } else if ((userTelInput.value.slice(0, 1) == "+") && regNumber.test(userTelInput.value.slice(1, userTelInput.value.length))) {
    userTelInput.style.borderColor = "#a7a7a7";
    alertMesage.remove;
    userTelInput.style.backgroundImage = "url(./images/world-flag.png)";
    return 'import';
  }
  userTelInput.style.borderColor = "red";
  return false;
}
let counter = 0;
function isCardTrue(arr) {
  
  cardDate();
  if ((arr[0].length != 16)) {
    if (counter > 0) {
      cardNumberInput.style.borderColor = 'red';
     creditCardContentForm.insertBefore(alertMesage, cardNumberBox);
    }
    if (stateTab === 1) {
      counter += 1;
    }
    
    return false;
  } else {
    if (creditCardContentForm.hasChildNodes(alertMesage)) {
      alertMesage.remove();
    }
    cardNumberInput.style.borderColor = '#a7a7a7';
  }
  if (!arr[1] || !regDate.test(arr[1])) {
    monthYearInput.style.borderColor = 'red';
    creditCardContentForm.insertBefore(alertMesage, monthYearBox);
    return false;
  } else {
    if (creditCardContentForm.hasChildNodes(alertMesage)) {
      alertMesage.remove();
    }
    monthYearInput.style.borderColor = '#a7a7a7';
  }
  if ((!arr[2]) || (('' + arr[2]).length != 3) || !regNumber.test(arr[2]) ) {
    
    codeInput.style.borderColor = 'red';
    creditCardContentForm.insertBefore(alertMesage, codeBox);
    return false;
  } else {
    if (creditCardContentForm.hasChildNodes(alertMesage)) {
      alertMesage.remove();
    }
    codeInput.style.borderColor = '#a7a7a7';
  }
  cardDate();
    return true;
}


/* ************************RESULT******************/
resultContentBox.classList.add("resultContentBox");
resultContentTitle.classList.add("resultContentTitle");
resultContentForm.classList.add("resultContentForm");
resultContentCard.classList.add("resultContentCard");
resultDopInfoBox.classList.add('resultDopInfoBox')
resultCreditBox.classList.add('resutCreditBox');
resultContentCard.innerText = 'Данные кредитной карты';
resultContentTitle.innerText = "Личные данные";
resultTableBox.classList.add('resultTableBox');
resultContentBox.appendChild(resultContentTitle);
resultContentBox.appendChild(resultContentForm);
resultContentBox.appendChild(resultContentCard);
boxForForm.appendChild(resultContentBox);
resultContentForm.appendChild(resultDopInfoBox);
resultContentForm.appendChild(resultCreditBox);
resultContentForm.appendChild(resultTableBox);
resultTableBox.appendChild(resultTable);




/* ----------------function switch tab-menu------------------- */
nextButonForm.classList.add("nextButonForm");
prevButtonForm.classList.add("prevButtonForm");
prevButtonForm.appendChild(backArrow);
prevButtonForm.appendChild(textBack);
textBack.classList.add("textBack");
backArrow.classList.add("backArrow");
textBack.innerText = "Данные кредитной карты";

nextButonForm.innerText = "Далее";

boxControllForm.appendChild(prevButtonForm);
boxControllForm.appendChild(nextButonForm);

let formButtonsMass = formButtons.children;
let forms = boxForForm.children;
addClass(formButtonsMass, "buttonControl");
addClass(forms, "forms");
forms[0].style.display = "block";
formButtonsMass[0].classList.add("active");
function checkName(name) {
  let reg = /[A-Za-zА-Яа-я]/
  if (reg.test(name)) return true;
  return false;
}

function checkDate(date) {
  if (regDate.test(date)) return true;
  return false;
}

let inputs = [];
function makeInputs() {
  for (let i = 0, len = formFields.length; i < len; i++) {
    if (i === 4) {
      inputs[i] = 'sex';
    } else if (i === 5) {
      inputs[i] = formFields[i].childNodes[1].childNodes[0];
    } else if (i === 12) {
      inputs[i] = formFields[i].childNodes[1].childNodes[0];
    } else {
      inputs[i] = formFields[i].childNodes[1];
    }
  }
}
makeInputs();



let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function isTru(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i < 3) {
      if (!checkName(arr[i])) {
        personalDateContentForm.insertBefore(alertMesage, formFields[i]);
        inputs[i].style.borderColor = 'red';
        return false;
      } else {
        if (personalDateContentForm.hasChildNodes(alertMesage)) {
          alertMesage.remove();
        }
        inputs[i].style.borderColor = '#a7a7a7';
      }
    }
    if (i === 3) {
      if (!checkDate(arr[i])) {
        personalDateContentForm.insertBefore(alertMesage, formFields[i]);
        inputs[i].style.borderColor = 'red';
        return false;
      } else {
        if (personalDateContentForm.hasChildNodes(alertMesage)) {
          alertMesage.remove();
        }
        inputs[i].style.borderColor = '#a7a7a7';
      }

    }

    if (arr[4] === 'Мужской') {
      if (isTelBel() != 'bel') {
        personalDateContentForm.insertBefore(alertMesage, userTelBox);
        return false;
      }
    } else if (arr[4] === 'Женский') {
      if (isTelBel() === 'import') {
        userFootballInputField.value = 'Tefal';
        userFootballInputField.disabled = true;
      } else if (isTelBel() === 'bel') {
        userFootballInputField.disabled = false;
        setPreset(pans);
      }
    }
    if (i > 4 && i < 10 || i >= 11) {
      if (!arr[i]) {
        personalDateContentForm.insertBefore(alertMesage, formFields[i]);
        inputs[i].style.borderColor = 'red';
        return false;
      } else {
        if (personalDateContentForm.hasChildNodes(alertMesage)) {
          alertMesage.remove();
        }
        inputs[i].style.borderColor = '#a7a7a7';
      }
    }

    if (i === 10) {

      if (!regEmail.test(arr[i])) {
        
        personalDateContentForm.insertBefore(alertMesage, userFriendBox);
        userFriendInput.style.borderColor = 'red';
        return false;
      } else {
        if (personalDateContentForm.hasChildNodes(alertMesage)) {
          alertMesage.remove();
        }

        userFriendInput.style.borderColor = '#a7a7a7';
      }
    }
  }
  return true;
}

function changeTab() {
  nextButonForm.addEventListener("click", tabsNext);
  prevButtonForm.addEventListener("click", tabPrev);
  function tabsNext() {
    makeArray();
    if (isTru(userData)) {
      if (stateTab === 0) {
        forms[stateTab + 1].style.display = "block";
        if (!formButtonsMass[stateTab + 1].classList.contains("active")) {
          formButtonsMass[stateTab + 1].classList.add("active");
        }
        for (j = 0; j < 3; j++) {
          if (j != stateTab + 1) {
            forms[j].style.display = "none";
            formButtonsMass[j].classList.remove("active");
          }
        }
        stateTab += 1;
      }
      if (stateTab === 1) {
        prevButtonForm.style.display = "flex";
        textBack.innerText = "Личные данные";
      }
      
    }

    if (isCardTrue(creditCard)) {
      console.log('card true');
      if (stateTab === 1) {
        forms[stateTab + 1].style.display = "flex";
        if (!formButtonsMass[stateTab + 1].classList.contains("active")) {
          formButtonsMass[stateTab + 1].classList.add("active");
        }
        for (j = 0; j < 3; j++) {
          if (j != stateTab + 1) {
            forms[j].style.display = "none";
            formButtonsMass[j].classList.remove("active");
          }
        }
        stateTab += 1;
      }
      if (stateTab === 2) {
        prevButtonForm.style.display = "flex";
        textBack.innerText = "Данные кредитной карты";
        resultData = userData.concat(creditCard);
        nextButonForm.innerText = "Сохранить";
        resultTable.innerHTML = '';
        makeTable(resultData);
        
      }
    } else {

    }
   

  }

  function tabPrev() {
    if (stateTab > 0) {
      forms[stateTab - 1].style.display = "block";
      if (!formButtonsMass[stateTab - 1].classList.contains("active")) {
        formButtonsMass[stateTab - 1].classList.add("active");
      }
      for (j = 0; j < 3; j++) {
        if (j != stateTab - 1) {
          forms[j].style.display = "none";
          formButtonsMass[j].classList.remove("active");
        }
      }
      stateTab -= 1;
    }
    if (stateTab === 1) {
      prevButtonForm.style.display = "flex";
      textBack.innerText = "Личные данные";
      nextButonForm.innerText = "Далее";
    }
    if (stateTab === 0) {
      prevButtonForm.style.display = "none";
    }
  }
}
changeTab();



/*add some styles */
resultTable.classList.add('resultTable');
boxForChoise.classList.add("boxForChoise");
title.classList.add("title");
h1.innerText = "Городской сайт";
mainMenuButtonBox.classList.add("mainMenuButtonBox");
contentFrame.classList.add("contentFrame");
topMenuBox.classList.add("topMenuBox");
footerBox.classList.add("footerBox");
titleBox.classList.add("titleBox");
footerMenuBox.classList.add("footerMenuBox");
title.appendChild(h1);
titleBox.appendChild(title);
madeIn.innerText = "Сделано в Беларуси";
chatBox.classList.add("chatBox");
const formPartials = (arr, quant, box) => {
  let buffMass = [];
  for (let i = 0; i < quant; i++) {
    buffMass[i] = document.createElement("div");
    buffMass[i].classList.add("templateBox");
    arr[i] = document.createElement("div");
    buffMass[i].appendChild(arr[i]);
    box.appendChild(buffMass[i]);
  }
};
const customizeMenu = (arrButtons, arrNames, addClass) => {
  for (let i = 0, len = arrButtons.length; i < len; i++) {
    arrButtons[i].innerText = arrNames[i];
    if (addClass) arrButtons[i].classList.add(addClass);
  }
};

const removeClass = (element, classes) => {
  let len = element.length;

  if (len) {
    for (let i = 0; i < len; i++) {
      element[i].classList.removeClass(classes);
    }
  } else element.classList.removeClass(classes);
};

const createContent = (arr, num, box) => {
  for (let i = 0; i < num; i++) {
    arr[i] = document.createElement("div");
    box.appendChild(arr[i]);
    if (i != 3) arr[i].innerHTML = "<h2>Пункт " + (i + 1) + "<h2>";
    arr[i].style.display = "none";
  }
};
let state = 0;

topMenuBox.appendChild(titleBox);



formPartials(mainMenu, quantButtonsTop, mainMenuButtonBox);
customizeMenu(mainMenu, mainMenuText, "topMenuButton");
formPartials(footerMenu, quantButtonsFooter, footerMenuBox);
customizeMenu(footerMenu, footerText, "footerMenuButton");
createContent(contentBox, quantButtonsTop, contentFrame);

addClass(contentBox, "contentBox");
addClass(mainMenu, "buttons");

for (let i = 0; i < quantButtonsTop; i++) {
  mainMenu[i].addEventListener("click", () => swithContent(i));
}

const swithContent = i => {
  state = i;
  contentBox[state].style.display = "block";
  mainMenu[state].parentNode.classList.add("activeButton");
  for (let i = 0; i < quantButtonsTop; i++) {
    if (i != state) {
      contentBox[i].style.display = "none";
      mainMenu[i].parentNode.classList.remove("activeButton");
    }
  }
};
contentBox[3].appendChild(boxForChoise);
contentBox[3].appendChild(boxForTypeForm);
contentBox[3].appendChild(chatBox);

topMenuBox.appendChild(mainMenuButtonBox);
footerBox.appendChild(footerMenuBox);
footerBox.appendChild(madeIn);
root.appendChild(topMenuBox);
root.appendChild(contentFrame);
root.appendChild(footerBox);



console.log(resultData);