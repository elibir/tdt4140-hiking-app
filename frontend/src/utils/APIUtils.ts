import axios, { AxiosResponse } from 'axios';
import { PORT, URL } from '../Constants';


/**
 * intern funskjon som bruker axios sin .get() til å gjøre
 * et api kall mot den ønskede URL adressen
 * @param endpoint hvilke spesefike ressurser som skal etterspøres
 * @returns svar fra API-et i json format
 */
 export async function getData(endpoint: string = ''): Promise<any> {
  const response = await axios.get(URL+':'+PORT+'/'+endpoint)
  .then((data: AxiosResponse) => {
    return data;
  })
  .catch(error => {
    console.error('There was an error!', error);
});
  return response 
}