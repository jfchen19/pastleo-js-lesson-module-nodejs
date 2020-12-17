export const removeGreeting = () => {
  const greetingDiv = document.getElementById('greeting');
  if (greetingDiv) {
    greetingDiv.remove();
  }
}

export const timeoutPromise = ms => new Promise ((resolve, _reject) => {
  setTimeout (() => {
    resolve ();
  }, ms);
})