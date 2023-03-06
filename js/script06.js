const number = parseInt(prompt('Digite um número: '));

for(let i = 0; i <= number; i++){
    number % i === 0 ? document.getElementById('info').innerHTML += `${i}` : '';
}
