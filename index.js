const toggleButton = document.querySelector('.switch input');
const basicPrice = document.querySelector('#basic-price');
const proPrice = document.querySelector('#pro-price');
const masterPrice = document.querySelector('#master-price')

toggleButton.addEventListener('click', function() {
  if (toggleButton.checked) {
    basicPrice.textContent = '19.99'; // Change the text to the new price
    proPrice.textContent = '24.99';
    masterPrice.textContent = '39.99'
  } else {
    basicPrice.textContent = '199.99'; // Change the text back to the original price
    proPrice.textContent = '249.99';
    masterPrice.textContent = '399.99'
  }

});