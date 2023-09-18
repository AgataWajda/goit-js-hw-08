import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let formData = {
  email: '',
  message: '',
};


if (localStorage.getItem(localStorageKey)) {  
  formData = JSON.parse(localStorage.getItem(localStorageKey));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
 }

const formUpdate = throttle(() => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
 
}, 500);

form.addEventListener('input', formUpdate);

 form.addEventListener("submit", (event) => {
   event.preventDefault();
  if(form.elements.email.value === "" && form.elements.message.value === "") {
    console.log("Please, input values ;)") ;
    return ;
  }
   console.log(formData) ;
  localStorage.removeItem(localStorageKey);
   form.reset();
 });
