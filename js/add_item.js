const btn = document.getElementById('add-trade');
const formModal = document.getElementById('form-modal');


btn.onclick = () => {
    formModal.style.display = 'block';
    document.body.style.overflow='hidden'
}