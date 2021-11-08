import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LogoSvg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";
import { UserPhoto } from "../UserPhoto";
import { styles } from "./styles";

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <View style={styles.header}>
      <LogoSvg />

      <View style={styles.header__logout__button}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.header__logout__text}>Sair</Text>
          </TouchableOpacity>
        )}

        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
