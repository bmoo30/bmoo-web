function generateOtp() {
  let digits = '0123456789';
  let OTP = '';
  
  for(let i = 0; i < 6; i++){
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP;
}

function sendOTP() {
  const emailInput = document.getElementById('email');
  // const submit = document.querySelector('.js-form');
  const otpverify = document.getElementsByClassName('otpverify')[0];
  const mainForm = document.querySelector('.main-form');
  const otpInp = document.querySelector('#opt-input');
  const otpBtn = document.querySelector('.opt-btn');
  // submit.addEventListener('submit', (e)=>{
  //   e.preventDefault();
  //   // sendOTP();
  //   // return validateForm()
  //   // signUp(email, password);
  // })
  // OTPVisible;
  
  // let otp = generateOtp();
  let otp = Math.floor(Math.random() *1000000);

  let emailBody = `
  <h1> Welcome to BMO group of banking </h2>
  <h2> Your OTP is </h2> ${otp}
  `;
  
  Email.send({
    SecureToken : "f5aa37ee-bee0-41d8-9596-073b787babdc",
    To : emailInput.value,
    From : "karenmayortega76@gmail.com",
    Subject : "This is from BMO group of banking",
    Body : emailBody
  }).then(
    message => {
      if(message === 'OK'){
        alert(`OTP sent to your ${emailInput.value}`);
        otpverify.style.display = "block";
        mainForm.style.display = "none";

        otpBtn.addEventListener('click', (e)=>{
          e.preventDefault()
          if(otpInp.value == otp){
            alert('Email address verified...')
            window.location.replace('/index.html')
          }else{
            alert('invalid')
          }
        })
      }else{
        alert('Please enter email and password to recieve otp');
      }
    }
  );
}

// Make the OTP input available
// function makeOTPVisible(){

//   let signUpBtn = document.querySelector('.js-sign-in-button');
//   let optForm = document.getElementById('opt-form-hide');
//   let signUpForm = document.getElementById('js-form-hide');
//   const otpInp = document.getElementById('opt-input');
//   const otpBtn = document.querySelector('.opt-btn'); 

  
//   signUpBtn.addEventListener('click', () => {
//     // e.preventDefault(); // Prevent form submission
//     sendOTP();   
//     console.log('clicked')
//     optForm.style.display = 'block'
//     optForm.style.display = 'flex'
//     signUpForm.style.display = 'none' 
//   });
  
//   otpBtn.addEventListener('click', ()=> {
//     // let check weather the otp sent was valid 
//     if(otpInp.value === otp){
//       alert('Email address verified...')
//     }else{
//       alert('Invalid OTP');
//     }
//   });
// }
// let OTPVisible = makeOTPVisible();

// function validateForm() {
//   let password= document.getElementById("password").value;
//   let email = document.getElementById("email").value;

//   if (password === "") {
//     alert("Name must be filled out");
//     return false;
//   }else{
//     if(password ){
      
//     }
//   }

//   if (email === "") {
//     alert("Email must be filled out");
//     return false;
//   }
// }