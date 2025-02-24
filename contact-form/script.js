function myFun() {
    const success = document.querySelector('.success')
    setInterval(() => {
        success.style.display = 'block !important';
    }, 10000);
}
document.getElementById('myForm').addEventListener('submit', function (e) {
    let isValid = true;

    function toggleError(element, show) {
        const errorElem = element.parentElement.querySelector('.error');
        if (errorElem) {
            errorElem.style.display = show ? 'block' : 'none';
        }
    }

    const inputs = this.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputs.forEach(function (input) {
        input.style.border = '';
        toggleError(input, false);

        if (input.value.trim() === '') {
            input.style.border = '1px solid hsl(0, 66%, 54%)';
            toggleError(input, true);
            isValid = false;
        }

        if (input.type === 'email' && input.value.trim() !== '') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value.trim())) {
                input.style.border = '1px solid hsl(0, 66%, 54%)';
                toggleError(input, true);
                isValid = false;
            }
        }
    });

    const textArea = this.querySelector('textarea');
    if (textArea) {
        textArea.style.border = '';
        toggleError(textArea, false);

        if (textArea.value.trim() === '') {
            textArea.style.border = '1px solid hsl(0, 66%, 54%)';
            toggleError(textArea, true);
            isValid = false;
        }
    }

    const radioButtons = this.querySelectorAll('input[type="radio"][name="queType"]');
    const radioContainer = this.querySelector('.query-type');
    if (radioButtons.length) {
        let isRadioChecked = false;
        radioButtons.forEach(function (radio) {
            radio.style.outline = '';
            if (radio.checked) {
                isRadioChecked = true;
            }
        });

        const radioError = radioContainer.querySelector('.error');
        if (!isRadioChecked) {
            if (radioError) {
                radioError.style.display = 'block';
            }
            isValid = false;
        } else {
            if (radioError) {
                radioError.style.display = 'none';
            }
        }
    }

    const checkbox = this.querySelector('input[type="checkbox"][name="terms"]');
    if (checkbox) {
        checkbox.style.outline = '';
        const checkboxContainer = checkbox.parentElement;
        const checkboxError = checkboxContainer.parentElement.querySelector('.error');
        if (!checkbox.checked) {
            if (checkboxError) {
                checkboxError.style.display = 'block';
            }
            isValid = false;
        } else {
            if (checkboxError) {
                checkboxError.style.display = 'none';
            }
        }
    }

    if (!isValid) {
        e.preventDefault();
    }
});

const radios = document.querySelectorAll('input[name="queType"]');
radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        radios.forEach(function(r) {
            r.parentElement.style.backgroundColor = '';
            r.parentElement.style.borderColor = '';
        });
        if (this.checked) {
            this.parentElement.style.backgroundColor = 'hsl(148, 38%, 91%)';
            this.parentElement.style.borderColor = 'hsl(169, 82%, 27%)';
        }
    });
});
