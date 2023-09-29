import axios from "axios";

export async function convertCurrency(amount, fromCurrency, toCurrency) {
  try {
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.data;
    const convertedAmount = amount * data.rates[toCurrency];

    console.log(convertedAmount);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

convertCurrency(100, "USD", "IDR");
