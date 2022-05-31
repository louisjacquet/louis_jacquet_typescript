import React from "react";
import {
  Image,
  FlatList,
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
        <View style={{ flex: 15, backgroundColor: "red" }}>
          <Text style={[styles.texte201, { marginTop: 50, marginLeft: 80 }]}>
            Glossaire
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "snow",
              flexDirection: "row",
              shadowColor: "#000000",
              shadowOpacity: 0.2,
              shadowRadius: 10,
              marginLeft: 80,
              marginRight: 80,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            {letter.map((letter) => {
              if (letter.data.length >= 1) {
                return (
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "600",
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      {letter.name}
                    </Text>
                  </View>
                );
              } else {
                return (
                  <View>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 20,
                        fontWeight: "600",
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      {letter.name}
                    </Text>
                  </View>
                );
              }
            })}
          </View>

          {/*
          


          */}
          <View style={{ flex: 10, backgroundColor: "green" }}>
            {letter.map((letter) => {
              const isleetergotdata = letter.data?.length > 0;
              if (!isleetergotdata) {
                return null;
              }
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "blue",
                    flexDirection: "row",
                    marginLeft: 135,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 90,
                      fontWeight: "200",
                      marginLeft: 15,
                      marginRight: 15,
                    }}
                  >
                    {letter.name}
                  </Text>
                  {letter.data?.map((item, index) => {
                    return (
                      <>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            marginTop: 25,
                            width: "50%",
                          }}
                        >
                          {letter.data[index]}
                          {"\n"}
                        </Text>
                        <Text style={{ marginTop: 50, width: "50%" }}>
                          {letter.description[index]}
                          {"\n"}
                        </Text>
                      </>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>

        {/*
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        */}
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
{
  /*
    
    








     */
}

const letter = [
  {
    id: "1",
    name: "A",
    data: ["Abricot", "Abricot", "Abricot"],
    description: [
      "Un abricot est un fruit",
      "Un abricot est un fruit",
      "Un abricot est un fruit",
    ],
  },
  {
    id: "2",
    name: "B",
    data: ["Branche", "Branche", "Branche"],
    description: [
      "Une branche vient d'un arbre",
      "Une branche vient d'un arbre",
      "Une branche vient d'un arbre",
    ],
  },
  {
    id: "3",
    name: "C",
    data: [],
    description: [],
  },
  {
    id: "4",
    name: "D",
    data: ["Dalle", "Dalle", "Dalle"],
    description: [
      "Une dalle de pierre",
      "Une dalle de pierre",
      "Une dalle de pierre",
    ],
  },
  {
    id: "5",
    name: "E",
    data: [],
    description: [],
  },
  {
    id: "6",
    name: "F",
    data: [],
    description: [],
  },
  {
    id: "7",
    name: "G",
    data: [],
    description: [],
  },
  {
    id: "8",
    name: "H",
    data: [],
    description: [],
  },
  {
    id: "9",
    name: "I",
    data: [],
    description: [],
  },
  {
    id: "10",
    name: "J",
    data: [],
    description: [],
  },

  {
    id: "11",
    name: "K",
    data: [],
    description: [],
  },
  {
    id: "12",
    name: "L",
    data: [],
    description: [],
  },
  {
    id: "13",
    name: "M",
    data: [],
    description: [],
  },
  {
    id: "14",
    name: "N",
    data: [],
    description: [],
  },
  {
    id: "15",
    name: "O",
    data: [],
    description: [],
  },

  {
    id: "16",
    name: "P",
    data: [],
    description: [],
  },
  {
    id: "17",
    name: "Q",
    data: [],
    description: [],
  },
  {
    id: "18",
    name: "R",
    data: [],
    description: [],
  },
  {
    id: "19",
    name: "S",
    data: [],
    description: [],
  },
  {
    id: "20",
    name: "T",
    data: [],
    description: [],
  },

  {
    id: "21",
    name: "U",
    data: [],
    description: [],
  },
  {
    id: "22",
    name: "V",
    data: [],
    description: [],
  },
  {
    id: "23",
    name: "W",
    data: [],
    description: [],
  },
  {
    id: "24",
    name: "X",
    data: [],
    description: [],
  },
  {
    id: "25",
    name: "Y",
    data: [],
    description: [],
  },
  {
    id: "26",
    name: "Z",
    data: [],
    description: [],
  },
];
{
  /*









*/
}
const item = [
  {
    id: "1",
    name: "Abricot",
    description: "Un abricot est un fruit",
  },
];
