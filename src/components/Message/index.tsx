import React from "react";
import { MotiView } from "@motify/components";
import { Text, View } from "react-native";
import { UserPhoto } from "../UserPhoto";
import { styles } from "./styles";

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type Props = {
  data: MessageProps;
};

export function Message({ data }: Props) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
      style={styles.message}
    >
      <Text style={styles.message__text}>{data.text}</Text>

      <View style={styles.message__user}>
        <UserPhoto sizes="SMALL" imageUri={data.user.avatar_url} />
        <Text style={styles.message__user__name}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
