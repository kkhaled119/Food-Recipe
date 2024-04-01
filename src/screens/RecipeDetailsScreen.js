import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView
        style={{
          paddingTop: 45,
          flexDirection: "row",
          marginHorizontal: 16,
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="#fff" />
        </Pressable>
        <Pressable>
          <FontAwesome name={"heart-o"} size={28} color="black" />
        </Pressable>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: 20,
        }}
      >
        <Image
          source={item.image}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
        <Text style={{ marginTop: 20, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>
        {/*Recipe Description */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 20, marginVertical: 16 }}>
            {item.description}
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={[
                styles.infoContainer,
                { backgroundColor: "rgba(255, 0, 0, 0.38)" },
              ]}
            >
              <Text style={{ fontSize: 30 }}>⏰</Text>
              <Text style={styles.infoText}>{item.time}</Text>
              <Text style={styles.infoText}>Time</Text>
            </View>
            <View
              style={[
                styles.infoContainer,
                { backgroundColor: "rgba(135, 206, 235, 0.8)" },
              ]}
            >
              <Text style={{ fontSize: 30 }}>🥣</Text>
              <Text style={styles.infoText}>{item.difficulty}</Text>
              <Text style={styles.infoText}>Difficulty</Text>
            </View>
            <View
              style={[
                styles.infoContainer,
                { backgroundColor: "rgba(255, 165, 0, 0.48)" },
              ]}
            >
              <Text style={{ fontSize: 30 }}>🔥</Text>

              <Text style={styles.infoText}>{item.calories}</Text>
              <Text style={styles.infoText}>Calories</Text>
            </View>
          </View>
          {/*Recipe Ingredient */}
          <View style={{ alignSelf: "flex-start", paddingHorizontal: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>
              Ingredients:
            </Text>
            {item.ingredients.map((ingredient, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 4,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f96163",
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginRight: 8,
                    marginTop: 6,
                  }}
                />
                <Text style={{ fontSize: 18, marginLeft: 6 }}>
                  {ingredient}
                </Text>
              </View>
            ))}
          </View>
          {/* Recipe Steps */}

          <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>
              Steps:
            </Text>

            {item.steps.map((step, index) => {
              return (
                <Text
                  key={index}
                  style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                >{`${index + 1} ) ${step}`}</Text>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  infoContainer: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: 100,
    marginHorizontal: 8,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
  },
});
