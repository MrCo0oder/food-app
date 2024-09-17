import { ScrollView, View, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";
import ResultsList from "./ResultsList";
import { useState } from "react";
import { Business } from "../screens/home/BusinessResponse";
interface HomeBodyProps {
    results: Business[]  ,
      onCallSearch: (term: string) => Promise<void>,
      onClick?: (item: Business) => void

  }
const HomeBody= ({results, onCallSearch,onClick}:HomeBodyProps )=>{
    const [search, setSearch] = useState("");
  
  const filterResultsWithPrice = (price: string) => {
    return results.filter((item: any) => item.price == price);
  };
  return (
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
          title={"COST_EFFECTIVE"}
          results={filterResultsWithPrice("£")}
          onPress={(item)=>{
            onClick(item)
          }}
        />
        <ResultsList
          title={"BIT_PRICIER"}
          results={filterResultsWithPrice("££")}
          onPress={(item)=>{
            onClick(item)
          }}
        />
        <ResultsList
          title={"BIG_SPENDER"}
          results={filterResultsWithPrice("££££")}
          onPress={(item)=>{
            onClick(item)
          }}
        />
      </View>
    </ScrollView>
  );
}
export default HomeBody;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
      backgroundColor: "#fff",
    },
    scrollStyle: {
      backgroundColor: "#fff",
    },

  });
