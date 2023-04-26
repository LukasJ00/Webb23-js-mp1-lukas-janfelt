// skapar en container 
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

//skapar en section 
const section = document.createElement('section');
document.body.append(section);
section.style.border = '2px solid black';
section.style.width = "100%";

//skapa kort
const card1 = document.createElement('div');
section.appendChild(card1);
card1.style.width = '100px'
card1.style.display = 'flex';
card1.style.justifyContent = 'center';
card1.style.margin = '3rem 20%'
card1.style.backgroundColor = 'hsl(240, 71%, 80%)';

//skapa column1 i kort
const column1 =  document.createElement('div');
card1.appendChild(column1);
column1.style.backgroundColor = 'white'
column1.style.width = '70px'
column1.style.margin = '10px '

//nummer loop
for (let j=0;  j<=9; j++){
const number = document.createElement('div');
number.textContent = j;
number.style.fontSize = '1.5rem';
number.style.display = 'flex';
number.style.flexDirection = 'column'; 
number.style.justifyContent = 'center';

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

