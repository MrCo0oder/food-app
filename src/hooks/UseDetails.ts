import React, { useEffect, useState } from "react";
import { SingleBusinessResponse } from "../screens/details/SingleBusinessResponse";
import { yelp } from "../api/yelp";
import { useQuery } from "react-query";

export default function useDetails(
  id: string
): [
  SingleBusinessResponse,
  boolean,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (id: string) => Promise<void>
] {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [result, setResults] = useState<SingleBusinessResponse>(null);
  const [isLoading, setIsLoading] = useState(false);
  const getDetails = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await yelp().get<SingleBusinessResponse>(`/${id}`);
      setResults(response.data);
      console.log(response.data);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, []);
  return [result, isLoading, errorMessage, setErrorMessage, getDetails];
}
