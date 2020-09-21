import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../styles";
import { Wrapper, Priority, Container, Title, Text, CloseIcon } from "./styles";

enum IconTypes {
  Close = 1,
  Play,
  Cancel,
}

interface Props {
  color: string;
  border: string;
  title: string;
  text: string;
  count: string;
  time: string;
  iconType: IconTypes;
}
const Task: React.FC<Props> = ({
  color,
  border,
  title,
  text,
  count,
  time,
  iconType,
}) => {
  const getIcon = () => {
    if (iconType === IconTypes.Close) {
      return (
        <CloseIcon>
          <FontAwesome5 name="times" color={colors.dark} size={15} />
        </CloseIcon>
      );
    } else if (iconType === IconTypes.Play) {
      return (
        <CloseIcon style={{ borderColor: colors.blue }}>
          <FontAwesome5 name="play" color={colors.blue} size={9} />
        </CloseIcon>
      );
    } else if (iconType === IconTypes.Cancel) {
      return (
        <CloseIcon style={{ borderColor: colors.redBorder }}>
          <FontAwesome5 name="times" color={colors.redBorder} size={15} />
        </CloseIcon>
      );
    }
    return null;
  };
  return (
    <Wrapper>
      <Container>
        <Priority color={color} border={border} />
        <View style={{ marginLeft: 20 }}>
          <Title align="left">{title}</Title>
          <Text align="left">{text}</Text>
        </View>
      </Container>
      <Container>
        <View style={{ marginRight: 20 }}>
          <Title align="right">{count}</Title>
          <Text align="right">{time}</Text>
        </View>
        {getIcon()}
      </Container>
    </Wrapper>
  );
};

export default Task;
