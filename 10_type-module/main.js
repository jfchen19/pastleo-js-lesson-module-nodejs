import { removeGreeting } from './utils.js'
import addOne from './addOne.js'

const timeoutPromise = ms => new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
})

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-one').addEventListener('click', async () => {
    removeGreeting ()

    addOne()
  })

  document.getElementById('add-three').addEventListener('click', () => {
    removeGreeting ()

    Array(3).fill().forEach(async () => {
      addOne ()
    });
  })
})
