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
/* chat consts */


const chatBoxHead = document.createElement("div");
const supportImg = document.createElement("div");
const supportDescription = document.createElement("div");
const greenPoint =  document.createElement("div");
const chatBoxMessageFieldBox= document.createElement("div");
const chatBoxMessageField = document.createElement("div");
const chatBoxFooter = document.createElement("div");
const inputMessage = document.createElement('textarea');
const messageSubmit = document.createElement("div");
const annasMessageBox = document.createElement("div");
const annasMessagePic = document.createElement("div");
const annasMessageText = document.createElement("div");
const usersMessageBox = document.createElement("div");
const usersMessageText = document.createElement("div");



/*end chat consts */
const boxForForm = document.createElement("div");
const boxControllForm = document.createElement("div");
/*For choise box*/
const boxForChoise = document.createElement("div");
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

/*box for typical form */

boxForTypeForm.classList.add('boxForTypeForm');
boxTitleForm.classList.add('boxTitleForm');
boxControllForm.classList.add('boxControllForm');
boxForForm.classList.add('boxForForm');
formTitle.classList.add('formTitle');
formButtons.classList.add('formButtons');
personalDate.classList.add('personalDate');
personalDate.innerText = 'Личные данные';
creditCartDate.classList.add('creditCartDate');
creditCartDate.innerText = 'Данные кредитной карты';
result.classList.add('result');
result.innerText = 'Результат'
h3.innerText = 'Типовая форма';
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

/*chat */

chatBoxHead.classList.add('chatBoxHead');
supportImg.classList.add('supportImg');
supportDescription.classList.add('supportDescription');
supportDescription.innerText = 'Анна в чате';
greenPoint.classList.add('greenPoint');
chatBoxMessageFieldBox.classList.add('chatBoxMessageFieldBox');
chatBoxMessageField.classList.add('chatBoxMessageField');
chatBoxFooter.classList.add('chatBoxFooter');
inputMessage.classList.add('inputMessage');
inputMessage.placeholder = 'Ваше сообщение ...';
messageSubmit.classList.add('messageSubmit');
annasMessageBox.classList.add('annasMessageBox');
annasMessagePic.classList.add('annasMessagePic');
annasMessageText.classList.add('annasMessageText');
annasMessageText.innerText = 'Здравствуйте! Пишите мне, если у вас возникнут вопросы по работе сайта';
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
usersMessageBox.classList.add('usersMessageBox');
usersMessageText.classList.add('usersMessageText');
usersMessageBox.appendChild(usersMessageText);


setTimeout(()=> chatBoxMessageField.appendChild(annasMessageBox),  5000);
function chattedClick (){
  let messageBox = document.createElement('div'),
      messageText = document.createElement('div'),
      suppMessageBox = document.createElement('div'),
      suppMessagePic = document.createElement('div'),
      suppMessageText = document.createElement('div');
  suppMessageBox.classList.add('annasMessageBox');
  suppMessagePic.classList.add('annasMessagePic');
  suppMessageText.classList.add('annasMessageText');   
  suppMessageBox.appendChild(suppMessagePic);
  suppMessageBox.appendChild(suppMessageText); 
  suppMessageText.innerText = annasMessageText.innerText;
  messageBox.classList.add('usersMessageBox');
  messageText.classList.add('usersMessageText');
  messageBox.appendChild(messageText);
  if (inputMessage.value.length) {
    messageText.innerText = inputMessage.value;
    chatBoxMessageField.append(messageBox);
    inputMessage.value = '';
    setTimeout(()=> chatBoxMessageField.appendChild(suppMessageBox),  1000);
  }
  console.log(inputMessage.value);
}

messageSubmit.addEventListener('click', chattedClick);


/*add some styles */

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
chatBox.classList.add('chatBox');
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
const addClass = (element, classes) => {
  let len = element.length;
  if (len) {
    for (let i = 0; i < len; i++) {
      element[i].classList.add(classes);
    }
  } else element.classList.add(classes);
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
