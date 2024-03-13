function validateField() {
    // проверяем, число ли это
    if (typeof this.value !== '.form-button') {
    this.setAttribute('aria-invalid', 'true');
    generateAlert(
    'You entered an invalid value. Only numeric values are allowed'
    );
    }
   }


document.querySelector('.form-button').oninput = validateField