function waitForPasswordsToMatch(passwordInput, confirmPasswordInput) {
    return new Promise((resolve, reject) => {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === "") {
            reject(new Error("Password can't be an empty string"));
        } else if (password === confirmPassword) {
            resolve();
        } else {
            reject(new Error("Passwords do not match"));
        }
    });
}

const passwordInput = document.querySelector('#password-input');
const confirmPasswordInput = document.querySelector('#confirm-password-input');
const resultMessage = document.querySelector('#result-message');


passwordInput.addEventListener('input', () => {
    validatePasswords();
});

confirmPasswordInput.addEventListener('input', () => {
    validatePasswords();
});

function validatePasswords() {
    waitForPasswordsToMatch(passwordInput, confirmPasswordInput)
        .then(function() {
            resultMessage.textContent = 'Passwords match';
        })
        .catch(function(error) {
            resultMessage.textContent = error.message;
        });
}

// //// Validaton with button ///
// function waitForPasswordsToMatch(passwordInput, confirmPasswordInput) {
//     return new Promise((resolve, reject) => {
//         const password = passwordInput.value;
//         const confirmPassword = confirmPasswordInput.value;
//
//         if (password === "") {
//             reject(new Error("Password can't be an empty string"));
//         } else if (password === confirmPassword) {
//             resolve();
//         } else {
//             reject(new Error("Passwords do not match"));
//         }
//     });
// }
//
// const passwordInput = document.querySelector('#password-input');
// const confirmPasswordInput = document.querySelector('#confirm-password-input');
// const validateButton = document.querySelector('#validate-button');
// const resultMessage = document.querySelector('#result-message');
//
// validateButton.addEventListener('click', () => {
//     waitForPasswordsToMatch(passwordInput, confirmPasswordInput)
//         .then(function() {
//             resultMessage.textContent = 'Passwords match';
//         })
//         .catch(function(error) {
//             resultMessage.textContent = error.message;
//         });
// });