const container = document.createElement('container');
document.body.append(container);

for(let i=1; i<=5; i++){
    const div = document.createElement('div');
    container.append(div);
    div.innerText = `Rad ${i}`;
    div.style.fontSize = `${10*i}px`
    div.style.display ="flex"
    div.style.justifyContent = "center"
    div.style.margin = `${5*i}px 0`
    div.style.color = `hsl(240, 90%, 70%)`;
    div.style.backgroundColor = `hsl(${120+(i*15)}, 90%, 85%)`;
}

const section = document.createElement('section');
document.body.append(section);
section.style.border = '2px solid black'
section.style.display ="grid"
section.style.justifyContent = "center"
section.style.alignItems= "center";
section.style.width = "100%";
// section.style.gridtTemplateColumns = "repeat(auto-fit, minmax(250px, 3fr))"; 

const column1 = document.createElement('div');
column1.style.display = 'flex';
column1.style.flexDirection = 'column';
column1.style.alignItems = '';
section.appendChild(column1);
for (let j=0;  j<=9; j++){
    const number = document.createElement('span');
    number.textContent = j;
    number.style.fontSize = '2rem';
    column1.appendChild(number);

const column2 = document.createElement('div');
column2.style.display = 'flex';
column2.style.flexDirection = 'column';
column2.style.alignItems = 'center';

section.appendChild(column2);
}


const column3 = document.createElement('div');
column3.style.display = 'flex';
column3.style.flexDirection = 'column';
column3.style.alignItems = 'center';
section.appendChild(column3);

// for (let i = 0; i < 3; i++) {
    // const column1 = document.createElement('div');
    // column1.style.display = 'flex';
    // column1.style.flexDirection = 'column';
    // column1.style.alignItems = 'center';
    // section.appendChild(column1);

// for (let j=0;  j<=9; j++){
    // const number = document.createElement('span');
    // number.textContent = j;
    // number.style.fontSize = '2rem';
    // column1.appendChild(number);
// }
// }

  