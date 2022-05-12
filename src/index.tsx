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

import logo from "../assets/BNP_Paribas_Cardif.png";
import guillemets from "../assets/Text_to_image.png";
import img_back from "../assets/image_back_bnp.png";
import img_back2 from "../assets/img_back_2.png";
import img_back3 from "../assets/img_back_3.png";
import img_grey from "../assets/F7F7F7.png";
import img_services from "../assets/Services.png";
import img_decouvrir from "../assets/Decouvrir.png";
import line_green from "../assets/green_color.png";
import blanc from "../assets/blanc.png";
import { Video, AVPlaybackStatus } from "expo-av";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";

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
            <TouchableOpacity
              style={styles.button2}
              //onPress={() => handleOpenWithLinking()}
            >
              <Text
                style={styles.text3}
                onPress={() => navigation.navigate("Plug")}
              >
                PLUG & PlAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.3, backgroundColor: "white" }}></View>
        <View style={{ flex: 1.5, backgroundColor: "white" }}>
          <View
            style={[
              styles.container,
              {
                flexDirection: "row",
                justifyContent: "center",
                flex: 1,
              },
            ]}
          >
            <View style={{ flex: 0.38, backgroundColor: "white" }}></View>
            <View style={[styles.backgroundContainer, { flex: 3 }]}>
              <Text style={styles.texte101}>Pourquoi l'UX?</Text>
              <Text style={styles.texte102}>
                Nos clients nous Le disent : ils veulent des interfaces simples,
                intuitives et {"\n"}
                facile à utiliser. {"\n"}
                Aujourd'hui si on veut répondre aux besoins de nos clients,
                cette étape est {"\n"}
                incontournable et au coeur de notre business. Une interface mal
                construite {"\n"}
                c'est 7 clients sur 10 qui ne reviendront jamais.
              </Text>
              <View
                style={[
                  styles.container,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    flex: 1,
                  },
                ]}
              >
                <Image
                  source={guillemets}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text style={styles.italique}>
                  Une interface utilisateur est comme une blague : si on doit
                  l’expliquer {"\n"}
                  c'est qu'elle n'est pas si bonne.
                </Text>
                <View style={{ flex: 3 }}></View>
              </View>
            </View>
            <View style={{ flex: 2.25, backgroundColor: "white" }}>
              <View style={styles.container}>
                <Video
                  ref={video}
                  style={styles.video}
                  source={{
                    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  }}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 3, backgroundColor: "white", marginBottom: 110 }}>
          <View
            style={[
              styles.container,
              {
                flexDirection: "row",
                justifyContent: "center",
                flex: 1,
              },
            ]}
          >
            <View
              style={{
                flex: 2,
                flexDirection: "col",
              }}
            >
              <ImageBackground style={styles.theImage} source={img_services}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    flexDirection: "col",
                  }}
                >
                  <View
                    style={{
                      flex: 0.95,
                      backgroundColor: "transparent",
                    }}
                  ></View>
                  <View
                    style={{
                      flex: 0.175,
                      backgroundColor: "transparent",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 0.1425,
                        flexDirection: "row",
                        backgroundColor: "transparent",
                      }}
                    ></View>
                    <TouchableOpacity>
                      <View style={styles.button11}>
                        <Text style={styles.text3}>Nos Servives</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{ flex: 0.01, backgroundColor: "white" }}></View>
            <View style={{ flex: 2, backgroundColor: "white" }}>
              <ImageBackground style={styles.theImage} source={img_decouvrir}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    flexDirection: "col",
                  }}
                >
                  <View
                    style={{
                      flex: 0.36,
                      backgroundColor: "transparent",
                    }}
                  ></View>
                  <View
                    style={{
                      flex: 0.175,
                      backgroundColor: "transparent",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 0.055,
                        flexDirection: "row",
                        backgroundColor: "transparent",
                      }}
                    ></View>
                    <TouchableOpacity>
                      <View style={styles.button11}>
                        <Text style={styles.text3}>Découvrir</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
        {/*
         */}

        {/*
          <Video
            ref={video2}
            style={styles.video2}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
            */}
        <View
          style={[
            styles.backgroundContainer,
            {
              flex: 1.5,
              backgroundColor: "white",
              flexDirection: "row",
            },
          ]}
        >
          <View
            style={{
              flex: 0.75,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Video
              ref={video2}
              style={styles.video2}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
          <View
            style={{
              flex: 0.75,
              backgroundColor: "transparent",
              flexDirection: "col",
            }}
          >
            <Text style={[styles.texte201, { lineHeight: 70 }]}>
              Qui sommes nous ?
            </Text>

            <Text style={styles.texte202}>
              L'équipe UX est composée de différents profils experts qui pouront
              vous aider{"\n"}à mettre en oeuvre la satisfaction cLient, des
              experts qui conaissent les{"\n"}
              probLématiques du métier, l’attentes des Clients, Les bests
              practices de L'UX{"\n"}
              et les contraintes qui vous ferons gagner du temps dans
              l’impLémentations{"\n"}
              de vos projets.{"\n"}
              {"\n"}
            </Text>
            <TouchableOpacity>
              <View style={styles.button3}>
                <Text style={styles.text3}>L'équipe</Text>
              </View>
            </TouchableOpacity>
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
              flexDirection: "col",
            }}
          ></View>
          <View
            style={{
              flex: 0.75,
              backgroundColor: "transparent",
              flexDirection: "col",
            }}
          >
            <Text style={[styles.texte201, { lineHeight: 70 }]}>
              Réalisations
            </Text>

            <Text style={styles.texte202}>
              L'UX team est internvenue sur plusieurs projets BNP Paribas AM ou
              ERE, dans{"\n"}
              Leur globalité ou sur certaines parties. A chaque fois des
              résultats positifs et d{"\n"}
              ela satisfaction client ! Découvrez les projets sur lesquels nous
              sommes{"\n"}
              intervenus et ce que l'on peut vous apporter.
              {"\n"}
              {"\n"}
            </Text>
            <TouchableOpacity>
              <View style={styles.button4}>
                <Text style={styles.text4}>Voir les projets</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.75,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={img_back2}
              style={{
                width: 370,
                height: 240,
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
              flexDirection: "col",
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
            flexDirection: "col",
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
        {/**/}
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
          }}
        >
          <Image source={logo} style={{ width: 143, height: 30 }} />
          <Image source={blanc} style={{ width: 5, height: 5 }} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 200,
              marginRight: 20,
            }}
          >
            |
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,

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
/*
_handleOpenWithLinking = () => {
  Linking.openURL("https://expo.dev");
};

onPress={() => handleOpenWithLinking()
*/
