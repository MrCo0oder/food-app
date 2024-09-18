import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ImageView from "react-native-image-viewing";
interface GalleryListProps {
  results: string[];
  onPress?: (item: string) => void;
}
const GalleryList = (galleryListProps: GalleryListProps) => {
  const [visable, setIsVisible] = useState(false);
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={galleryListProps.results}
        renderItem={(i) => (
          <TouchableOpacity
            onPress={() =>
              // galleryListProps.onPress(galleryListProps.results[i.index])
              setIsVisible(!visable)
            }
            style={styles.itemStyle}
          >
            <View>
              <ImageView
                images={galleryListProps.results.map((url) => ({ uri: url }))}
                imageIndex={0}
                visible={visable}
                keyExtractor={(_, index) => index.toString()}
                onRequestClose={() => setIsVisible(false)}
                presentationStyle="overFullScreen"
              />
            </View>
            <Image
              source={{
                uri: i.item,
              }}
              resizeMode="cover"
              style={styles.image}
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
  itemStyle: {
    alignItems: "stretch",
    borderRadius: 15,
    backgroundColor: "rgba(209,209,209,0.29)",
    marginVertical: 10,
    marginStart: 16,
    marginEnd: 5,
    borderBottomWidth: 10,
    borderEndWidth: 10,
    borderWidth: 2,
    aspectRatio: 11 / 16,
    width: 250,
    borderBottomRightRadius: 10,
  },
  image: {
    aspectRatio: 11 / 16.4,
    width: 240,
    borderRadius: 12,
    marginStart: 0.5,
    padding: 20,
  },
});
