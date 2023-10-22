export const fetchHistory = async (id, interval) => {
  let url = `${process.env.REACT_APP_URL_ALL_CRYPTOS}/${id}/history?interval=${interval}`
  const result = await fetch(url);
  const data = await result.json();
  return data;
}


