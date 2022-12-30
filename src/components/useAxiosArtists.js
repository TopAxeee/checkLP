import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosArtists = (url) => {
  const SUBS_URL = "http://3.75.38.7:4184/api/user/subs"
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("token");
  const fetchData = async () => {
      try {
        var config = {
        method: 'get',
        url: SUBS_URL,
        headers: { 
            'Authorization': `Bearer ${token}`
        }
        };

        axios(config)
        .then(function (response) {
        const userData = JSON.stringify(response.data);
        localStorage.setItem("userData", userData)
        console.log(userData);
        });
        }
        catch (error) {
            setIsLoading(false);
            setIsError(true);
            console.log(error);
          }
    }
    const userData = localStorage.getItem("userData");
    // userData = JSON.parse(userData);
    console.log("Nuber 2" + userData);

    useEffect(() => {
      fetchData();
    }, []);
  return { isLoading, isError, data };
};
export default useAxiosArtists;