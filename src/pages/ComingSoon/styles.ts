import styled from "styled-components/native";

import { colors, metrics } from "../../styles";

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${metrics.statusBarHeight}px;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.blue};
  font-family: roboto_500;
  font-size: 30px;
`;
