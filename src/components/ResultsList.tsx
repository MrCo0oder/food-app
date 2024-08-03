import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Business} from "../screens/BusinessResponse";

interface ResultsListProps {
  title: string;
  results?: Business[];
}

const ResultsList: React.FC<ResultsListProps> = ({title, results}) => {
  return (
	  <View>
		{results.length >= 1 ?
			<>
			  <Text style={styles.title}>{title}</Text>
			  <FlatList
				  horizontal={true}
				  showsHorizontalScrollIndicator={false}
				  data={results}
				  renderItem={(i) => (
					  <TouchableOpacity onPress={() => {
					  }}>
						<View style={{
						  alignItems: 'stretch',
						  borderRadius: 15,
						  backgroundColor: 'rgba(209,209,209,0.29)',
						  marginVertical: 10,
						  marginHorizontal: 16,
						}}>
						  <Image
							  source={{
								uri: results[i.index].image_url,
								cache: 'force-cache',
							  }}
							  style={{
								width: 300, height: 200,

								borderRadius: 15
							  }}/>
						  <Text style={{
							fontWeight: 'bold',
							alignSelf: 'flex-start',
							marginHorizontal: 10,
						  }}>{results[i.index].name}</Text>
						  <View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 10,
							marginBottom: 16
						  }}>
							<Text style={{color: '#888'}}>{results[i.index].rating} ⭐</Text>
							<Text style={{color: '#888'}}>{results[i.index].review_count}  ✅</Text>
						  </View>
						</View>
					  </TouchableOpacity>
				  )}
				  keyExtractor={(_, index) => index.toString()}/></> : null}
	  </View>
  );
};

const styles = StyleSheet.create({
  title: {
	fontSize: 18,
	fontWeight: 'bold',
	start: 16
  },
  image: {
	width: 100,
	height: 100,
	marginTop: 10,
  },
});

export default ResultsList;