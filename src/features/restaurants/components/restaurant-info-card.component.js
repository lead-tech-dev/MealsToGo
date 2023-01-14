import React from "react";
import { StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
} from "react-native-paper";
import Styled from "styled-components/native";

const LeftContent = (props) => (
  <Avatar.Icon {...props} icon="folder" />
);

const Title = Styled.Text`
   padding: 16px;
   background-color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporality,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{ uri: photos[0] }}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white", borderRadius: 3 },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
