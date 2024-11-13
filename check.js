
const pyramidSizeInput = document.getElementById("pyramidSize");
const colourInput = document.getElementById("selectcolour");
const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const pyramidContainer = document.getElementById("pyramidContainer");

let pyramidSize = parseInt(pyramidSizeInput.value, 5);
let blinkColor = colourInput.value;
let blinkDuration = parseFloat(durationInput.value) * 1000; // Convert to milliseconds

let pyramid = [];
let currentRow = 0;
let blinkingInterval;

// Event Listeners for input changes
colourInput.addEventListener('input', (event) => {
    blinkColor = event.target.value;
});

durationInput.addEventListener('input', (event) => {
    blinkDuration = parseFloat(event.target.value) * 1000; // Convert to milliseconds
});

// Function to generate pyramid structure
function generatePyramid(size) {
    pyramidContainer.innerHTML = ''; // Clear any existing pyramid
    pyramid = [];
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('pyramidRow');
        
        for (let j = 0; j < (2 * i + 1); j++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            row.appendChild(circle);
        }

        pyramid.push(row);
        pyramidContainer.appendChild(row);
    }
}

// Function to start blinking row by row
function startBlinking() {
    startButton.disabled = true;
    stopButton.disabled = false;

    currentRow = 0;

    generatePyramid(pyramidSize);

    // Row by row blinking logic
    blinkingInterval = setInterval(() => {
        // Make all rows transparent first
        for (let i = 0; i < pyramid.length; i++) {
            const row = pyramid[i];
            for (let circle of row.children) {
                circle.style.backgroundColor = "transparent"; // Set transparent for all circles
                circle.classList.remove('blink'); // Remove the blinking effect
                circle.classList.add('transparent'); // Apply the transparent class
            }
        }

        if (currentRow < pyramidSize) {
            const row = pyramid[currentRow];
            // Apply the blink effect only to the current row
            for (let circle of row.children) {
                circle.style.backgroundColor = blinkColor;
                circle.classList.add('blink'); // Add blinking effect
                circle.classList.remove('transparent'); // Ensure non-blinking rows stay transparent
            }

            // After the current row finishes blinking, move to the next row
            currentRow++;
        } else {
            clearInterval(blinkingInterval); // Stop blinking when all rows are done
        }
    }, blinkDuration);
}

// Function to stop blinking
function stopBlinking() {
    clearInterval(blinkingInterval);

    startButton.disabled = false;
    stopButton.disabled = true;

    // Stop blinking for all circles and retain their color
    for (let row of pyramid) {
        for (let circle of row.children) {
            if (circle.classList.contains('blink')) {
                circle.classList.remove('blink');
                circle.style.backgroundColor = blinkColor;
            }
        }
    }
}

// Event listeners for start and stop buttons
startButton.addEventListener('click', startBlinking);
stopButton.addEventListener('click', stopBlinking);
                     
               
let user={
    name:"John",
    age:30
};
let user1={};
user["likes birds"]=true;
alert(user["likes birds"])
delete user["likes birds"]


let key='likes birds';
user[key]=true

let user={
    name:"JOhn",
    age:30

}
let key1=prompt("What do you want to know about the user?","name");
console.log(user[key1]);

let fruit=prompt("which fruit to buy?","apple")
let bag={
    [fruit]:5,

}
console(bag.apple);

let message="Hello"
let pharse=message
let user={
    name:"John"
};

let user={name:"JOhn"}
let admin=user;
admin.name='Pete';
console.log(user.name)


let a={}
let b=a;
console.log(a==b);
console.log(a===b);


let user={
    name:"John",
    age:30
};
console.log(clone.name);
console.log(colne.age)


let user={
    name:"JOhn",
    sizes:{
        height:182,
        width:50
    }
};
let clone=object.assign({},user);
console.log(user.sizes===clone.sizes);

user.sizes.width=60;
console.log(clone.sizes.width);  

let user={
    name:"John",
    sizes:{
        height:182,
        width:50
    }
};
let clones=structuredClone(user);
console.log(user.sizes===clone.size);
user.size.width=60;
console.log(clone.sizes.width);


let user={};
user.me=user;
let clone1=structuredClone(user)
console.log(clone.me===clone);

structuredClone({
    f:function(){}
});


function marry(man,woman){
    woman.husband=man;
    man.wife=woman;

    return{
        father:man,
        mother:woman
    }
}
let family=marry({
    name:"john"
},{
    name:"Ann"
})


let user={
    name:"John",
    age:30
};
user.sayHi=function(){
    console.log("Hello!");
}
user.sayHi();


user={
    sayHi:function(){
        console.log("Hello");
    }
}
user={
    sayHi(){
        console.log("Hello")
    }
}

let user={
    name:"John",
    age:30,
    sayHi(){
        console.log(this.name)
    }
    
}

let user={
    name:"John",
    age:30,
    sayHi(){
        console.log(user.name)
    }
}

let user={
    name:"john",
    age:30,
    sayHi(){
        console.log(user.name);
    }
}
let admin=user;
user=null;
admin.sayHi();

let user={name:"JOhn"};
let admin={name:"Admin"};
function sayHi(){
    console.log(this.name)
}
user.f=sayHi;
admin.f=sayHi;

user.f();
admin.f();
admin['f']();


function sayHi(){
    console.log(this);

}
sayHi();




