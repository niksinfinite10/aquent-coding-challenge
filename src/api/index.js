import fetch from 'isomorphic-fetch';

 export const getAllPizza = () => {
  return new Promise((resolve, reject) => {
    fetch('../../pizza.json').then((res) => {
      if(res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    }).then((data) => {
      resolve(data);
    }).catch(error => { reject(error); });
  });
};
