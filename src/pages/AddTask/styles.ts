import styled from "styled-components/native";

import { colors, metrics, fonts } from "../../styles";

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${metrics.statusBarHeight}px;
  justify-content: space-between;
`;

export const Container = styled.View`
  padding-left: ${metrics.basePadding}px;
  padding-right: ${metrics.basePadding}px;
  margin-top: ${metrics.doubleBaseMargin * 2}px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: roboto_700;
  font-weight: bold;
  font-size: ${fonts.title}px;
  background: ${colors.primary};
  padding: 9px 0;
`;
