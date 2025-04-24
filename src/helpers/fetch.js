const API_URL = process.env.REACT_APP_URL_ALL_CRYPTOS;
const API_KEY = process.env.REACT_APP_COINCAP_API_KEY;

const fetchAllCryptos = async () => {
  let url = `${API_URL}?apiKey=${API_KEY}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const fetchHistory = async (id, interval) => {
  let url = `${API_URL}/${id}/history?interval=${interval}&apiKey=${API_KEY}`;
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
  return data;
};

const fetchCrypto = async id => {
  let url = `${API_URL}/${id}?apiKey=${API_KEY}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export { fetchAllCryptos, fetchCrypto, fetchHistory };
