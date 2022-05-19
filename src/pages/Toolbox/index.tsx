import React, { useEffect, useState } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from "../../../assets/BNP_Paribas_Cardif.png";
import structure from "../../../assets/Structure.png";
import panel from "../../../assets/Panel.png";
import navigations from "../../../assets/Navigation.png";
import formulaire from "../../../assets/Formulaire.png";
import blocs from "../../../assets/Blocs.png";
import basics from "../../../assets/Basics.png";

export default function App({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const [couleur, setCouleur] = useState("");
  var [state, setState] = useState({
    v1Visible: false,
    v2Visible: false,
    v3Visible: true,
    v4Visible: false,
  });
  async function cop() {
    await navigator.clipboard.writeText(couleur);
    alert("Couleur copiée");
  }

  useEffect(() => {
    if (couleur !== "") {
      cop();
    }
  }, [couleur]);

  state = {
    v1Visible: false,
    v2Visible: false,
    v3Visible: false,
    v4Visible: true,
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
              <Text>{"\n"}</Text>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "red",
                }}
              >
                <Text>{"\n"}</Text>
              </View>

              <View
                style={{
                  flex: 4,
                  backgroundColor: "violet",
                }}
              >
                <Text>{"\n"}</Text>

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
                <Text>{"\n"}</Text>

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
                <Text>{"\n"}</Text>
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
                <Text>{"\n"}</Text>
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
                <Text>{"\n"}</Text>
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
                <Text>{"\n"}</Text>
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
                <Text>{"\n"}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ flex: 5, backgroundColor: "yellow" }}>
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
          <Text style={styles.texteti}>Selectionner et copier</Text>
        </View>
        <View
          style={{ flex: 10, backgroundColor: "snow", flexDirection: "row" }}
        >
          <View style={{ flex: 3, backgroundColor: "black" }}> </View>
          <View style={{ flex: 5, backgroundColor: "blue" }}>
            <View
              style={{
                justifyContent: "center",
                marginTop: "20%",
                marginLeft: "5%",
                marginRight: "10%",
              }}
            >
              {/* 0 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#005946");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#005946",
                  }}
                >
                  <Text style={styles.textcol}>green-1</Text>
                </View>
              </TouchableOpacity>
              {/* 1 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#0F7164");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#0F7164",
                  }}
                >
                  <Text style={styles.textcol}>green-2</Text>
                </View>
              </TouchableOpacity>
              {/* 2 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#008352");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#008352",
                  }}
                >
                  <Text style={styles.textcol}>green-3</Text>
                </View>
              </TouchableOpacity>
              {/* 3 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#00957A");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#00957A",
                  }}
                >
                  <Text style={styles.textcol}>green-4</Text>
                </View>
              </TouchableOpacity>
              {/* 4 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#26AA90");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#26AA90",
                  }}
                >
                  <Text style={styles.textcol}>green-5</Text>
                </View>
              </TouchableOpacity>
              {/* 5 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#52BBB5");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#52BBB5",
                  }}
                >
                  <Text style={styles.textcol}>green-6</Text>
                </View>
              </TouchableOpacity>
              {/* 6 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#8ACBBB");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#8ACBBB",
                  }}
                >
                  <Text style={styles.textcol}>green-7</Text>
                </View>
              </TouchableOpacity>
              {/* 7 */}

              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#ADDAD4");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#ADDAD4",
                  }}
                >
                  <Text style={styles.textcol}>green-8</Text>
                </View>
              </TouchableOpacity>
              {/* 8 */}
              <TouchableOpacity
                onPress={() => {
                  setCouleur("#DBECE0");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#DBECE0",
                  }}
                >
                  <Text style={styles.textcol}>green-9</Text>
                </View>
              </TouchableOpacity>
              {/* 9 */}
            </View>
          </View>
          {/*














            */}
          <View style={{ flex: 5, backgroundColor: "magenta" }}>
            <View
              style={{
                justifyContent: "center",
                marginTop: "20%",
                marginLeft: "10%",
                marginRight: "5%",
              }}
            >
              {/* 0 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#253D45");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#253D45",
                  }}
                >
                  <Text style={styles.textcol}>blue-1</Text>
                </View>
              </TouchableOpacity>
              {/* 1 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#175B6F");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#175B6F",
                  }}
                >
                  <Text style={styles.textcol}>blue-2</Text>
                </View>
              </TouchableOpacity>
              {/* 2 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#0E555A");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#0E555A",
                  }}
                >
                  <Text style={styles.textcol}>blue-3</Text>
                </View>
              </TouchableOpacity>
              {/* 3 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#007B8A");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#007B8A",
                  }}
                >
                  <Text style={styles.textcol}>blue-4</Text>
                </View>
              </TouchableOpacity>
              {/* 4 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#157394");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#157394",
                  }}
                >
                  <Text style={styles.textcol}>blue-5</Text>
                </View>
              </TouchableOpacity>
              {/* 5 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#00A0B1");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#00A0B1",
                  }}
                >
                  <Text style={styles.textcol}>blue-6</Text>
                </View>
              </TouchableOpacity>
              {/* 6 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#61C3D7");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#61C3D7",
                  }}
                >
                  <Text style={styles.textcol}>blue-7</Text>
                </View>
              </TouchableOpacity>
              {/* 7 */}

              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#D4EDF7");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#D4EDF7",
                  }}
                >
                  <Text style={styles.textcol}>blue-8</Text>
                </View>
              </TouchableOpacity>
              {/* 8 */}
            </View>
          </View>
          {/*
          
          
          
          
          




          
          
          
          */}
          <View style={{ flex: 5, backgroundColor: "green" }}>
            <View
              style={{
                justifyContent: "center",
                marginTop: "20%",
                marginLeft: "10%",
                marginRight: "5%",
              }}
            >
              {/* 0 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#805D56");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#805D56",
                  }}
                >
                  <Text style={styles.textcol}>hot-1</Text>
                </View>
              </TouchableOpacity>
              {/* 1 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#A37768");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#A37768",
                  }}
                >
                  <Text style={styles.textcol}>hot-2</Text>
                </View>
              </TouchableOpacity>
              {/* 2 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#C3454B");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#C3454B",
                  }}
                >
                  <Text style={styles.textcol}>hot-3</Text>
                </View>
              </TouchableOpacity>
              {/* 3 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#E45054");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#E45054",
                  }}
                >
                  <Text style={styles.textcol}>hot-4</Text>
                </View>
              </TouchableOpacity>
              {/* 4 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#F1885B");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#F1885B",
                  }}
                >
                  <Text style={styles.textcol}>hot-5</Text>
                </View>
              </TouchableOpacity>
              {/* 5 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#F8B375");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#F8B375",
                  }}
                >
                  <Text style={styles.textcol}>hot-6</Text>
                </View>
              </TouchableOpacity>
              {/* 6 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#F9BD95");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#F9BD95",
                  }}
                >
                  <Text style={styles.textcol}>hot-7</Text>
                </View>
              </TouchableOpacity>
              {/* 7 */}

              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#FCD7B8");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#FCD7B8",
                  }}
                >
                  <Text style={styles.textcol}>hot-8</Text>
                </View>
              </TouchableOpacity>
              {/* 8 */}
            </View>
          </View>
          {/*
          
          
          
          
          
          
          
          
          
          
          
          
          
          */}
          <View style={{ flex: 5, backgroundColor: "red" }}>
            <View
              style={{
                justifyContent: "center",
                marginTop: "20%",
                marginLeft: "15%",
                marginRight: "0%",
              }}
            >
              {/* 0 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#626A6E");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#626A6E",
                  }}
                >
                  <Text style={styles.textcol}>neutral-1</Text>
                </View>
              </TouchableOpacity>
              {/* 1 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#929DA5");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#929DA5",
                  }}
                >
                  <Text style={styles.textcol}>neutral-2</Text>
                </View>
              </TouchableOpacity>
              {/* 2 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#85ABA8");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#85ABA8",
                  }}
                >
                  <Text style={styles.textcol}>neutral-3</Text>
                </View>
              </TouchableOpacity>
              {/* 3 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#B8C8CC");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#B8C8CC",
                  }}
                >
                  <Text style={styles.textcol}>neutral-4</Text>
                </View>
              </TouchableOpacity>
              {/* 4 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#E4EDF3");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#E4EDF3",
                  }}
                >
                  <Text style={styles.textcol}>neutral-5</Text>
                </View>
              </TouchableOpacity>
              {/* 5 */}
              <TouchableOpacity
                onPress={async () => {
                  setCouleur("#F9F9F9");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  <Text style={styles.textcol}>neutral-6</Text>
                </View>
              </TouchableOpacity>
              {/* 6 */}
            </View>
          </View>
          <View style={{ flex: 3, backgroundColor: "black" }}></View>
        </View>
        <View style={{}}>
          <Text style={styles.texteti}>Heading, paragraphe, lien</Text>
          <TouchableOpacity
            onPress={(state) =>
              setState({
                v1Visible: false,
                v2Visible: true,
                v3Visible: false,
                v4Visible: false,
              })
            }
          >
            <Text>Here</Text>
          </TouchableOpacity>
          {state.v1Visible && (
            <View>
              <Text>View 1</Text>
            </View>
          )}
          {state.v2Visible && (
            <View>
              <Text>View 2</Text>
            </View>
          )}
          {state.v3Visible && (
            <View>
              <Text>View 3</Text>
            </View>
          )}
          {state.v4Visible && (
            <View>
              <Text>View 4</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
