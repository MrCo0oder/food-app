import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AppStackParamList } from "../../navigation/AppStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import GalleryList from "../../components/GalleryList";
import { useQuery } from "react-query";
import { SingleBusinessResponse } from "./SingleBusinessResponse";
import { yelp } from "../../api/yelp";

type detailsScreenProps = NativeStackScreenProps<AppStackParamList, "Details">;

const DetailsScreen = ({ navigation, route }: detailsScreenProps) => {
  const item = route.params;
  // Use the item.id in the query key to make it dynamic
  const { isLoading, data, isError, error } = useQuery(
    ["details", item.id],
    () => yelp().get<SingleBusinessResponse>(`/${item.id}`)
  );

  return isLoading ? (
    <ActivityIndicator
      animating={isLoading}
      size={36}
      color="#888"
      style={{ alignSelf: "center" } && styles.progressStyle}
    />
  ) : isError ? (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        {error instanceof Error ? error.stack : "An error occurred"}
      </Text>
    </View>
  ) : (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Gallery</Text>
      <GalleryList
        results={data?.data.photos}
        onPress={(url) => {
          navigation.navigate("ShowImage", { url });
        }}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  progressStyle: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  snackBarStyle: {
    position: "absolute",
    start: 16,
    end: 16,
    bottom: 16,
    backgroundColor: "red",
    borderRadius: 15,
  },
});
