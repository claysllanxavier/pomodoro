import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../styles";
import { Wrapper, Circle, Container, Title, Text, CloseIcon } from "./styles";

const Task: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Circle color="rgb(105, 64, 70)" borderColor="rgb(222, 85, 106)" />
        <View style={{ marginLeft: 20 }}>
          <Title align="left">Mobile app desing</Title>
          <Text align="left">30 minutes</Text>
        </View>
      </Container>
      <Container>
        <View style={{ marginRight: 20 }}>
          <Title align="right">1/4</Title>
          <Text align="right">25 min</Text>
        </View>
        <CloseIcon>
          <FontAwesome5 name="times" color={colors.dark} size={15} />
        </CloseIcon>
      </Container>
    </Wrapper>
  );
};

export default Task;
