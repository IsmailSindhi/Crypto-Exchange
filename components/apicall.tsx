import axios from "axios";

export async function getAllCryptocurrencies() {
  const response = await axios.get("https://api.easybit.com/currencyList", {headers : { "API-KEY": "test_G5Qe3HIcf0vxqesnfDeT7e2Ma"}})
  return response.data;
}
