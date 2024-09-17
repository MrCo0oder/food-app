import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { AppStackParamList } from "../../../navigation/AppStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useDetails from "../../../hooks/UseDetails";
import GalleryList from "../../../components/GalleryList";
import { Backdrop, Snackbar } from "@react-native-material/core";
import Carousel from "react-native-snap-carousel";

type detailsScreenProps = NativeStackScreenProps<AppStackParamList, "Details">;

const DetailsScreen = ({ route }: detailsScreenProps) => {
  const item = route.params;
  const [result, isLoading, errorMessage, setErrorMessage, getDetails] =
    useDetails();

  useEffect(() => {
    getDetails(item.id);
  }, [item]);
  function showSnackbar() {
    return (
      <Snackbar
        message={errorMessage}
        action={
          <TouchableOpacity
            onPress={() => {
              setErrorMessage("");
            }}
          >
            <Text style={{ color: "#fff" }}>{"Dismiss"}</Text>
          </TouchableOpacity>
        }
        style={styles.snackBarStyle}
      />
    );
  }
  const width = Dimensions.get('window').width;

  return isLoading ? (
    <ActivityIndicator
      animating={isLoading}
      size={36}
      color="#888"
      style={{ alignSelf: "center" } && styles.progressStyle}
    />
  ) : errorMessage ? (
    showSnackbar()
  ) : (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Gallery</Text>
      {/* <GalleryList results={result?.photos} /> */}
      <Carousel data={result?.photos} 
      vertical={false}
      ref={useRef(null)}
      
      renderItem={(i) => (
          // <View
          //   style={{
          //     alignItems: "stretch",
          //     borderRadius: 15,
          //     backgroundColor: "rgba(209,209,209,0.29)",
          //     marginVertical: 10,
          //     marginStart: 16,
          //     marginEnd: 5,
          //     borderBottomWidth: 10,
          //     borderEndWidth: 10,
          //     borderWidth: 2,
          //     borderBottomRightRadius: 10,
          //   }}
          // >
            
          // </View>
         <Text>try</Text>
        )} />

   
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
