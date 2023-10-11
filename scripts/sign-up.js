// // validtion code for inputs 
// const email = document.forms['from']['email']; 
// const password = document.forms['from']['password']; 
// const form = document.querySelector('.form');

// form.addEventListener('submit', () => {
//   return validated();
// })
// email.addEventListener('textInput',  emailVerify);
// email.addEventListener('textInput',  emailPassword);

// // const valid = validated();
// function validated(){
//   if(email.value.length < 9){
//     email.style.border = "1px solid red";
//     email.focus();
//     return false;
//   }
// }
// function emailVerify(){
//   if(email.value.length >= 8){
//     email.style.border = "1px solid rgba(128,128,128, 0.5)";
//     return true;
//   }
// }
// function emailPassword(){
//   if(password.value.length >= 8){
//     password.style.border = "1px solid rgba(128,128,128, 0.5)";
//     return true;
//   }
// }
// // console.log(email, password)

class login {
  constructor(form, inputFields){
    this.form = form;
    this.inputFields = inputFields;
    this.validateOnSubmit();
  }

  validateOnSubmit(){
    let self = this;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      let error = 0;

      self.inputFields.forEach((inputFields) => {
        const input = document.querySelector(`#${inputFields}`);

        if(self.validateFields(input) === false){
          error++;
        }

      })
      if(error === 0){
        // console.log('successful');

        // do loin api here 
        localStorage.setItem('auth', 1);
        window.location.replace('/')
        this.form.submit();
      }
    })
  }

  validateFields(inputFields){
    if(inputFields.value.trim() == ''){
      this.setStatus(
        inputFields,
        `${inputFields.previousElementSibling.innerText} cannot be blank`,
        'error'
      )
      return false;
    }else {
      if(inputFields.type === 'password'){
        if(inputFields.value.length < 8){
          this.setStatus(
            inputFields,
            `${inputFields.previousElementSibling.innerText} must be at least 8 characters`,
            'error'
          );
          return false;
        }else{
          this.setStatus(inputFields, null, 'success');
          return true;
        }
      }else{
        this.setStatus(inputFields, null, 'success');
        return true;
      }
    }
  }

  setStatus(inputFields, message, status){
    const errorMessage = inputFields.parentElement.querySelector('.error-message');
    if(status === 'success'){
      if(errorMessage){
        errorMessage.innerText = '';
      }
      errorMessage.classList.remove('error-message');
    }

    if(status === 'error'){
      errorMessage.innerText = message;
      inputFields.classList.add('error-message');
    }
  }
}

const form = document.querySelector('.js-login-form');
if(form){
  const inputFields = ['email', 'password'];
  const validator = new login(form, inputFields);
}


