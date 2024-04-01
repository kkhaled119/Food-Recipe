import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipesCard from "../components/RecipesCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/*render header */}
      <Header headerText={"Hi, John "} headerIcon={"bell-o"} />
      {/*Search Filter */}
      <SearchFilter icon="search" placeholder={"enter your fav recipe"} />
      {/*Categories filter */}

      <View style={{ marginTop: 22, }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/*Categories List  */}
        <CategoriesFilter />
      </View>

         {/*Recipe List Filter */}

      <View style={{ marginTop: 22,flex:1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        {/*Recipes List  */}
        <RecipesCard/>
        
      </View>






    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
