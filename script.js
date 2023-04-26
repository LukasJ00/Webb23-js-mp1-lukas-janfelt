// container 
const container = document.createElement('container');
document.body.append(container);

for(let i=1; i<=5; i++){
    const div = document.createElement('div');
    container.append(div);
    div.innerText = `Rad ${i}`;
    div.style.fontSize = `${10*i}px`;
    div.style.display ="flex";
    div.style.justifyContent = "center";
    div.style.margin = `${5*i}px 0`;
    div.style.color = 'hsl(240, 90%, 70%)';
    div.style.backgroundColor = `hsl(${120+(i*15)}, 90%, 85%)`;
}

//section 
const section = document.createElement('section');
document.body.append(section);
section.style.border = '2px solid black';
section.style.display ='flex'
section.style.justifyContent = 'space-evenly'
section.style.width = "100%";

//kort 1
const card1 = document.createElement('div');
section.appendChild(card1);
card1.style.width = '100px'
card1.style.display = 'flex';
card1.style.justifyContent = 'center';
card1.style.margin = '3rem'
card1.style.backgroundColor = 'hsl(240, 71%, 80%)';

//kolumn 1 
const column1 =  document.createElement('div');
card1.appendChild(column1);
column1.style.backgroundColor = 'white'
column1.style.width = '70px'
column1.style.margin = '10px'

//nummer loop
for (let j=0;  j<=9; j++){
const number = document.createElement('div');
number.textContent = j;
number.style.fontSize = '1.5rem';
number.style.display = 'flex';
number.style.flexDirection = 'column'; 


if (j === 4) {
    number.style.backgroundColor = 'hsl(240, 71%, 80%)';
  } else if (j % 2 === 0) {
    number.style.backgroundColor = 'black';
    number.style.color = 'white';
  } else {
    number.style.backgroundColor = 'white';
  }
  column1.appendChild(number);
}

//kort 2
const card2 = document.createElement('div');
section.appendChild(card2);
card2.style.width = '100px'
card2.style.display = 'flex';
card2.style.justifyContent = 'center';
card2.style.margin = '3rem'
card2.style.backgroundColor = 'hsl(240, 71%, 80%)';

//kulumn 2 
const column2 =  document.createElement('div');
card2.appendChild(column2);
column2.style.backgroundColor = 'white'
column2.style.width = '70px'
column2.style.margin = '10px'

//nummer loop
for (let x=9;  x>=0; x--){
    const number = document.createElement('div');
    number.textContent = x;
    number.style.fontSize = '1.5rem';
    number.style.display = 'flex';
    number.style.flexDirection = 'column'; 
    number.style.textAlign ='center'
    if (x === 8) {
    number.style.backgroundColor = 'hsl(240, 71%, 80%)';
    } else if (x % 2 === 0) {
    number.style.backgroundColor = 'black';
    number.style.color = 'white';
    } else {
    number.style.backgroundColor = 'white';
    }
    column2.appendChild(number);
    }

// kort 3
const card3 = document.createElement('div');
section.appendChild(card3);
card3.style.width = '100px'
card3.style.display = 'flex';
card3.style.justifyContent = 'center';
card3.style.margin = '3rem'
card3.style.backgroundColor = 'hsl(240, 71%, 80%)';

//kulumn 3
const column3 =  document.createElement('div');
card3.append(column3);
column3.style.backgroundColor = 'white'
column3.style.width = '70px'
column3.style.margin = '10px'

//nummer array
const text = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for (let i=0; i<text.length; i++){
    const paragraph = document.createElement('p'); 
    paragraph.innerText = text[i];
    paragraph.style.fontSize = '1.5rem';
    paragraph.style.textAlign = 'right';
    paragraph.style.margin = '0'; 
    column3.append(paragraph) 
    if (i==='sex'){
        paragraph.Color = 'hsl(240, 71%, 80%)'
    }
}