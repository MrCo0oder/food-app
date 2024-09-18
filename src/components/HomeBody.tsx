import { ScrollView, View, StyleSheet, Text } from "react-native";
import CustomInput from "./CustomInput";
import ResultsList from "./ResultsList";
import { useState } from "react";
import { Business } from "../screens/home/BusinessResponse";
import Constants from "../common/Constants";
interface HomeBodyProps {
  results: Business[];
  onCallSearch: (term: string) => void;
  onClick?: (item: Business) => void;
}
const HomeBody = ({ results, onCallSearch, onClick }: HomeBodyProps) => {
  const [search, setSearch] = useState("");

  const filterResultsWithPrice = (price: string) => {
    return results.filter((item: any) => item.price == price);
  };
  return results.length != 0 ? (
    <ScrollView style={styles.scrollStyle}>
      <View style={styles.container}>
        <CustomInput
          searchTerm={search}
          onSearchTermChange={(text) => setSearch(text)}
          onSearchTermSubmitted={() => {
            onCallSearch(search);
          }}
        />
        <ResultsList
          title={Constants.COST_EFFECTIVE}
          results={filterResultsWithPrice("£")}
          onPress={(item) => {
            onClick(item);
          }}
        />
        <ResultsList
          title={Constants.BIT_PRICIER}
          results={filterResultsWithPrice("££")}
          onPress={(item) => {
            onClick(item);
          }}
        />
        <ResultsList
          title={Constants.BIG_SPENDER}
          results={filterResultsWithPrice("££££")}
          onPress={(item) => {
            onClick(item);
          }}
        />
      </View>
    </ScrollView>
  ) : (
      <View style={styles.container&&{alignContent:"center",justifyContent:'center'}}>
        <CustomInput
          searchTerm={search}
          onSearchTermChange={(text) => setSearch(text)}
          onSearchTermSubmitted={() => {
            onCallSearch(search);
          }}
        />
        <View style={{
          alignContent:"center",
          justifyContent:"center",
          height:"85%"
        }}>
          <Text style={styles.noDataFoundText}>
            NO
          </Text>
        </View>
      </View>
  );
};
export default HomeBody;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#fff",
    height:"100%"
  },
  scrollStyle: {
    backgroundColor: "#fff",
  },
  noDataFoundText: {
    fontWeight: "bold",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
