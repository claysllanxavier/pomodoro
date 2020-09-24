import React from "react";
import { View } from "react-native";
import { Wrapper, Container, Title, SubTitle, Text } from "./styles";

interface Props {
  title: string;
  subTitle: string;
  min: number;
  max: number;
}

interface NumberProp {
  color: string;
  value: number;
  font: number;
}

const RangeInput: React.FC<Props> = ({ title, subTitle, min, max }) => {
  const { numbers, middle } = React.useMemo(() => {
    const colors = ["#535353", "#727272", "#d3d3d3", "#6d7bf7"];
    const range_numbers = new Array(max - min + 1)
      .fill(undefined)
      .map((d, i) => i + min);

    const middle = range_numbers[Math.round((range_numbers.length - 1) / 2)];
    const middle_index = Math.round((range_numbers.length - 1) / 2);
    let numbers: NumberProp[] = [];

    let count = 0;
    range_numbers.forEach((number, index) => {
      numbers.push({
        color: colors[count],
        value: number,
        font: 16 + count,
      });
      if (index <= middle_index) {
        count++;
      } else {
        count--;
      }
      if (number === middle) count = 2;
    });

    return {
      numbers,
      middle,
    };
  }, []);

  const renderNumber = (number: NumberProp) => {
    if (number.value != middle) {
      return (
        <Text style={{ color: number.color, fontSize: number.font }}>
          {number.value}
        </Text>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: number.color,
            paddingHorizontal: 20,
            paddingVertical: 7,
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              color: "white",

              fontSize: number.font,
            }}
          >
            {number.value}
          </Text>
        </View>
      );
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
      <Container style={{ marginVertical: 15 }}>
        {numbers.map((number) => renderNumber(number))}
      </Container>
    </Wrapper>
  );
};

export default RangeInput;
