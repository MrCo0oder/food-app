import {View, Text, StyleSheet, ScrollView,} from "react-native";
import React, {useState} from "react";
import CustomInput from "../components/CustomInput";

export function HomeScreen() {
  const [search, setSearch] = useState("")

  return <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
	<View>
	  <CustomInput searchTerm={search}  onSearchTermChange={(text) => setSearch(text)}/>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	  <Text>Home</Text>
	</View>

  </ScrollView>;
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
  },
});