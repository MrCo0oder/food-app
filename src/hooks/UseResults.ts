import React from "react";
import { yelp } from "../api/yelp";
import { Business, BusinessResponse } from "../screens/home/BusinessResponse";
import { useQuery } from "react-query";

export default function useResults(
  search: string
): [Business[], boolean, boolean, string | null, () => void] {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch, // Destructure the refetch function
  } = useQuery(
    ["searchResults", search], // Dynamic query key with search term
    () =>
      yelp().get<BusinessResponse>("/search", {
        params: {
          limit: 50,
          term: search,
          location: "london",
        },
      }),
    {
      // enabled: !!search, // Avoid querying when search is empty
      retry: 2, // Retry twice in case of failure
      staleTime: 1000 * 60 * 5, // Cache results for 5 minutes
    }
  );

  const businesses = data?.data.businesses ?? [];

  return [
    businesses, // List of businesses or empty array
    isLoading,  // Boolean indicating if data is loading
    isError,    // Boolean indicating if there was an error
    error instanceof Error ? error.message : "Something went wrong!",
    refetch, // Return the refetch function to manually refresh data
  ];
}
