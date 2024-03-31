


// style css
document.body.style.margin = 0;
document.body.style.padding = 0;

box1Div.style.maxWidth = '1280px'
box1Div.style.width = '100%'
box1Div.style.height = '80vh'
box1Div.style.margin = '0 auto'
box1Div.style.background = `url('./img/IMAGEBOX1.png') no-repeat center/100%`

menuDiv.style.maxWidth = '1280px'
menuDiv.style.width = '100%'
menuDiv.style.height = '56px'
menuDiv.style.display = 'flex'
menuDiv.style.alignItems = 'center'
menuDiv.style.justifyContent = 'space-around'
menuDiv.style.borderBottom = '2px solid'
menuDiv.style.margin = '0 auto'

aaDiv.style.display = 'flex'
aaDiv.style.gap = '20px'

catalogLink.style.textDecoration = 'none'
catalogLink.style.color = '#000'  
rulesLink.style.textDecoration = 'none'
rulesLink.style.color = '#000'      
contactsLink.style.textDecoration = 'none'
contactsLink.style.color = '#000'

svgElement.style.cursor = 'pointer'





const root = document.getElementById('root');

// Создаем div.menu
const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');


const aaDiv = document.createElement('div');
aaDiv.classList.add('aa');

const catalogLink = document.createElement('a');
catalogLink.href = '#';
catalogLink.textContent = 'Каталог';

const rulesLink = document.createElement('a');
rulesLink.href = '#';
rulesLink.textContent = 'Правила использования';

const contactsLink = document.createElement('a');
contactsLink.href = '#';
contactsLink.textContent = 'Контакты';


aaDiv.appendChild(catalogLink);
aaDiv.appendChild(rulesLink);
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


root.appendChild(box1Div);







// async function fetchDataForAI() {
//     try {
//         const response = await fetch('https://126b63f3395fce52.mokky.dev/user');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//         throw error;
//     }
// }

// // Пример использования:
// async function processDataForAI() {
//     try {
//         const data = await fetchDataForAI();
//        
//         console.log('Data for AI:', data);
//         FunGin(data)
//     } catch (error) {
//        
//         console.error('Error processing data for AI:', error.message);
//     }
// }

// processDataForAI();

// function FunGin(arr){
//     arr.map((el) => {
//         let Vopros = el.Vopros
//         console.log(Vopros);
//     })
// }

//---------------------голосовой помошник
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
        if (recordedText.trim() == 'Привет') { // Проверка условия, пример
        playSound();
        }
        if (recordedText.trim() == 'как ты') { // Проверка условия, пример
        playSound2();
        }
        if (recordedText.trim() == 'Кто тебя создал') { // Проверка условия, пример
        playSound3();
        }
    };
    recognition.start();
    
   
}



function stopRecording() {
    if (recognition) {
        recognition.stop();
    }
}















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
  