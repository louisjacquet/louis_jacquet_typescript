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
import blanc from "../../../assets/blanc.png";
import img_back3 from "../../../assets/img_back_3.png";
import line_green from "../../../assets/green_color.png";
import logo from "../../../assets/BNP_Paribas_Cardif.png";
import plug from "../../../assets/Plug.png";
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
          style={[
            styles.container,
            {
              flexDirection: "row",
              justifyContent: "center",
              flex: 9,
              backgroundColor: "white",
            },
          ]}
        >
          <View style={{ flex: 8, backgroundColor: "white" }}>
            <Image
              source={plug}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View style={{ flex: 1.1, backgroundColor: "white" }}></View>
          <View style={{ flex: 8.9, backgroundColor: "white" }}>
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
          style={{ flex: 12.1, backgroundColor: "white", flexDirection: "row" }}
        >
          <View
            style={{ flex: 1, backgroundColor: "white", height: 400 }}
          ></View>
          {/*
          
          
          
          
          
          */}
          <View style={{ flex: 9, backgroundColor: "white" }}>
            <View style={styles.CardRactangle}>
              <View
                style={{
                  flex: 0.925,
                  backgroundColor: "white",
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
                <Text style={{ marginLeft: 15, marginRight: 15 }}>
                  {"\n"}
                  Pour récupérer les différents zones d'un site {"\n"}
                  charté BNP Paribas AM : header, body, footer,
                  {"\n"}
                  etc.. Tout est prêt avec des dossiers reliés.{"\n"}
                  Il n'y a qu'à tout copier !
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                    }}
                  >
                    <Image
                      source={population}
                      style={{
                        width: "100%",
                        height: "35%",
                        //left: "30%",
                        marginTop: 28,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      backgroundColor: "white",
                      marginTop: "auto",
                    }}
                  >
                    <Text style={styles.textdiv}>Développeurs</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.975,
                    backgroundColor: "white",
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
          {/*
          
          
          
          
          
          */}
          <View style={{ flex: 0.5, backgroundColor: "white" }}></View>
          <View style={{ flex: 9.5, backgroundColor: "white" }}>
            <View style={styles.CardRactangle}>
              <View
                style={{
                  flex: 0.925,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={codex}
                  style={{
                    width: "55%",
                    height: "40%",
                    left: "20%",
                    marginTop: 25,
                  }}
                />
                <Text style={{ marginLeft: 15, marginRight: 15 }}>
                  {"\n"}
                  Une toolbox pour récupérer par copier/coller des{"\n"}
                  modules graphiques et Les intégrer directement{"\n"}
                  dans votre solution. Chaque élément est visible {"\n"}
                  en preview, code html, css, javascript.{"\n"}
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                    }}
                  >
                    <Image
                      source={population}
                      style={{
                        width: "100%",
                        height: "35%",
                        //left: "30%",
                        marginTop: 28,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      backgroundColor: "white",
                      marginTop: "auto",
                    }}
                  >
                    <Text style={styles.textdiv}>
                      Développeurs / UI-UX Designer
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.975,
                    backgroundColor: "white",
                  }}
                ></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Tool")}
                  style={styles.roundButton2}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      marginBottom: -12,
                      marginLeft: -0,
                    }}
                  >
                    {"›"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*
          
          
          
          
          
          */}
          <View style={{ flex: 10, backgroundColor: "white" }}>
            {/*
            
            
            
            */}
            <View style={styles.CardRactangle2}>
              <View
                style={{
                  flex: 0.925,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={fonticon}
                  style={{
                    width: "40%",
                    height: "40%",
                    left: "30%",
                    marginTop: 25,
                  }}
                />
                <Text style={{ marginLeft: 15, marginRight: 15 }}>
                  {"\n"}
                  Pour récupérer des icônes paramétrables en {"\n"}
                  intégration front web !{"\n"}
                  {"\n"}
                  {"\n"}
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                    }}
                  >
                    <Image
                      source={population}
                      style={{
                        width: "100%",
                        height: "35%",
                        //left: "30%",
                        marginTop: 28,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      backgroundColor: "white",
                      marginTop: "auto",
                    }}
                  >
                    <Text style={styles.textdiv}>
                      Développeurs / UI-UX Designer
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.975,
                    backgroundColor: "white",
                  }}
                ></View>
                <TouchableOpacity
                  onPress={buttonClickedHandler}
                  style={styles.roundButton2}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      marginBottom: -12,
                    }}
                  >
                    {"›"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*
            
            
            
            */}
          </View>
        </View>
        <View
          style={{ flex: 12.1, backgroundColor: "white", flexDirection: "row" }}
        >
          <View
            style={{ flex: 1, backgroundColor: "white", height: 400 }}
          ></View>
          {/* 
          
          
          
          
          */}
          <View style={{ flex: 9.5, backgroundColor: "white" }}>
            <View style={styles.CardRactangle}>
              <View
                style={{
                  flex: 0.925,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={pack}
                  style={{
                    width: "40%",
                    height: "40%",
                    left: "30%",
                    marginTop: 25,
                  }}
                />
                <Text style={{ marginLeft: 15, marginRight: 15 }}>
                  {"\n"}
                  Pour télécharger Les pictos, les fonts, logos,{"\n"}
                  codes couleurs à La charte graphique{"\n"}
                  BNPP AM{"\n"}
                  {"\n"}
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                    }}
                  >
                    <Image
                      source={population}
                      style={{
                        width: "100%",
                        height: "35%",
                        //left: "30%",
                        marginTop: 28,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      backgroundColor: "white",
                      marginTop: "auto",
                    }}
                  >
                    <Text style={styles.textdiv}>Tout le monde</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.975,
                    backgroundColor: "white",
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
          <View style={{ flex: 0.5, backgroundColor: "white" }}></View>
          <View style={{ flex: 10, backgroundColor: "white" }}>
            <View style={styles.CardRactangle}>
              <View
                style={{
                  flex: 0.925,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={newsletter}
                  style={{
                    width: "35%",
                    height: "40%",
                    left: "30%",
                    marginTop: 25,
                  }}
                />
                <Text style={{ marginLeft: 15, marginRight: 15 }}>
                  {"\n"}
                  Un outil pour construire vos newsletters en{"\n"}
                  quelques clics, avec des composants clés en {"\n"}
                  main : page html, mailing... Il n'ajamais été {"\n"}
                  aussi facile de communiquer!{"\n"}
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                    }}
                  >
                    <Image
                      source={population}
                      style={{
                        width: "100%",
                        height: "35%",
                        //left: "30%",
                        marginTop: 28,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      backgroundColor: "white",
                      marginTop: "auto",
                    }}
                  >
                    <Text style={styles.textdiv}>Tout le monde</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.975,
                    backgroundColor: "white",
                  }}
                ></View>
                <TouchableOpacity
                  onPress={buttonClickedHandler}
                  style={styles.roundButton2}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      marginBottom: -12,
                      marginLeft: -0,
                    }}
                  >
                    {"›"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*
          
          
          
          
          
          
          
          */}
          <View style={{ flex: 10.5, backgroundColor: "white" }}>
            <View style={styles.CardRactangleNone}>
              <View
                style={{
                  flex: 10,
                  backgroundColor: "#F8F8F8",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={styles.textfin}>
                  Support{"\n"}
                  {"\n"}
                </Text>
              </View>
              <View style={{ flex: 3, backgroundColor: "#F8F8F8" }}>
                <Text style={styles.textfin2}>Pour une demande technique</Text>
              </View>
              <View style={{ flex: 6, backgroundColor: "#F8F8F8" }}>
                <Text style={styles.textfin3}>
                  amine.elouarzadi@bnpparibas.com{"\n"}
                  nicolas.Lebert@bnpparibas.com
                </Text>
              </View>
              <View style={{ flex: 3, backgroundColor: "#F8F8F8" }}>
                <Text style={styles.textfin2}>
                  Une idée, un composant à créer
                </Text>
              </View>
              <View style={{ flex: 8, backgroundColor: "#F8F8F8" }}>
                <Text style={styles.textfin3}>
                  eva.anani@bnpparibas.com{"\n"}
                  charlotte.gascoin@externe-bnpparibas.com
                </Text>
              </View>
            </View>
          </View>
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
              flex: 0.1,
              flexDirection: "column",
            }}
          ></View>
          <View
            style={{
              flex: 0.75,
              backgroundColor: "transparent",
              flexDirection: "column",
            }}
          >
            <Text style={[styles.texte201, { lineHeight: 70 }]}>
              Test automatique
            </Text>

            <Text style={styles.texte202}>
              Je suis un texte de présentation, sed do eiusmod tempor incididunt
              ut Labore{"\n"}
              et doLore magna aLiqua. Ut enim ad minim veniam, quis nostrud
              exercitation{"\n"}
              Ullamco laboris nisi Ut aliquip ex ea commodo consequat.{"\n"}
              {"\n"}
              {"\n"}
            </Text>
            <TouchableOpacity>
              <View style={styles.button5}>
                <Text style={styles.text4}>Boutton</Text>
              </View>
            </TouchableOpacity>
            <Text>
              {"\n"}
              {"\n"}
            </Text>
          </View>
          <View
            style={{
              flex: 0.75,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={test}
              style={{
                width: "90%",
                height: "100%",
              }}
            />
          </View>
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
