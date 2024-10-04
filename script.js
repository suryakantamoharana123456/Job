const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phone-number');
    const password = document.getElementById('password');

    const errorMessages = [
        { element: firstName, message: 'First name is required' },
        { element: lastName, message: 'Last name is required' },
        { element: email, message: 'Invalid email format' },
        { element: phoneNumber, message: 'Invalid phone number format' },
        { element: password, message: 'Password must be at least 8 characters' },
    ];

    let isValid = true;

    errorMessages.forEach(({ element, message }) => {
        const value = element.value.trim();

        if (element === firstName || element === lastName) {
            if (value.length === 0) {
                element.nextElementSibling.innerText = message;
                isValid = false;
            } else {
                element.nextElementSibling.innerText = '';
            }
        } else if (element === email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                element.nextElementSibling.innerText = message;
                isValid = false;
            } else {
                element.nextElementSibling.innerText = '';
            }
        } else if (element === phoneNumber) {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(value)) {
                element.nextElementSibling.innerText = message;
                isValid = false;
            } else {
                element.nextElementSibling.innerText = '';
            }
        } else if (element === password) {
            if (value.length < 8) {
                element.nextElementSibling.innerText = message;
                isValid = false;
            } else {
                element.nextElementSibling.innerText = '';
            }
        }
    });
    if (isValid) {
        const formData = {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value,
            phone_number: phoneNumber.value,
            password: password.value,
        };
        console.log(formData);
        alert("Successfully submitted")
    }
});



