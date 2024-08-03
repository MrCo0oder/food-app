import {ScrollView, StyleSheet, View,} from "react-native";
import React, {useState} from "react";
import CustomInput from "../components/CustomInput";
import ResultsList from "../components/ResultsList";
import {useResults} from "../hooks/UseResults";

export function HomeScreen() {
  const [search, setSearch] = useState("");
  const [searchApi,  results] = useResults();
  const filterResultsWithPrice=(price:string)=>{
	// @ts-ignore
	return results.filter((item:any)=>item.price == price);
  }
  return (
	  <ScrollView style={{backgroundColor:'#fff'}} >
		<View style={styles.container}>
		  <CustomInput searchTerm={search} onSearchTermChange={(text) => setSearch(text)} onSearchTermSubmitted={() => {
			// @ts-ignore
			searchApi(search);
		  }}/>

		  <ResultsList title={"Cost Effective"} results={filterResultsWithPrice('$')} />
		  <ResultsList title="Bit Pricier"  results={filterResultsWithPrice('$$')} />
		  <ResultsList title="Big Spender"  results={filterResultsWithPrice('$$$')} />
		</View>
	  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	paddingVertical:20,
	backgroundColor: '#fff',
  },
});
{/*{errorMessage != '' ? <Snackbar*/}
{/*		message={errorMessage}*/}
{/*		action={<Button title="Dismiss" color="#BB86FC" onPress={() => {*/}
{/*		  setErrorMessage('');*/}
{/*		}}/>}*/}
{/*		style={{position: "absolute", start: 16, end: 16, bottom: 16, backgroundColor: 'red', borderRadius: 15}}*/}
{/*	/>*/}
{/*	: <FlatList data={results} renderItem={(i) => (*/}
{/*		<View style={{alignItems: 'center'}}>*/}
{/*		  <Image*/}
{/*			  source={{uri: results[i.index].image_url, cache: 'force-cache',}}*/}
{/*			  style={{*/}
{/*				width: '100%', height: 200*/}
{/*			  }}*/}
{/*		  />*/}
{/*		  <Text>*/}
{/*			{results[i.index].name}*/}
{/*		  </Text>*/}
{/*		</View>*/}
{/*	)}*/}
{/*				keyExtractor={(_, index) => index.toString()}*/}
{/*				refreshControl={*/}
{/*				  <RefreshControl*/}
{/*					  refreshing={refreshing}*/}
{/*					  onRefresh={() => {*/}
{/*						setRefreshing(true);*/}
{/*						searchApi(search)*/}
{/*					  }}*/}
{/*					  tintColor="#C8ACD6"*/}
{/*				  />*/}
{/*				}*/}
{/*	/>}*/}