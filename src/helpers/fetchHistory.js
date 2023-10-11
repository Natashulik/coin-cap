export const fetchHistory = async (id) => {
    let url = `${process.env.REACT_APP_URL_ALL_CRYPTOS}/${id}/history?interval=h1`
     const result = await fetch(url);
     const data = await result.json();
     return data;
   }

 
   