/* eslint-disable no-unused-vars */
import data from "../data/data.json";





export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      
    setTimeout(() => {
      resolve(data.json);
    }, 2000);
  });
};


