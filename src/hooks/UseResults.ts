import { useEffect, useState } from "react";
import axios from "../api/yelp";
import {Business, BusinessResponse} from "../screens/BusinessResponse";

export const useResults = () => {
  // const [errorMessage, setErrorMessage] = useState<string>("");
  const [results, setResults] = useState<Business[]>([]);

  const searchApi = async (search: string) => {
    try {
      const response = await axios.get<BusinessResponse>("/search", {
        params: {
          limit: 50,
          term: search,
          location: 'san jose'
        }
      });
      const data: BusinessResponse = response.data;
      console.log(data.businesses);
      setResults(data.businesses);
    } catch (error: any) {
      console.log(error);
      // setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return[searchApi,  results/*,errorMessage,setErrorMessage*/];
};

