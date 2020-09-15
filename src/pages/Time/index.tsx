import React from "react";
import { Text } from "react-native";

import Task from "../../components/Task";

import { Wrapper, Container } from "./styles";

const Time: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Task />
      </Container>
    </Wrapper>
  );
};

export default Time;
