const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit')


const calculateTemp = (event) => {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case 'celsius':
            fahrenheitInput.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case 'fahrenheit':
            celsiusInput.value = ((currentValue - 32) / 1.8).toFixed(2);
            break;
        default:
            break;
    }
}