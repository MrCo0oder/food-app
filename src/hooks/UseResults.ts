import { useEffect, useState } from "react";
import {yelp} from "../api/yelp";
import { Business, BusinessResponse } from "../screens/home/BusinessResponse";

export default function useResults(): [
  (search: string) => Promise<void>,
  Business[],
  string,
  React.Dispatch<React.SetStateAction<string>>,
  boolean
] {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [results, setResults] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchApi = async (search: string) => {
    setIsLoading(true);
    try {
      const response = await yelp().get<BusinessResponse>("/search", {
        params: {
          limit: 50,
          term: search,
          location: "san jose",
        },
      });
      const data: BusinessResponse = response.data;
      console.log(data.businesses);
      setResults(data.businesses);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMessage, setErrorMessage, isLoading];
}
