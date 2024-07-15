// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import { fetchSmartphones, fetchSmartwatches } from '../api';

const useProducts = () => {
  const [smartphoneData, setSmartphoneData] = useState([]);
  const [smartwatchData, setSmartwatchData] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const smartphoneResult = await fetchSmartphones();
        const smartwatchResult = await fetchSmartwatches();

        setSmartphoneData(smartphoneResult);
        setSmartwatchData(smartwatchResult);

        const uniqueManufacturers = [
          ...new Set([...smartphoneResult, ...smartwatchResult].map(item => item.manufacturer))
        ];
        setManufacturers(uniqueManufacturers);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { smartphoneData, smartwatchData, manufacturers, isLoading, error };
};

export default useProducts;

