import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Business } from "../screens/BusinessResponse";

interface ResultsListProps {
  title: string;
  results?: Business[];
  onPress?: (item: Business) => void
}

const ResultsList = (resultsListProps: ResultsListProps) => {
  return (
    <View>
      {resultsListProps.results.length >= 1 ? (
        <>
          <Text style={styles.title}>{resultsListProps.title}</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={resultsListProps.results}
            renderItem={(i) => (
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    alignItems: "stretch",
                    borderRadius: 15,
                    backgroundColor: "rgba(209,209,209,0.29)",
                    marginVertical: 10,
                    marginHorizontal: 16,
                    borderBottomWidth: 10,
                    borderEndWidth: 10,
                    borderWidth: 2,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: resultsListProps.results[i.index].image_url,
                    }}
                    style={{
                      height: 170,
                      aspectRatio: 4 / 3,
                      borderRadius: 10,
                    }}
                  />
                  <View style={{borderRadius:15}}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        alignSelf: "flex-start",
                        marginHorizontal: 10,
                      }}
                    >
                      {resultsListProps.results[i.index].name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 10,
                        marginBottom: 16,
                      }}
                    >
                      <Text style={{ color: "#888" }}>
                        {resultsListProps.results[i.index].rating} ⭐
                      </Text>
                      <Text style={{ color: "#888" }}>
                        {resultsListProps.results[i.index].review_count} ✅
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    start: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default ResultsList;
