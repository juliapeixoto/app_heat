import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { COLORS } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);

  return (
    <View style={styles.message__form}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendMessage}
        style={styles.message__form__input}
      />
      <Button
        title="ENVIAR MENSAGEM"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
      />
    </View>
  );
}
