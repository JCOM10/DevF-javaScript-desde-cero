document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeUpper = document.getElementById('includeUpper').checked;
    const includeLower = document.getElementById('includeLower').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols);
    document.getElementById('password').textContent = password;
});

function generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let charset = '';
    if (includeUpper) charset += upperChars;
    if (includeLower) charset += lowerChars;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === '') return 'Por favor, selecciona al menos una opción';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}
