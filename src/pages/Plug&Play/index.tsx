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
import Elevations from "react-native-elevation";
import logo from "../../../assets/BNP_Paribas_Cardif.png";
import plug from "../../../assets/Plug.png";
import starter from "../../../assets/StarterKit.png";

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
          <View style={{ flex: 1.1, backgroundColor: "orange" }}></View>
          <View style={{ flex: 8.9, backgroundColor: "violet" }}>
            <Text style={[styles.texte201, { lineHeight: 70, paddingTop: 10 }]}>
              PLUG & PLAY
            </Text>

            <Text style={styles.texte202}>
              Vous souhaitez récupérer des modules tout prêts, à la charte du
              groupe BNP{"\n"}
              Paribas en mode {"<<"}plug and play{">>"} . Rien de plus simple;
              il sufit d'utiliser{"\n"}
              les différentes bibliothèques que nous avons mises à votre
              disposition{"\n"}
              ci-dessous.
              {"\n"}
              {"\n"}
            </Text>
            <TouchableOpacity>
              <View style={styles.button4}>
                <Text style={styles.text4}>Voir la démo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1.8, backgroundColor: "white" }}></View>
        <View
          style={{ flex: 12.1, backgroundColor: "red", flexDirection: "row" }}
        >
          <View
            style={{ flex: 1, backgroundColor: "pink", height: 400 }}
          ></View>
          <View style={{ flex: 10, backgroundColor: "white" }}>
            <View style={styles.CardRactangle}>
              <View
                style={{
                  flex: 0.925,
                  backgroundColor: "magenta",
                }}
              >
                <Image
                  source={starter}
                  style={{
                    width: "40%",
                    height: "40%",
                    left: "30%",
                    marginTop: 25,
                  }}
                />
                <Text>
                  Pour récupérer les différents zones d'un site charté BNP{"\n"}
                  Paribas AM : header, body, footer, etc.. Tout est prêt
                  {"\n"}
                  avec des dossiers reliés. Il n'y a qu'à tout copier !{"\n"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.975,
                    backgroundColor: "blue",
                  }}
                ></View>
                <TouchableOpacity
                  onPress={buttonClickedHandler}
                  style={styles.roundButton1}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      marginBottom: -13,
                      marginLeft: -1,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 10, backgroundColor: "violet" }}></View>
          <View style={{ flex: 10, backgroundColor: "magenta" }}></View>
        </View>
        <View
          style={{ flex: 12.1, backgroundColor: "green", flexDirection: "row" }}
        >
          <View
            style={{ flex: 1, backgroundColor: "blue", height: 400 }}
          ></View>
          <View style={{ flex: 10, backgroundColor: "magenta" }}>
            <View style={styles.CardRactangle} />
          </View>
          <View style={{ flex: 10, backgroundColor: "pink" }}></View>
          <View style={{ flex: 10, backgroundColor: "violet" }}></View>
        </View>
      </ScrollView>
    </View>
  );
}
