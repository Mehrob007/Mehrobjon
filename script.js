const root = document.getElementById('root');

// Создаем div.menu
const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');


const aaDiv = document.createElement('div');
aaDiv.classList.add('aa');

const catalogLink = document.createElement('a');
catalogLink.href = '#box2';
catalogLink.textContent = 'Каталог';


const contactsLink = document.createElement('a');
contactsLink.href = '#contact';
contactsLink.textContent = 'Контакты';


aaDiv.appendChild(catalogLink);
aaDiv.appendChild(contactsLink);


const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('id', 'Karzina');
svgElement.setAttribute('width', '24');
svgElement.setAttribute('height', '24');
svgElement.setAttribute('viewBox', '0 0 24 24');
svgElement.setAttribute('fill', 'none');
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathElement.setAttribute('d', 'M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.7 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.3 13 16.9 12.6 17.2 12L20.8 5.5C21 5.3 21 5.2 21 5C21 4.4 20.6 4 20 4H5.2L4.8 3.1C4.5 2.5 3.8 2 3 2H1V4ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z');
pathElement.setAttribute('fill', 'black');


svgElement.appendChild(pathElement);



menuDiv.appendChild(aaDiv);
menuDiv.appendChild(svgElement);


root.appendChild(menuDiv);


const box1Div = document.createElement('div');
box1Div.classList.add('box1');
box1Div.id = 'box1';

const contentBox1Div = document.createElement('div');
box1Div.appendChild(contentBox1Div)

const H1ContentBox1 = document.createElement('h1');
H1ContentBox1.textContent = 'Inhale. \n Gift⁠. \n Exhale.'

contentBox1Div.appendChild(H1ContentBox1)

const PContentBox1 = document.createElement('p');
PContentBox1.textContent = 'The gifts you need, stress-free. Shop the best of Google with ease.'

contentBox1Div.appendChild(PContentBox1)

const btnDiv = document.createElement('div')

const buttonLeft = document.createElement('button') 
const buttonRight = document.createElement('button') 

buttonLeft.textContent = 'Browse deals'
buttonRight.textContent = 'Browse the gift guide'


btnDiv.appendChild(buttonLeft)
btnDiv.appendChild(buttonRight)

contentBox1Div.appendChild(btnDiv)

root.appendChild(box1Div);

const bgModalDiv = document.createElement('div');
root.appendChild(bgModalDiv)

const ModalDiv = document.createElement('div');

const buttonCloseModal = document.createElement('button');
buttonCloseModal.textContent = 'x'

const contentModal = document.createElement('div');

ModalDiv.appendChild(buttonCloseModal)
ModalDiv.appendChild(contentModal)


bgModalDiv.appendChild(ModalDiv);
// modal Element ------------------------------
svgElement.addEventListener('click', function() {
    bgModalDiv.style.display = 'flex'
    
})
buttonCloseModal.addEventListener('click', function() {
    bgModalDiv.style.display = 'none'
})

const box2Div = document.createElement('div');
box2Div.id = 'box2';

root.appendChild(box2Div)

const titleBox2 = document.createElement('h1');
titleBox2.textContent = 'Каталог товаров'

box2Div.appendChild(titleBox2)

const contentBox2Div = document.createElement('div');

box2Div.appendChild(contentBox2Div)



