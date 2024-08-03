import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";

interface CustomInputProps {
  searchTerm?: string,
  onSearchTermChange?: (term: string) => void
}

const CustomInput = ({searchTerm, onSearchTermChange}: CustomInputProps) => {

  return (<View style={styles.input}>

	<TextInput inputMode={'search'}
			   keyboardType={"web-search"}
			   placeholderTextColor="#777"
			   placeholder='Search'
			   value={searchTerm}
			   onChangeText={(text) => onSearchTermChange(text)}
			   selectionColor='#777'
			   style={{flex: 1}}
			   cursorColor='#777'
	/>
	<TouchableOpacity onPress={() => onSearchTermChange("")}>
	  <Feather name="search" style={styles.iconStyle}/>
	</TouchableOpacity>
  </View>);
}

export default CustomInput;
const styles = StyleSheet.create({
  input: {
	backgroundColor: 'rgba(219,219,219,0.84)',
	height: 50,
	marginHorizontal: 20,
	marginVertical: 16,
	borderRadius: 10,
	flexDirection: 'row',
	alignContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 16
  },
  iconStyle: {alignSelf: 'center', fontSize: 24, color: '#000'}
});