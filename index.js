function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'u' && password === 'p') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('menu-container').style.display = 'block';
    } else {
        alert('Invalid login credentials');
    }
}

function showCalculation(type) {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('calculation-container').style.display = 'block';
    document.getElementById('calc-title').innerText = type.charAt(0).toUpperCase() + type.slice(1);
}

function calculate() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    let result;

    if (document.getElementById('calc-title').innerText === 'Addition') {
        result = value1 + value2;
    } else if (document.getElementById('calc-title').innerText === 'Subtraction') {
        result = value1 - value2;
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}
