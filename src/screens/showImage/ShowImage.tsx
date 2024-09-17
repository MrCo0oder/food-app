import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppStack";
type showImageScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "ShowImage"
>;
const ShowImage = ({ route }: showImageScreenProps) => {
  return (
    <View style={styles.view}>
      <Image
        source={{
          uri: route.params.url,
        }}
        resizeMode="contain"
        style={{
          aspectRatio: 11 / 16,
          width: "100%",
          borderRadius: 6,
        }}
      />
    </View>
  );
};

export default ShowImage;

const styles = StyleSheet.create({
  view: {
    height: "100%",
    paddingTop: 40,
    backgroundColor: "#000",
    alignContent: "center",
    justifyContent: "center",
  },
});
