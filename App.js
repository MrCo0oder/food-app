import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./src/navigation/AppStack";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
