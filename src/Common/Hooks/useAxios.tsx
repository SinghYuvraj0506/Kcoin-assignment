import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url: string) => {
  const [data, setdata] = useState<any | undefined>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendRequest = () => {
    setLoading(true);

    axios.get(url)
    .then((response)=>{
        setError("")
        setdata(response?.data)
    })
    .catch(error=>{
        setError(error.message)
    })
    .finally(()=>{
        setLoading(false)
    })
  };

  useEffect(() => {
    sendRequest()
  }, []);


  return {data,loading,error}
};
