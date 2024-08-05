import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import DetailsScreen from "../screens/home/details/DetailsScreen";
import { Business } from "../screens/home/BusinessResponse";


export type AppStackParamList = {
  Home: undefined;
  Details:Business;
}

const Stack = createNativeStackNavigator<AppStackParamList>();


export const  AppStack=()=> {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerTitle: "BUSINESS SEARCH",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{
            headerTitle: "DETAILS",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
  );
}