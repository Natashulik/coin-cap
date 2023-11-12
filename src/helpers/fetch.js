const fetchAllCryptos = async () => {
  let url = `${process.env.REACT_APP_URL_ALL_CRYPTOS}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const fetchHistory = async (id, interval) => {
  let url = `${process.env.REACT_APP_URL_ALL_CRYPTOS}/${id}/history?interval=${interval}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const fetchCrypto = async (id) => {
  let url = `${process.env.REACT_APP_URL_ALL_CRYPTOS}/${id}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export { fetchAllCryptos, fetchCrypto, fetchHistory };
