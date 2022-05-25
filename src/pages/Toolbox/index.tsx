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
import line_green from "../../../assets/green_color.png";
import blanc from "../../../assets/blanc.png";

export default function App({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const [couleur, setCouleur] = useState("");
  var [state, setState] = useState(["PREVIEW", "HTML", "CSS", "JAVASCRIPT"]);

  const [selected, setSelected] = useState("PREVIEW");
  var [state2, setState2] = useState(["PREVIEW", "HTML", "CSS", "JAVASCRIPT"]);

  const [selected2, setSelected2] = useState("PREVIEW");
  async function cop() {
    await navigator.clipboard.writeText(couleur);
    alert("Couleur copiée");
  }

  useEffect(() => {
    if (couleur !== "") {
      cop();
    }
  }, [couleur]);

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
        <View
          style={{
            flex: 0.6,
            backgroundColor: "blank",
          }}
        ></View>

        <View
          style={{
            flex: 20,
            backgroundColor: "white",
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
                backgroundColor: "white",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <Text>{"\n"}</Text>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>
              </View>

              <View
                style={{
                  flex: 4,
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>

                <View style={styles.CardRactangle}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "white",
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
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>

                <View style={styles.CardRactangle}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "white",
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
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>
                <View style={styles.CardRactangle}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "white",
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
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>
                <View style={styles.CardRactangle2}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "white",
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
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>
                <View style={styles.CardRactangle2}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "white",
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
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>
                <View style={styles.CardRactangle2}>
                  <View
                    style={{
                      flex: 0.925,
                      backgroundColor: "white",
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
                  backgroundColor: "white",
                }}
              >
                <Text>{"\n"}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ flex: 10, backgroundColor: "white" }}>
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
          style={{
            flex: 25,
            backgroundColor: "white",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 3, backgroundColor: "white" }}> </View>
          <View style={{ flex: 5, backgroundColor: "white" }}>
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
          <View style={{ flex: 5, backgroundColor: "white" }}>
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
          <View style={{ flex: 5, backgroundColor: "white" }}>
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
          <View style={{ flex: 5, backgroundColor: "white" }}>
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
          <View style={{ flex: 3, backgroundColor: "white" }}></View>
        </View>
        <View style={{ height: 100 }}></View>
        <Text style={styles.texteti}>Heading, paragraphe, lien {"\n"} </Text>
        <View style={{ flexDirection: "row", marginLeft: "6%", flex: 10 }}>
          {state.map((i) => (
            <TouchableOpacity
              onPress={() => setSelected(i)}
              style={styles.buttonArrow}
            >
              <Text>{i}</Text>
            </TouchableOpacity>
          ))}
          {selected == "PREVIEW" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code of this preview</Text>
              </View>
            </View>
          )}
          {selected == "HTML" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code in HTML</Text>
              </View>
            </View>
          )}
          {selected == "CSS" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code in CSS</Text>
              </View>
            </View>
          )}
          {selected == "JAVASCRIPT" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code in JAVASCRIPT</Text>
              </View>
            </View>
          )}
        </View>
        <Text style={styles.texteti}>Box simple title</Text>
        <View style={{ flexDirection: "row", marginLeft: "6%" }}>
          {state.map((i) => (
            <TouchableOpacity
              onPress={() => setSelected2(i)}
              style={styles.buttonArrow}
            >
              <Text>{i}</Text>
            </TouchableOpacity>
          ))}
          {selected2 == "PREVIEW" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code of this preview</Text>
              </View>
            </View>
          )}
          {selected2 == "HTML" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code in HTML</Text>
              </View>
            </View>
          )}
          {selected2 == "CSS" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code in CSS</Text>
              </View>
            </View>
          )}
          {selected2 == "JAVASCRIPT" && (
            <View style={styles.marginText}>
              <View style={styles.marginCont}>
                <Text>The code in JAVASCRIPT</Text>
              </View>
            </View>
          )}
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
