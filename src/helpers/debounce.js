let myTimeOut = null;
export const debounce = (callback, times, value) => {
  if (myTimeOut) {
    clearTimeout(myTimeOut);
  }

  myTimeOut = setTimeout(() => {
    callback(value);
  }, times);
};
