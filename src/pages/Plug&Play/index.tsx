import React from "react";
import {
  Image,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { styles } from "./style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../../../assets/BNP_Paribas_Cardif.png";
import plug from "../../../assets/Plug.png";

import { Video, AVPlaybackStatus } from "expo-av";

export default function App({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const video = React.useRef(null);
  const video2 = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        },
      ]}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ backgroundColor: "white", flexDirection: "row" }}>
          <View style={{ flex: 2, backgroundColor: "white" }}>
            <Image source={logo} style={{ width: 190, height: 40 }} />
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text1b}>|</Text>
          </View>
          <View
            style={{
              flex: 6.3,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text2}>Welcome to UXTeams Services</Text>
          </View>
          <View
            style={{
              flex: 0.9,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text2}>UXTeam</Text>
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text1}>|</Text>
          </View>
          <View
            style={{
              flex: 0.7,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text2}>Projets</Text>
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text1}>|</Text>
          </View>
          <View
            style={{
              flex: 0.7,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text2}>Glossaire</Text>
          </View>
          <View style={{ flex: 0.2, backgroundColor: "white" }}></View>
          <View style={{ flex: 1.5, backgroundColor: "white" }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text3}>A LA CARTE</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1.5, backgroundColor: "white" }}>
            <TouchableOpacity style={styles.button2}>
              <Text
                style={styles.text3}
                onPress={() => navigation.navigate("Plug")}
              >
                PLUG & PlAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.container,
            {
              flexDirection: "row",
              justifyContent: "center",
              flex: 11,
              backgroundColor: "yellow",
            },
          ]}
        >
          <View style={{ flex: 8, backgroundColor: "blue" }}>
            <Image
              source={plug}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View style={{ flex: 10, backgroundColor: "violet" }}></View>
        </View>
        <View style={{ flex: 10, backgroundColor: "red" }}></View>
      </ScrollView>
    </View>
  );
}
