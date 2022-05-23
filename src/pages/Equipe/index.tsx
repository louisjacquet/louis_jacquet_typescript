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
  TouchableHighlight,
} from "react-native";
import { styles } from "./style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import blanc from "../../../assets/blanc.png";
import img_back3 from "../../../assets/img_back_3.png";
import line_green from "../../../assets/green_color.png";
import logo from "../../../assets/BNP_Paribas_Cardif.png";
import algue from "../../../assets/Algue.png";
import face1 from "../../../assets/Face1.png";

import { Video, AVPlaybackStatus } from "expo-av";

export default function App({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const video = React.useRef(null);
  const video2 = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };
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

        <View style={{ flex: 5, backgroundColor: "white" }}>
          <View
            style={{
              flex: 0.75,
              backgroundColor: "transparent",
              flexDirection: "column",
              marginLeft: "7%",
            }}
          >
            <Text style={[styles.texte201, { lineHeight: 70, marginTop: 25 }]}>
              Qui sommes nous ?
            </Text>

            <Text style={styles.texte202}>
              Notre équipe est composée de différents profils expert UX pour
              vous aider à{"\n"}
              chaque étape de votre projet à mettre en place des interfaces
              faciles{"\n"}
              d’utilisation et s'assurer qu'elles répondent aux besoins des
              clients{"\n"}
              {"\n"}
              L'équipe peut intervenir sur des nouveaux projets, mais aussi sur
              des{"\n"}
              applications existantes pour construire des services digitaux
              centrés autour{"\n"}
              de l'utiLisateur.
              {"\n"}
            </Text>
          </View>

          <Image
            source={algue}
            style={{
              width: 500,
              height: 250,
              marginLeft: "52%",
              marginBottom: "40%",
            }}
          />
        </View>
        <View style={{ flex: 15, backgroundColor: "white" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              textAlign: "center",
              marginTop: 25,
            }}
          >
            Une équipe pluridisciplianire, fexible et modulable
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "27%", marginTop: 10 }]}
          >
            <Image source={face1} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "37.5%",
              marginTop: 5,
            }}
          >
            Pauline Vanesson
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginRight: "37.5%",
              marginTop: 5,
              color: "green",
            }}
          >
            UX/UI Designer
          </Text>
        </View>

        <View
          style={[
            styles.backgroundContainer,
            {
              flexDirection: "row",
            },
          ]}
        >
          <View
            style={{
              flex: 0.75,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={img_back3}
              style={{
                width: 500,
                height: 200,
              }}
            />
          </View>
          <View
            style={{
              flex: 0.75,
              backgroundColor: "transparent",
              flexDirection: "column",
            }}
          >
            <Text style={[styles.texte401, , { lineHeight: 50 }]}> </Text>
            <Text style={[styles.texte401, , { lineHeight: 70 }]}>
              Une question, un projet ?
            </Text>
            <Text style={styles.texte402}>
              Contactez notre équipe pour un accompagnement personnalisé:
            </Text>
            <Text style={styles.texte403}>AM.UXTEAMS@BNPPARIBAS.COM</Text>
          </View>
        </View>
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
