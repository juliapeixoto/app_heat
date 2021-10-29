import React from "react";

import { ScrollView, View } from "react-native";
import { Message } from "../Message";

import { styles } from "./styles";

export function MessageList() {
  const message = {
    id: "1",
    text: "testestsetstsetsetset",
    user: {
      name: "julia",
      avatar_url: "",
    },
  };

  return (
    <ScrollView
      style={styles.message__list}
      contentContainerStyle={styles.message__list__content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
