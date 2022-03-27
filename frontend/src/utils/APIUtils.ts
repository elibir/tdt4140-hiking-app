import axios, { AxiosResponse } from 'axios';
import { PORT, URL } from '../Constants';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const getAdress = () =>  {
  return URL+':'+PORT+'/';
}
/**
 * intern funskjon som bruker axios sin .get() til å gjøre
 * et api kall mot den ønskede URL adressen
 * @param endpoint hvilke spesefike ressurser som skal etterspøres
 * @returns svar fra API-et i json format
 */
 export async function getData(endpoint: string = '', header={}): Promise<any> {
  const response = await axios.get(getAdress()+endpoint, header)
  .then((data: AxiosResponse) => {
    return data;
  })
  .catch(error => {
    console.error('There was an error!', error);
});
  return response 
}

export async function sendData(endpoint: string = '', dataBody: {}, config={}): Promise<any> {
  return await axios.post(getAdress()+endpoint, dataBody, config)
  .then((response: AxiosResponse) => {
    return response.data;
  })
  .catch(error => {
    console.log(getAdress())
    console.error('There was an error!', error);
    return error;
});
}