import styled from "styled-components/native";

import { metrics, colors } from "../../styles";

export const Wrapper = styled.View`
  margin-bottom: ${metrics.doubleBaseMargin}px;
`;
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: roboto_400;
  font-size: 18px;
  color: ${colors.light};
`;
export const SubTitle = styled.Text`
  font-family: roboto_400;
  font-size: 16px;
  color: ${colors.gray};
`;

export const Text = styled.Text`
  font-family: roboto_400;
  font-size: 16px;
`;
