// import {
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from "react-native";
// import React, { useEffect } from "react";
// import { AppStackParamList } from "../../navigation/AppStack";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import useDetails from "../../hooks/UseDetails";
// import GalleryList from "../../components/GalleryList";
// import { Snackbar } from "@react-native-material/core";

// type detailsScreenProps = NativeStackScreenProps<AppStackParamList, "Details">;

// const DetailsScreen = ({ route }: detailsScreenProps) => {
//   const item = route.params;
//   const [result, isLoading, errorMessage, setErrorMessage, getDetails] =
//     useDetails(item.id);

//   function showSnackbar() {
//     return (
//       <Snackbar
//         message={errorMessage}
//         action={
//           <TouchableOpacity
//             onPress={() => {
//               setErrorMessage("");
//             }}
//           >
//             <Text style={{ color: "#fff" }}>{"Dismiss"}</Text>
//           </TouchableOpacity>
//         }
//         style={styles.snackBarStyle}
//       />
//     );
//   }

//   return isLoading ? (
//     <ActivityIndicator
//       animating={isLoading}
//       size={36}
//       color="#888"
//       style={{ alignSelf: "center" } && styles.progressStyle}
//     />
//   ) : errorMessage ? (
//     showSnackbar()
//   ) : (
//     <View>
//       <Text style={{ fontWeight: "bold", fontSize: 20 }}>Gallery</Text>
//        <GalleryList results={result?.photos} />
//     </View>
//   );
// };

// export default DetailsScreen;

// const styles = StyleSheet.create({
//   progressStyle: {
//     flex: 1,
//     paddingVertical: 20,
//     backgroundColor: "#fff",
//   },
//   snackBarStyle: {
//     position: "absolute",
//     start: 16,
//     end: 16,
//     bottom: 16,
//     backgroundColor: "red",
//     borderRadius: 15,
//   },
// });
