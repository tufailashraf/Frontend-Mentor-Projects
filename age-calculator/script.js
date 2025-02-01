const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
    input.setAttribute('pattern', '[0-9]*'); // Allow only numeric input
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        
        if (input.id === "year") {
            input.value = input.value.slice(0, 4); // Allow only 4 digits for the year beacause the maxlength doesn't work with the input[type=button]
        } else {
            input.value = input.value.slice(0, 2); // Allow only 2 digits for day & month
        }
    });
});

let age = document.querySelector('#age');
let date = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let btn = document.querySelector('.btn');

// In the below code d1, m1, y1 is the actual date of birth whereas
// d2, m2, y2 is the current date month year....
// d3, m3, y3 is the calculated age of a person

function calculateAge() {
    let d1 = parseInt(date.value);
    let m1 = parseInt(month.value);
    let y1 = parseInt(year.value);

    // if (isNaN(day) || isNaN(month) || isNaN(year)) {         // incase if we use input[type='text'] instead of input[type='number']
    //     alert("Please enter a valid date.");
    //     return;
    // }

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // Fix month (JavaScript months are 0-based)
    let y2 = today.getFullYear();

    if (d1 > 31 || m1 > 12 || y1 > y2 || (y1 === y2 && m1 > m2) || (y1 === y2 && m1 === m2 && d1 > d2)) {
        alert("Please enter a valid date of birth.");
        return;
    }

    let d3, m3, y3;

    // Adjust days if needed
    if (d1 > d2) {
        m2--;
        d2 += new Date(y2, m2, 0).getDate(); // Get last day of previous month
    }

    // Adjust months if needed
    if (m1 > m2) {
        y2--;
        m2 += 12;
    }

    d3 = d2 - d1;
    m3 = m2 - m1;
    y3 = y2 - y1;

    age.innerHTML = `
        <div><span>${y3}</span> years</div>
        <div><span>${m3}</span> months</div>
        <div><span>${d3}</span> days</div>
    `;
}

btn.addEventListener('click', calculateAge);

// the below eventlister will trigger the Button when a user press the enter key
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission (if inside a form)
        calculateAge();
    }
});

