import styled from "styled-components/native";
import { colors, metrics, fonts } from "../../styles";

interface ColorProps {
  color: string;
  border: string;
}

interface AlignProps {
  align: "right" | "left";
}

export const Wrapper = styled.View`
  padding: ${metrics.basePadding}px;
  background: ${colors.black};
  border-radius: ${metrics.baseRadius}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Priority = styled.View`
  height: 25px;
  width: 25px;
  background-color: ${(props: ColorProps) => colors[props.color]};
  border: 1px solid ${(props: ColorProps) => colors[props.border]};
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: ${fonts.input}px;
  font-family: roboto_500;
  color: ${colors.light};
  margin-bottom: ${metrics.baseMargin / 2}px;
  text-align: ${(props: AlignProps) =>
    props.align == "right" ? "right" : "left"};
`;

export const Text = styled.Text`
  font-size: ${fonts.regular}px;
  font-family: roboto_300;
  color: ${colors.gray};
  text-align: ${(props: AlignProps) =>
    props.align == "right" ? "right" : "left"};
`;

export const CloseIcon = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${colors.dark};
  align-items: center;
  justify-content: center;
`;
