function getID(elemenmt) {
    return document.getElementById(elemenmt);
}
const weaight = getID(`weaight`);
const weaightGram = getID(`weaightGram`);
const height = getID(`height`);
const inchi = getID(`inchi`);
const calculate = getID(`calculate`);
const bmiForm = getID(`bmiForm`);
const result = getID(`result`);
const quotesPlacement = getID(`QuteContent`);
const authorPLacement = getID(`authorElement`);

function convertFeetToSquareMetter(foot, inch) {
    // convert foot to inch
    let footToInchi = Number(foot) * 12;
    let totallInchi = footToInchi + Number(inch);
    console.log(inch);

    console.log(`total inchi ${totallInchi}`);
    let inchToMeter = totallInchi * 0.0254;
    console.log(`total meter ${inchToMeter}`);

    let sqaure = inchToMeter * inchToMeter;
    console.log(`total sqare meter ${sqaure}`);

    return Number(sqaure);
}

function createValidWeaight(Kg, Gram) {
    let kgToGram = Kg * 1000;
    let x = Number(kgToGram);
    let y = Number(Gram);
    let a = x + y;
    let finalWeaihgt = a / 1000;
    return finalWeaihgt;
}

//The formula is BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.

bmiForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const squareMeter = convertFeetToSquareMetter(height.value, inchi.value);
    console.log(squareMeter);
    const wv = weaight.value;
    const wvg = weaightGram.value;
    const getWeaight = createValidWeaight(wv, wvg);
    if (getWeaight > 110) {
        alert(`Are You Sure? Your inserted weaight is ${getWeaight}KG`);
    }
    const findBmi = getWeaight / squareMeter;

    if (squareMeter == "" || getWeaight == "") {
        {
            alert("Oops! Validation failed!");
            // returnToPreviousPage();
            // return false;
        }
    }
    if (getWeaight < squareMeter) {
        alert(
            `Are you kidding Me? your weaight is ${getWeaight} and your height is ${height.value}. witch is learger than your weaight. But Ok I will allow it`
        );
        result.innerText = findBmi.toFixed(2);
    }
    if (squareMeter > 2.438) {
        alert(
            `usally a common person height is around 4.5 to 6.5 but insert a height that over 8 feet. are you sure?`
        );
        result.innerText = findBmi.toFixed(2);
    }
    if (findBmi < 18.5) {
        result.classList.add(`bmiDanger`);
        result.innerText = `Sorry, your bmi is below standerd.your body mass index is ${findBmi.toFixed(
      2
    )}`;
    }

    if (findBmi > 18.5 && findBmi < 24.9) {
        result.classList.add(`bmiRight`);
        result.innerText = `Wow, your bmi is  standerd.your body mass index is ${findBmi.toFixed(
      2
    )}`;
    }
    if (findBmi > 25 && findBmi < 29.9) {
        result.classList.add(`bmiDanger`);
        result.innerText = `ops, your bmi is over the standerd.your body mass index is ${findBmi.toFixed(
      2
    )}`;
    }
    if (findBmi >= 30) {
        result.classList.add(`bmiDanger`);
    }
    console.log(` total bmi is ${findBmi}`);

    // If your BMI is less than 18.5, it falls within the underweight range.
    // If your BMI is 18.5 to 24.9, it falls within the normal or Healthy Weight range.
    // If your BMI is 25.0 to 29.9, it falls within the overweight range.
    // If your BMI is 30.0 or higher, it falls within the obese range.

    // result.innerText = `your body mass index is ${findBmi.toFixed(2)}`;
});

// accordion

let acc = document.getElementsByClassName("parent");
let panel = document.getElementsByClassName("answer");

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains("active");
        setClass(acc, "active", "remove");
        setClass(panel, "show", "remove");

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    };
}

function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

const personalApi = [{
        content: `Health is not valued till sickness comes.`,
        author: `Thomas Fuller`,
    },
    {
        content: `Good health is not something we can buy. However, it can be an extremely valuable savings account.`,
        author: `Anne Wilson Schaef`,
    },
    {
        content: `He who has health, has hope; and he who has hope, has everything.`,
        author: `Thomas Carlyle`,
    },
    {
        content: `It is health that is real wealth and not pieces of gold and silver.`,
        author: `Mahatma Gandhi`,
    },
    {
        content: `Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.`,
        author: `Denis Waitley`,
    },
    {
        content: `The human body is the best picture of the human soul..`,
        author: `Ludwig Wittgenstein`,
    },
    {
        content: `Take care of your body. It's the only place you have to live..`,
        author: `Jim Rohn`,
    },
];
// console.log(Quotes);

// display rendom quatos
let qts = personalApi[Math.floor(Math.random() * personalApi.length)];

authorPLacement.innerText = qts.author;

quotesPlacement.innerText = qts.content;