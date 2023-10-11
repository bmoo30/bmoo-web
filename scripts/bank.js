// const transactions = [-65, 6500, 17550];
// let totalBalance = document.querySelector('.total-balance'). innerHTML = transactions.reduce( totalBlalance)
// function totalBlalance(total, num){
//   return `USD ${total, num}`  ;
//   // console.log(total, num)
// }
// // totalBlalance(total, num);

const signOutBtnn = document.querySelector('.js-sign-out');
signOutBtnn.addEventListener('click', () => {
  window.location.replace('/sign-in.html')
})