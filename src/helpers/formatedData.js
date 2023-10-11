
export const formatedPrice = (price) => {
    const formatter = new Intl.NumberFormat("de-DE", {
      style: 'decimal',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,

    });
    return formatter.format(price);
  }


  export const formatedMillion = (price) => {
    const formatter = new Intl.NumberFormat("de-DE", {
      style: 'decimal',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,

    });
    return formatter.format(price/1000000);
  }
    

  export const formatedPercent= (value) => {
    return  Number(value).toFixed(2);
  }