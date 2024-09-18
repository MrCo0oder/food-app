import { SingleBusinessResponse } from "../screens/details/SingleBusinessResponse";
import { yelp } from "../api/yelp";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

export default function useDetails(
  id: string
): [AxiosResponse<SingleBusinessResponse>, boolean, boolean, string] {
  const { isLoading, data, isError, error } = useQuery(["details", id], () =>
    yelp().get<SingleBusinessResponse>(`/${id}`)
  );

  return [
    data,
    isLoading,
    isError,
    error instanceof Error ? error.message : "Something went wrong!",
  ];
}
