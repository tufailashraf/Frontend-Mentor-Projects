const resultDiv = document.querySelector('#results');
const btn = document.querySelector('#getData');

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        console.log(data.slip)
        console.log(data.slip.advice);
        console.log(data.slip.id);
        const adviceObj = data.slip;
        resultDiv.innerHTML = `<div class="advice-id">ADVICE # ${adviceObj.id}</div><p>"${adviceObj.advice}"</p>`;
      })
      .catch(error => console.error('Error fetching advice:', error));
  }
getAdvice();  

btn.addEventListener('click', getAdvice);