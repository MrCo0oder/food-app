import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Business } from "../screens/home/BusinessResponse";
import DetailsScreenRQ from "../screens/detailsRQ/DetailsScreenRQ";
import ShowImage from "../screens/showImage/ShowImage";
import { ParamListBase } from "@react-navigation/native";

export interface AppStackParamList extends ParamListBase {
  Home: undefined;
  Details: Business;
  ShowImage: Url;
}
type Url = { url: string };
const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "BUSINESS SEARCH",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreenRQ}
        options={{
          headerTitle: "DETAILS",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ShowImage"
        component={ShowImage}
        options={{
          headerShown: false,
          statusBarTranslucent: true,
        }}
      />
    </Stack.Navigator>
  );
};
