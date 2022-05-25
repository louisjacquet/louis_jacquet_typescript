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
import blanc from "../../../assets/blanc.png";
import img_back3 from "../../../assets/img_back_3.png";
import line_green from "../../../assets/green_color.png";
import logo from "../../../assets/BNP_Paribas_Cardif.png";
import screen from "../../../assets/Screen.png";
import screen2 from "../../../assets/Screen2.png";
import test from "../../../assets/Test.png";

export default function App({ navigation }: { navigation: any }) {
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
            <TouchableOpacity onPress={() => navigation.navigate("Index")}>
              <Image source={logo} style={{ width: 190, height: 40 }} />
            </TouchableOpacity>
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
            <Text
              style={styles.text2}
              onPress={() => navigation.navigate("Equipe")}
            >
              UXTeam
            </Text>
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
            <Text
              style={styles.text2}
              onPress={() => navigation.navigate("Projets")}
            >
              Projets
            </Text>
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
            <Text
              style={styles.text2}
              onPress={() => navigation.navigate("Glossaire")}
            >
              Glossaire
            </Text>
          </View>
          <View style={{ flex: 0.2, backgroundColor: "white" }}></View>
          <View style={{ flex: 1.5, backgroundColor: "white" }}>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.text3}
                onPress={() => navigation.navigate("Carte")}
              >
                A LA CARTE
              </Text>
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
        <View style={{ flex: 1, backgroundColor: "red" }}></View>
        <View
          style={{
            flex: 0.1,
            flexDirection: "column",
          }}
        >
          <Image
            source={line_green}
            style={{
              width: "100%",
              height: 5,
            }}
          />
        </View>
        {/*            <Text style={[styles.texte401, , { lineHeight: 50 }]}> </Text>
         */}
        <Text style={{ fontSize: 8 }}>{"\n"}</Text>
        <View
          style={{
            flex: 1.4,
            flexDirection: "row",
          }}
        >
          <Image source={logo} style={{ width: 143, height: 30 }} />
          <Image source={blanc} style={{ width: 5, height: 5 }} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "200",
              marginRight: 20,
            }}
          >
            |
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            La banque d'un monde qui change
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
