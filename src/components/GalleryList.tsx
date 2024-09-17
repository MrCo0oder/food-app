import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface GalleryListProps {
  results: string[];
  onPress?: (item: string) => void;
}
const GalleryList = (galleryListProps: GalleryListProps) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={galleryListProps.results}
        renderItem={(i) => (
          <TouchableOpacity
            onPress={() =>
              galleryListProps.onPress(galleryListProps.results[i.index])
            }
            style={{
              alignItems: "stretch",
              borderRadius: 15,
              backgroundColor: "rgba(209,209,209,0.29)",
              marginVertical: 10,
              marginStart: 16,
              marginEnd: 5,
              borderBottomWidth: 10,
              borderEndWidth: 10,
              borderWidth: 2,
              borderBottomRightRadius: 10,
            }}
          >
            <Image
              source={{
                uri: i.item,
              }}
              resizeMode="cover"
              style={{
                aspectRatio: 11 / 16,
                width: 250,
                borderRadius: 6,
              }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default GalleryList;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
