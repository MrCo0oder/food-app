import { yelp } from "../api/yelp";
import { Business, BusinessResponse } from "../screens/home/BusinessResponse";
import { useQuery } from "react-query";

export default function useResults(
  search: string
): [Business[], boolean, boolean, string | null, () => void] {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["searchResults", search],
    () =>
      yelp().get<BusinessResponse>("/search", {
        params: {
          limit: 50,
          term: search,
          location: "london",
        },
      }),
    {
      retry: 2,
      staleTime: 1000 * 60 * 5, // Cache results for 5 minutes
    }
  );

  const businesses = data?.data.businesses ?? [];

  return [
    businesses,
    isLoading,
    isError,
    error instanceof Error ? error.message : "Something went wrong!",
    refetch,
  ];
}
