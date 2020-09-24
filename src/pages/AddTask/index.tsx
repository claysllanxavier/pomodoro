import React from "react";
import { ScrollView, View } from "react-native";
import RangeInput from "../../components/RangeInput";

import {
  Wrapper,
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  SubTitle,
  Priorities,
  ButtonCheck,
  ButtonText,
  SaveButton,
  SaveButtonText,
} from "./styles";

const AddTask: React.FC = () => {
  return (
    <Wrapper>
      <ScrollView>
        <Container>
          <Title>New Task</Title>
          <FormGroup>
            <Label>Task name</Label>
            <Input placeholder="Short description" />
          </FormGroup>
          <SubTitle>Task priority</SubTitle>
          <Priorities>
            <ButtonCheck>
              <ButtonText>Hight</ButtonText>
            </ButtonCheck>
            <ButtonCheck>
              <ButtonText>Medium</ButtonText>
            </ButtonCheck>
            <ButtonCheck
              style={{ backgroundColor: "#2c5b44", borderColor: "#56bc69" }}
            >
              <ButtonText style={{ color: "#56bc69" }}>Low</ButtonText>
            </ButtonCheck>
          </Priorities>
          <SubTitle>Preferences</SubTitle>
          <FormGroup>
            <RangeInput title="Tasks" subTitle="Intervals" min={3} max={9} />
            <RangeInput
              title="Work interval"
              subTitle="Minutes"
              min={22}
              max={28}
            />
            <RangeInput
              title="Short break"
              subTitle="Minutes"
              min={2}
              max={8}
            />
          </FormGroup>
        </Container>
        <View style={{ paddingHorizontal: 15 }}>
          <SaveButton>
            <SaveButtonText>Salvar</SaveButtonText>
          </SaveButton>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default AddTask;
