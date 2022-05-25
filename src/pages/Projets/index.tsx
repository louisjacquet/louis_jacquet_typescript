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

        {/*
          
          



        */}
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
            <Text style={[styles.texte201, { lineHeight: 100 }]}>
              QUELQUES PROJETS RÉALISÉS
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

            <Text>
              {"\n"}
              {"\n"}
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
              source={screen}
              style={{
                width: "65%",
                height: "90%",
              }}
            />
          </View>
        </View>
        {/*






            */}
        <View
          style={[
            styles.backgroundContainer,
            {
              flexDirection: "row",
              flex: 10,
              backgroundColor: "green",
            },
          ]}
        >
          <View
            style={{
              flex: 7.5,
              //alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={screen2}
              style={{
                width: "80%",
                height: "80%",
                marginBottom: 120,
                marginTop: 150,
                marginLeft: "15%",
              }}
            />
          </View>
          <View
            style={{
              flex: 7.5,
              //alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={screen2}
              style={{
                width: "80%",
                height: "80%",
                marginBottom: 120,
                marginTop: 150,
                marginLeft: "2%",
              }}
            />
          </View>
          <View
            style={{
              flex: 7.5,
              //alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={screen2}
              style={{
                width: "80%",
                height: "80%",
                marginBottom: 120,
                marginTop: 150,
                marginLeft: "-10%",
              }}
            />
          </View>
        </View>
        <View
          style={[
            styles.backgroundContainer,
            {
              flexDirection: "row",
              flex: 10,
              backgroundColor: "green",
            },
          ]}
        >
          <View
            style={{
              flex: 7.5,
              //alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={screen2}
              style={{
                width: "80%",
                height: "80%",
                marginBottom: 150,
                marginTop: 120,
                marginLeft: "15%",
              }}
            />
          </View>
          <View
            style={{
              flex: 7.5,
              //alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={screen2}
              style={{
                width: "80%",
                height: "80%",
                marginBottom: 150,
                marginTop: 120,
                marginLeft: "2%",
              }}
            />
          </View>
          <View
            style={{
              flex: 7.5,
              //alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={screen2}
              style={{
                width: "80%",
                height: "80%",
                marginBottom: 150,
                marginTop: 120,
                marginLeft: "-10%",
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
