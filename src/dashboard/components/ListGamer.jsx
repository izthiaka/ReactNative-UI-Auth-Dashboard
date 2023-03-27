import React from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";

const players = [
  {
    id: 1,
    name: "John Doe",
    score: 500,
  },
  {
    id: 2,
    name: "Jane Doe",
    score: 400,
  },
  // ... 8 autres joueurs
];

const ListGamer = () => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.heading}>Derniers Joueurs</List.Subheader>
        {players.map((player) => (
          <List.Item
            key={player.id}
            title={player.name}
            description={`Score : ${player.score}`}
            left={() => <List.Icon icon="account-circle" />}
          />
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ListGamer;
