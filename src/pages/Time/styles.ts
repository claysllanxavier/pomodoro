import styled from "styled-components/native";

import { colors, metrics } from "../../styles";

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${metrics.statusBarHeight}px;
`;

export const Container = styled.View`
  padding-left: ${metrics.basePadding}px;
  padding-right: ${metrics.basePadding}px;
  margin-top: ${metrics.doubleBaseMargin * 2}px;
`;
