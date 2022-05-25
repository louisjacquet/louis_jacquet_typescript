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
import blanc from "../../../assets/blanc.png";
import img_back3 from "../../../assets/img_back_3.png";
import line_green from "../../../assets/green_color.png";
import logo from "../../../assets/BNP_Paribas_Cardif.png";
import algue from "../../../assets/Algue.png";
import face1 from "../../../assets/Face1.png";
import face2 from "../../../assets/Face2.png";
import face3 from "../../../assets/Face3.png";
import face4 from "../../../assets/Face4.png";
import face5 from "../../../assets/Face5.png";
import face6 from "../../../assets/Face6.png";
import face7 from "../../../assets/Face7.png";
import face8 from "../../../assets/Face8.png";
import face9 from "../../../assets/Face9.png";

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

        <View
          style={{ flex: 5, backgroundColor: "white", flexDirection: "row" }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
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
              centrés autour{"\n"} de l'utilisateur final.
            </Text>
          </View>

          <Image
            source={algue}
            style={{
              width: 550,
              height: 275,
              marginTop: 10,
              //marginLeft: "52%",
              //marginBottom: "40%",
            }}
          />
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: "white",
            marginTop: -120,
            marginBottom: 250,
          }}
        >
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
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "47%", marginTop: -150 }]}
          >
            <Image source={face2} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "-2.5%",
              marginTop: 5,
            }}
          >
            Charlotte Gascoin
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginRight: "-2.5%",
              marginTop: 5,
              color: "green",
            }}
          >
            UX Lead
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "67%", marginTop: -150 }]}
          >
            <Image source={face3} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "-42.5%",
              marginTop: 5,
            }}
          >
            Amine El ouarzadi
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginRight: "-42.5%",
              marginTop: 5,
              color: "green",
            }}
          >
            Front-end Developper
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "27%", marginTop: "5%" }]}
          >
            <Image source={face4} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "37.5%",
              marginTop: 5,
            }}
          >
            Eva Anani
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
            UI/UX Designer
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "47%", marginTop: -150 }]}
          >
            <Image source={face5} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "-2.5%",
              marginTop: 5,
            }}
          >
            Nicolas Lebert
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginRight: "-2.5%",
              marginTop: 5,
              color: "green",
            }}
          >
            Front-end Developper
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "67%", marginTop: -150 }]}
          >
            <Image source={face6} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "-42.5%",
              marginTop: 5,
            }}
          >
            Arnaud Duthoit
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginRight: "-42.5%",
              marginTop: 5,
              color: "green",
            }}
          >
            MOA
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              textAlign: "center",
              marginTop: 25,
            }}
          >
            Sponsorisée par :
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "27%", marginTop: "5%" }]}
          >
            <Image source={face7} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "37.5%",
              marginTop: 5,
            }}
          >
            Anne Choksang
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
            Head of innovation
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "47%", marginTop: -150 }]}
          >
            <Image source={face8} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "-2.5%",
              marginTop: 5,
            }}
          >
            Emmanuel Le Porto
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginRight: "-2.5%",
              marginTop: 5,
              color: "green",
            }}
          >
            Head of Dat, Digital & Architecture IT departement
          </Text>
          <TouchableHighlight
            style={[styles.imagePhoto, { marginLeft: "67%", marginTop: -150 }]}
          >
            <Image source={face9} style={styles.imagePhoto} />
          </TouchableHighlight>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginRight: "-42.5%",
              marginTop: 5,
            }}
          >
            Stanislas Jacquet
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginRight: "-42.5%",
              marginTop: 5,
              color: "green",
            }}
          >
            Head of Ddigital Transversal Factory
          </Text>
        </View>

        <View
          style={[
            styles.backgroundContainer,
            {
              flexDirection: "row",
              backgroundColor: "white",
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
            backgroundColor: "white",
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
            flex: 0.35,
            flexDirection: "row",
            backgroundColor: "white",
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
