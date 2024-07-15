// src/api/index.js
export const fetchSmartphones = async () => {
    const response = await fetch('/api/smartphones');
    const data = await response.json();
    return data;
  };
  
  export const fetchSmartwatches = async () => {
    const response = await fetch('/api/smartwatches');
    const data = await response.json();
    return data;
  };
  