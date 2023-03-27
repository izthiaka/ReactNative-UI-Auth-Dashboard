import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../../styles/card_style";

const StatsCard = ({ icon, title, value }) => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.col}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.cardIcon}>
                <Icon name="users" size={30} color="#2196f3" />
              </View>
              <View>
                <Text style={styles.cardTitle}>users</Text>
                <Text style={styles.cardValue}>10</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.cardIcon}>
                <Icon name="trophy" size={30} color="#2196f3" />
              </View>
              <View>
                <Text style={styles.cardTitle}>Gagnants</Text>
                <Text style={styles.cardValue}>3</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.col}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.cardIcon}>
                <Icon name="gift" size={30} color="#2196f3" />
              </View>
              <View>
                <Text style={styles.cardTitle}>Lots</Text>
                <Text style={styles.cardValue}>50</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.cardIcon}>
                <Icon name="money" size={30} color="#2196f3" />
              </View>
              <View>
                <Text style={styles.cardTitle}>Transfert d'argent</Text>
                <Text style={styles.cardValue}>100.000 Fcfa</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>
    </>
  );
};

export default StatsCard;