async function fetchDataForAI() {
    try {
        const response = await fetch('https://126b63f3395fce52.mokky.dev/content');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

// Пример использования:
async function processDataForAI() {
    try {
        const data = await fetchDataForAI();
       
        console.log('Data for AI:', data);
        FunGin(data)
    } catch (error) {
        console.error('Error processing data for AI:', error.message);
    }
}

processDataForAI();

function FunGin(arr){
    arr.map((el) => {
        const comContentBox2Div = document.createElement('div');
        const comContentBox2Img = document.createElement('img');
        const comContentBox2Title = document.createElement('h3');
        const comContentBox2Price = document.createElement('p');
        const comContentBox2Buy = document.createElement('button');

        comContentBox2Div.classList.add('comProduct')

        comContentBox2Div.id = `Product${el.id}`
        comContentBox2Img.src = el.img
        comContentBox2Img.alt = 'Product'
        comContentBox2Title.textContent = el.title
        comContentBox2Price.textContent = `Price: ${el.price}$`
        comContentBox2Buy.textContent = "Buy" 

        comContentBox2Div.appendChild(comContentBox2Img);
        comContentBox2Div.appendChild(comContentBox2Title);
        comContentBox2Div.appendChild(comContentBox2Price);
        comContentBox2Div.appendChild(comContentBox2Buy);

        contentBox2Div.appendChild(comContentBox2Div)
        console.log(comContentBox2Div);

        //style css
            comContentBox2Div.style.width = '210px'
            comContentBox2Div.style.height = '300px'
            comContentBox2Div.style.padding = '10px'
            comContentBox2Div.style.display = 'flex'
            comContentBox2Div.style.justifyContent = 'center'
            comContentBox2Div.style.alignItems = 'center'
            comContentBox2Div.style.flexDirection = 'column'
            comContentBox2Div.style.background = '#F8F9FA'

            comContentBox2Img.style.width = '180px'

            comContentBox2Price.style.margin = '0'

            comContentBox2Buy.style.margin = '10px 0'
            comContentBox2Buy.style.cursor = 'pointer'
        //style css
        comContentBox2Buy.addEventListener('click', function() {
            // Product => ModalDiv
            const TovarInKarziDiv = document.createElement('div');

            const KarzinaComponentImgProduct = document.createElement('img');
            KarzinaComponentImgProduct.src = el.img
            KarzinaComponentImgProduct.alt = 'Product'
            const KarzinaComponentTitleProduct = document.createElement('h4');
            KarzinaComponentTitleProduct.textContent = el.title;

            const leftComponentKarzina = document.createElement('div');

            const KarzinaComponentPriceProduct = document.createElement('p');
            KarzinaComponentPriceProduct.textContent = `Price: ${el.price}$`;

            const buttonDeleteKarzina = document.createElement('button');
            buttonDeleteKarzina.textContent = 'Delete';

            leftComponentKarzina.appendChild(KarzinaComponentImgProduct) 
            leftComponentKarzina.appendChild(KarzinaComponentTitleProduct)
            TovarInKarziDiv.appendChild(leftComponentKarzina)
            TovarInKarziDiv.appendChild(KarzinaComponentPriceProduct)
            TovarInKarziDiv.appendChild(buttonDeleteKarzina)

            contentModal.appendChild(TovarInKarziDiv)

            // delete button in ModalDiv
            buttonDeleteKarzina.addEventListener('click', function(){
                TovarInKarziDiv.style.transform = 'scale(0.8) translateY(-100px)'
                TovarInKarziDiv.style.transition = ' all 0.1s linear'
                TovarInKarziDiv.style.filter = 'brightness(0.7)'
                TovarInKarziDiv.style.position = 'relative'
                TovarInKarziDiv.style.zIndex = '-1'
                setTimeout(() => contentModal.removeChild(TovarInKarziDiv), 200)
            })
            //style css
                TovarInKarziDiv.style.width = '400px'
                TovarInKarziDiv.style.height = '70px'
                TovarInKarziDiv.style.background = '#fff'
                TovarInKarziDiv.style.display = 'flex'
                TovarInKarziDiv.style.alignItems = 'center'
                TovarInKarziDiv.style.justifyContent = 'space-between'
                TovarInKarziDiv.style.borderRadius = '7px'
                
                
                leftComponentKarzina.style.display = 'flex'
                leftComponentKarzina.style.alignItems = 'center'


                KarzinaComponentImgProduct.style.width = '50px'

                buttonDeleteKarzina.style.margin = '0 20px'
                buttonDeleteKarzina.style.cursor = 'pointer'
            //style css
        })
        
    })
}

const buttonAi = document.createElement('button');
buttonAi.textContent = 'AI'
buttonAi.onmousedown = startRecording
buttonAi.onmouseup = stopRecording
buttonAi.setAttribute('id', 'recordButton')

root.appendChild(buttonAi)

let recognition;
let recordedText = '';

function playSound() {
    const audio = new Audio('./audio1.mp3'); 
    audio.play();
}
function playSound2() {
    const audio = new Audio('./audio2.mp3'); 
    audio.play();
}
function playSound3() {
    const audio = new Audio('./audio3.mp3'); 
    audio.play();
}

function startRecording() {
    recordedText = '';
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.continuous = true;
    recognition.onresult = function(event) {
        const result = event.results[event.results.length - 1][0].transcript;
        recordedText += result;
        console.log('Recorded text: ' + recordedText);
        
        switch(recordedText.trim()){
            case 'Привет':
                playSound();
            break;
            case 'как ты':
                playSound2();
            break;
            case 'Кто тебя создал':
                playSound3();
            break;
        }
    
    };
    recognition.start();
    buttonAi.style.animation = 'pulse 1s infinite';

    
}



function stopRecording() {
    if (recognition) {
        recognition.stop();
        buttonAi.style.animation = '';

    }
}
// Создаем div


// Добавляем стили для анимации
const style = document.createElement('style');
style.innerHTML = `
  @keyframes pulse {
    0% {
      background-color: #80a1ac;
    }
    50% {
      background-color: #bbebf9;
    }
    100% {
      background-color: #80a1ac;
    }
  }
  #voiceDiv {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
document.head.appendChild(style);

const box3FooterDiv = document.createElement('div');
root.appendChild(box3FooterDiv)

const contentBox3FooterDiv = document.createElement('div')
box3FooterDiv.appendChild(contentBox3FooterDiv)

 var form = document.createElement("form");
 form.setAttribute("method", "post");
 form.setAttribute("action", "https://126b63f3395fce52.mokky.dev/user");

// UserEmail
 var labelInUserName = document.createElement("label");
 labelInUserName.setAttribute("for", "UserName");
 labelInUserName.textContent = "Your Name";
 form.appendChild(labelInUserName);

 var inUserName = document.createElement("input");
 inUserName.setAttribute("type", "text");
 inUserName.setAttribute("placeholder", "Your Name...");
 inUserName.setAttribute("id", "UserName");
 inUserName.setAttribute("name", "UserName");
 form.appendChild(inUserName);

 // UserEmail
 var labelInUserEmail = document.createElement("label");
 labelInUserEmail.setAttribute("for", "UserEmail");
 labelInUserEmail.textContent = "Your Email";
 form.appendChild(labelInUserEmail);

 var inUserEmail = document.createElement("input");
 inUserEmail.setAttribute("type", "text");
 inUserEmail.setAttribute("placeholder", "Your Email...");
 inUserEmail.setAttribute("id", "UserEmail");
 inUserEmail.setAttribute("email", "UserEmail");
 form.appendChild(inUserEmail);

  // UserPassword
  var labelInUserPassword = document.createElement("label");
  labelInUserPassword.setAttribute("for", "UserPassword");
  labelInUserPassword.textContent = "Your Password";
  form.appendChild(labelInUserPassword);
 
  var inUserPassword = document.createElement("input");
  inUserPassword.setAttribute("type", "password");
  inUserPassword.setAttribute("placeholder", "Your Password...");
  inUserPassword.setAttribute("id", "UserPassword");
  inUserPassword.setAttribute("Password", "UserPassword");
  form.appendChild(inUserPassword);


 var submitBtn = document.createElement("input");
 submitBtn.setAttribute("type", "submit");
 submitBtn.setAttribute("value", "Отправить Свои данные");
 form.appendChild(submitBtn);


 form.addEventListener("submit", function(event) {
    event.preventDefault();

     var UserName = document.getElementById("UserName").value;
     var UserEmail = document.getElementById("UserEmail").value;
     var UserPassword = document.getElementById("UserPassword").value;

     var formData = {
        UserName: UserName,
        UserEmail: UserEmail,
        UserPassword: UserPassword
     };

     var requestOptions = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
     };

     fetch('https://126b63f3395fce52.mokky.dev/user', requestOptions)
         .then(response => {
             if (!response.ok) {
                 throw new Error('Ошибка сети');
             }
             return response.json();
         })
         .then(data => {
             console.log(data);
         })
         .catch(error => {
             console.error('Произошла ошибка:', error);
         });

        setTimeout(() => {location.reload()}, 1000)
         
 });

contentBox3FooterDiv.appendChild(form);
box3FooterDiv.id = 'contact'


// style css
document.getElementById('html').style.scrollBehavior = 'smooth'

document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.paddingTop = '56px';


document.body.style.fontFamily = '"Roboto", sans-serif'

box1Div.style.maxWidth = '1280px'
box1Div.style.width = '100%'
box1Div.style.height = '80vh'
box1Div.style.margin = '0 auto'
box1Div.style.background = `url('./img/IMAGEBOX1.png') no-repeat center/100%`
box1Div.style.display = 'flex'
box1Div.style.alignItems = 'center'
box1Div.style.justifyContent = 'center'

contentBox1Div.style.width = '70%'
contentBox1Div.style.color = '#3C4043'

H1ContentBox1.style.fontSize = '57px'
H1ContentBox1.style.fontWeight = '400'
H1ContentBox1.style.width = '316px'

PContentBox1.style.width = '356px'

buttonRight.style.width = '143px'
buttonRight.style.height = '40px'
buttonRight.style.background = 'transparent'
buttonRight.style.border = 'none'

buttonLeft.style.width = '143px'
buttonLeft.style.height = '40px'
buttonLeft.style.background = 'transparent'
buttonLeft.style.border = '1px solid '
buttonLeft.style.cursor = 'pointer'



menuDiv.style.width = '76%'
menuDiv.style.height = '56px'
menuDiv.style.position = 'fixed'
menuDiv.style.display = 'flex'
menuDiv.style.alignItems = 'center'
menuDiv.style.justifyContent = 'space-between'
menuDiv.style.padding = ' 0 12%'
menuDiv.style.top = '0'
menuDiv.style.backdropFilter = 'blur(50px)'
menuDiv.style.background = '#0081ac30'

menuDiv.style.boxShadow = '6px 10px 30px -20px #000'
// box-shadow: 6px 28px 49px -37px rgba(0,0,0,0.75);

aaDiv.style.display = 'flex'
aaDiv.style.gap = '20px'

catalogLink.style.textDecoration = 'none'
catalogLink.style.color = '#000'  
      
contactsLink.style.textDecoration = 'none'
contactsLink.style.color = '#000'

svgElement.style.cursor = 'pointer'

bgModalDiv.style.position = 'absolute'
bgModalDiv.style.position = 'fixed'
bgModalDiv.style.background = '#3a3a3a44'
bgModalDiv.style.display = 'flex'
bgModalDiv.style.alignItems = 'center'
bgModalDiv.style.justifyContent = 'center'
bgModalDiv.style.height = '100vh'
bgModalDiv.style.width = '100%'
bgModalDiv.style.zIndex = '1000'
bgModalDiv.style.display = 'none'
bgModalDiv.style.top = '0'
bgModalDiv.style.left = '0'

ModalDiv.style.background = '#3a3a3a44'
ModalDiv.style.backdropFilter = 'blur(20px)'
ModalDiv.style.height = '400px'
ModalDiv.style.width = '500px'
ModalDiv.style.position = 'relative'
ModalDiv.style.display = 'flex'
ModalDiv.style.alignItems = 'center'
ModalDiv.style.justifyContent = 'center'
ModalDiv.style.flexDirection = 'column'

contentModal.style.maxWidth = '430px'
contentModal.style.width = '100%'
contentModal.style.height = '300px'
contentModal.style.display = 'flex'
contentModal.style.flexDirection = 'column'
contentModal.style.alignItems = 'center'
contentModal.style.justifyContent = 'top'
contentModal.style.gap = '7px 0'
contentModal.style.overflowY = 'scroll'


buttonCloseModal.style.position = 'absolute'
buttonCloseModal.style.top = '10px'
buttonCloseModal.style.right = '10px'
buttonCloseModal.style.cursor = 'pointer'


buttonAi.style.position = 'fixed'
buttonAi.style.zIndex = '1000'
buttonAi.style.right = '10%'
buttonAi.style.bottom = '15%'
buttonAi.style.border = '2px solid #0081ac'
buttonAi.style.borderRadius = '50px'
buttonAi.style.color = '#0081ac'
buttonAi.style.background = '#bbebf9'
buttonAi.style.padding = '10px 12px'
buttonAi.style.fontSize = '20px'
buttonAi.style.cursor = 'pointer'

box2Div.style.width = '100%'
box2Div.style.minHeight = '100vh'

titleBox2.style.width = '250px'
titleBox2.style.color = '#3C4043'
titleBox2.style.margin = '50px auto'
titleBox2.style.fontSize = '26px'
titleBox2.style.fontWeight = '400'

contentBox2Div.style.maxWidth = '1280px'
contentBox2Div.style.width = '100%'
contentBox2Div.style.margin = '0 auto'
contentBox2Div.style.display = 'flex'
contentBox2Div.style.alignItems = 'top'
contentBox2Div.style.justifyContent = 'center'
contentBox2Div.style.flexWrap = 'wrap'
contentBox2Div.style.gap = '40px 20px'

box3FooterDiv.style.height = '70vh'
box3FooterDiv.style.width = '100%'
box3FooterDiv.style.background = '#333'
box3FooterDiv.style.margin = '0 auto'
box3FooterDiv.style.marginTop = '20vh'
box3FooterDiv.style.display = 'flex'
box3FooterDiv.style.alignItems = 'center'
box3FooterDiv.style.justifyContent = 'center'

contentBox3FooterDiv.style.maxWidth = '820px'
contentBox3FooterDiv.style.width = '100%'
contentBox3FooterDiv.style.height = '500px'
contentBox3FooterDiv.style.display = 'flex'
contentBox3FooterDiv.style.flexDirection = 'column'
contentBox3FooterDiv.style.alignItems = 'center'
contentBox3FooterDiv.style.justifyContent = 'center'

form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.alignItems = 'center'
form.style.justifyContent = 'center'
form.style.gap = '10px'
form.style.color = '#fff'

inUserName.style.padding = '5px 40px 5px 10px'
inUserEmail.style.padding = '5px 40px 5px 10px'
inUserPassword.style.padding = '5px 40px 5px 10px'

submitBtn.style.fontSize = '16px'
submitBtn.style.marginTop = '16px'
submitBtn.style.padding = '7px 15px'
submitBtn.style.cursor = 'pointer'

//style css













// const buttonSend = document.createElement('button');
// buttonSend.id = 'sendButton';
// buttonSend.textContent = 'send';
// root.appendChild(buttonSend)

// document.getElementById("sendButton").addEventListener("click", function() {
//     const dataToSend = {
//       key1: 'value1',
//       key2: 'value2'
//     };
    
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(dataToSend)
//     };
    
//     fetch('https://126b63f3395fce52.mokky.dev/user', requestOptions)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Network response was not ok, status: ${response.status}, ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('There was a problem with your fetch operation:', error);
//       });
//   });
  