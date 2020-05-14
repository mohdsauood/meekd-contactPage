const form = document.querySelector('.contact_content form');
const email = document.querySelector('#email');
const name = document.querySelector('#name');
const phone = document.querySelector('#phoneNo');
const textArea = document.querySelector('#textArea');
const submitButton = document.querySelector('#submit');
let submitButtonFlag = false;
const menuButton= document.querySelector('.menuButton');
const redText = function (e) {
    e.srcElement.classList.add('red');
}
const showError = function (e) {
    if (submitButtonFlag) {
        const existingsubmitErrorSpan=document.querySelector('.input_error');
        if(!existingsubmitErrorSpan)
        {
            const submitErrorSpan=document.createElement('span');
            submitErrorSpan.textContent="Fill The Required Details";
            submitErrorSpan.classList.add('input_error');
             submitButton.after(submitErrorSpan);
        }
        else{
            existingsubmitErrorSpan.textContent="Fill The Required Details";
        }
        
    } else {
        const existingSpan = document.querySelector('.input_error');
        if (!existingSpan) {
            const errorSpan = document.createElement('span');
            errorSpan.classList.add('input_error');
            if (e.srcElement.validity.valueMissing) {
                errorSpan.textContent = `enter your ${e.srcElement.id}`;
                e.srcElement.after(errorSpan);
            } else {
                errorSpan.textContent = `${e.srcElement.id} not valid`;
                e.srcElement.after(errorSpan);
            }
        } else {
            if (e.srcElement.validity.valueMissing) {
                existingSpan.textContent = `enter your ${e.srcElement.id}`;
                e.srcElement.after(existingSpan);
            } else {
                existingSpan.textContent = `${e.srcElement.id} not valid`;
                e.srcElement.after(existingSpan);
            }
        }
    }
}
const checkValid = function (e) {
    if (e.srcElement.validity.valid && !e.srcElement.validity.valueMissing) {
        const errorSpan = document.querySelector('.input_error');
        (errorSpan) ? errorSpan.remove(): '';
    } else {
        showError(e);
    }
}

const checkValidStatus = function () {
    if ((name.validity.valid && !name.validity.valueMissing) && (email.validity.valid && !email.validity.valueMissing) && (phone.validity.valid && !phone.validity.valueMissing)&& (textArea.validity.valid && !textArea.validity.valueMissing)) {
        const errorSpan = document.querySelector('.input_error');
        (errorSpan) ? errorSpan.remove(): '';
        return true;
    } else {
        return false;
    }
}

const showMessage = function () {
    const mspan = document.createElement('span');
    mspan.classList.add('message');
    mspan.textContent = 'we\'ll contact you soon';
    textArea.after(mspan);
    setTimeout(() => {
        mspan.remove();
    }, 2500)
}
name.addEventListener('input', checkValid);
email.addEventListener('input', checkValid);
phone.addEventListener('input', checkValid);
submitButton.addEventListener('click', (e) => {
    if (checkValidStatus()) {
        submitButtonFlag = false;
        email.value = "";
        phone.value = "";
        name.value = "";
        textArea.value = "";
        console.log('we will contact you soon');
        e.preventDefault();
        showMessage();
    } else {
        submitButtonFlag = true;
        showError();
        submitButtonFlag = false;
        e.preventDefault();
    }
});
menuButton.addEventListener('click',()=>{
    const navElement=document.querySelector('nav ul');
    navElement.classList.toggle('displayNav');
    const navLi=document.querySelectorAll('nav li');
    navLi.forEach((item)=>{
        item.classList.add('displayBlock');
    })
})


