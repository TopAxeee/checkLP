import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosRelease = (url) => {
  const SEARCH_URL = "http://3.75.38.7:4184/api/release"
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("token");
  const fetchData = async () => {
      try {
        var config = {
        method: 'get',
        url: SEARCH_URL,
        headers: { 
            'Authorization': `Bearer ${token}`
        }
        };

        axios(config)
        .then(function (response) {
        const releaseData = JSON.stringify(response.data);
        localStorage.setItem("releaseData", releaseData)
        console.log(releaseData);
        });
        }
        catch (error) {
            setIsLoading(false);
            setIsError(true);
            console.log(error);
          }
    }
    const releaseData = localStorage.getItem("releaseData");
    // userData = JSON.parse(userData);
    console.log("Nuber search" + releaseData);

    useEffect(() => {
      fetchData();
    }, []);
  return { isLoading, isError, data };
};
export default useAxiosRelease;