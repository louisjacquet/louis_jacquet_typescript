import React, { useState } from "react";
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
import { PhotoshopPicker } from "react-color";
import { LinearGradient } from "expo-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import blanc from "../../../assets/blanc.png";
import img_back3 from "../../../assets/img_back_3.png";
import line_green from "../../../assets/green_color.png";
import logo from "../../../assets/BNP_Paribas_Cardif.png";
import plug from "../../../assets/Plug.png";

import structure from "../../../assets/Structure.png";
import panel from "../../../assets/Panel.png";
import navigations from "../../../assets/Navigation.png";
import formulaire from "../../../assets/Formulaire.png";
import blocs from "../../../assets/Blocs.png";
import basics from "../../../assets/Basics.png";
import starter from "../../../assets/StarterKit.png";
import fonticon from "../../../assets/Fonticon.png";
import pack from "../../../assets/Pack.png";
import test from "../../../assets/Test.png";
import newsletter from "../../../assets/Newsletter.png";
import codex from "../../../assets/Codex.png";
import population from "../../../assets/Population.png";

import { Video, AVPlaybackStatus } from "expo-av";

export default function App({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const [color, setColor] = useState("#ff0000");
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
          style={{
            flex: 0.6,
            backgroundColor: "blank",
          }}
        ></View>

        <View
          style={{
            flex: 10.4,
            backgroundColor: "green",
          }}
        >
          <LinearGradient
            colors={["#42B189", "#88CDB8", "#2FB59B", "#88CDB8", "#42B189"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
          >
            <Text style={styles.textg}>TOOLBOX</Text>
            <View
              style={{
                backgroundColor: "red",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <Text>Trying</Text>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "red",
                }}
              >
                <Text>Trying0</Text>
              </View>

              <View
                style={{
                  flex: 4,
                  backgroundColor: "violet",
                }}
              >
                <Text>Trying2</Text>

                <View style={styles.CardRactangle}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "yellow",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderWidth: 2,
                      borderRadius: 9,
                      borderColor: "white",
                    }}
                  >
                    <Image
                      source={basics}
                      style={{
                        marginTop: "5%",
                        width: "40%",
                        height: "50%",
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                      Textes, liens, boutons
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: "green",
                }}
              >
                <Text>Trying2</Text>

                <View style={styles.CardRactangle}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "yellow",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderWidth: 2,
                      borderRadius: 9,
                      borderColor: "white",
                    }}
                  >
                    <Image
                      source={navigations}
                      style={{
                        marginTop: "0%",
                        width: "50%",
                        height: "60%",
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                      Fil d'ariane, filtres, ...
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: "violet",
                }}
              >
                <Text>Trying2</Text>
                <View style={styles.CardRactangle}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "yellow",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderWidth: 2,
                      borderRadius: 9,
                      borderColor: "white",
                    }}
                  >
                    <Image
                      source={structure}
                      style={{
                        marginTop: "0%",
                        width: "60%",
                        height: "60%",
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                      Textes, liens, boutons
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: "green",
                }}
              >
                <Text>Trying2</Text>
                <View style={styles.CardRactangle2}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "yellow",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderWidth: 2,
                      borderRadius: 9,
                      borderColor: "white",
                    }}
                  >
                    <Image
                      source={formulaire}
                      style={{
                        marginTop: "0%",
                        width: "50%",
                        height: "60%",
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                      Textes, liens, boutons
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: "violet",
                }}
              >
                <Text>Trying2</Text>
                <View style={styles.CardRactangle2}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "yellow",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderWidth: 2,
                      borderRadius: 9,
                      borderColor: "white",
                    }}
                  >
                    <Image
                      source={blocs}
                      style={{
                        marginTop: "5%",
                        width: "40%",
                        height: "50%",
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                      Textes, liens, boutons
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: "blue",
                }}
              >
                <Text>Trying2</Text>
                <View style={styles.CardRactangle2}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "yellow",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderWidth: 2,
                      borderRadius: 9,
                      borderColor: "white",
                    }}
                  >
                    <Image
                      source={panel}
                      style={{
                        marginTop: "0%",
                        width: "60%",
                        height: "60%",
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                      Slider, accordeon, bouton
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1.5,
                  backgroundColor: "red",
                }}
              >
                <Text>Trying</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ flex: 10, backgroundColor: "yellow" }}>
          <Text
            style={{
              fontSize: 20,
              marginLeft: "7%",
              fontWeight: "600",
              marginTop: "1%",
              color: "#26AA90",
            }}
          >
            BNPP CARDIF Colors Palettes RVB
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginLeft: "7%",
              fontWeight: "600",
            }}
          >
            Selectionner et copier
          </Text>
        </View>
        <View style={{ flex: 5, backgroundColor: "snow" }}>
          <PhotoshopPicker
            color={color}
            onChangeComplete={(color: {
              hex: React.SetStateAction<string>;
            }) => {
              setColor(color.hex);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
