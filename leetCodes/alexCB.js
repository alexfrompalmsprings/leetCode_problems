/*
____    _    _     _     ____    _    ____ _  __
/ ___|  / \  | |   | |   | __ )  / \  / ___| |/ /
| |     / _ \ | |   | |   |  _ \ / _ \| |   | ' / 
| |___ / ___ \| |___| |___| |_) / ___ \ |___| . \ 
\____/_/   \_\_____|_____|____/_/   \_\____|_|\_\
*/                                                 

function alexCB(cb, errorCB) {

  //some of the variable that we need to check

  let alexGyms = false; // if he gyms hes happy
  let alexSleps = 6 // if he sleeps more than 6 hours he's happy

  // the first conditional statement checks if alex did not got the gym
  if (alexGyms) {
    errorCB({
      name: 'Alex',
      message: 'I am so happy for the gains! Lets keep it going bro'
    })
  } else if (alexSleps > 7){
    errorCB({
      name: 'Alex',
      message: 'Is GRUMPY. He did not sleep for at least 7 hours'
    })
  } else {
    cb('OHH NO!! He is not rested or with gains. Hes probably mad!')
  }
}

alexCB(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})

/*
____  ____   ___  __  __ ___ ____  _____
|  _ \|  _ \ / _ \|  \/  |_ _/ ___|| ____|
| |_) | |_) | | | | |\/| || |\___ \|  _|
|  __/|  _ <| |_| | |  | || | ___) | |___
|_|   |_| \_\\___/|_|  |_|___|____/|_____|

*/


function alexPromise(){
  //some of the variable that we need to check

  let alexGyms = true; // if he gyms hes happy
  let alexSleps = 6 // if he sleeps more than 6 hours he's happy

  // after the vars/ or whatvs are declarered you need to create the promise
  // also it is important to remember to return it

  return new Promise((resolve, reject) => {
    // the first conditional statement checks if alex did not got the gym
    if (alexGyms) {
        reject({
        name: 'Alex',
        message: 'I am so happy for the gains! Lets keep it going bro'
      })
    } else if (alexSleps > 7){
      reject({
        name: 'Alex',
        message: 'Is GRUMPY. He did not sleep for at least 7 hours'
      })
    } else {
      resolve('OHH NO!! He is not rested or with gains. Hes probably mad!')
    }
  })
}

console.log('##########')

alexPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})