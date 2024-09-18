import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Business } from "../screens/home/BusinessResponse";
import DetailsScreenRQ from "../screens/detailsRQ/DetailsScreenRQ";
import { ParamListBase } from "@react-navigation/native";
import Constants from "../common/Constants";

export interface AppStackParamList extends ParamListBase {
  Home: undefined;
  Details: Business;
}
const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Constants.HOME}
        component={HomeScreen}
        options={{
          headerTitle: "BUSINESS SEARCH",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={Constants.DETAILS}
        component={DetailsScreenRQ}
        options={{
          headerTitle: "DETAILS",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
