import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <LogoSvg />

      <View style={styles.header__logout__button}>
        <TouchableOpacity>
          <Text style={styles.header__logout__text}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri="https://github.com/juliapeixoto.png" />
      </View>
    </View>
  );
}
