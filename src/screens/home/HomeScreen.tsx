import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import useResults from "../../hooks/UseResults";
import { ActivityIndicator, Snackbar } from "@react-native-material/core";
import HomeBody from "../../components/HomeBody";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppStack";
type homeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>

export function HomeScreen({navigation}:homeScreenProps) {
  const [searchApi, results, errorMessage, setErrorMessage, isLoading] =
    useResults();
  return isLoading ? (
    <ActivityIndicator
      animating={isLoading}
      size={36}
      color="#888"
      style={{ alignSelf: "center" } && styles.progressStyle}
    />
  ) : errorMessage ? (
    showSnackbar()
  ) : (
    <HomeBody
      results={results}
      onCallSearch={(term) => {
        return searchApi(term);
      }}
      onClick={(i) => {
        navigation.navigate("Details",i)
      }}
    />
  );

  function showSnackbar() {
    return (
      <Snackbar
        message={errorMessage}
        action={
          <TouchableOpacity
            onPress={() => {
              setErrorMessage("");
            }}
          >
            <Text style={{ color: "#fff" }}>{"Dismiss"}</Text>
          </TouchableOpacity>
        }
        style={styles.snackBarStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  progressStyle: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  snackBarStyle: {
    position: "absolute",
    start: 16,
    end: 16,
    bottom: 16,
    backgroundColor: "red",
    borderRadius: 15,
  },
});
