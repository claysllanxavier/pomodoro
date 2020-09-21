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

export const CountWrapper = styled.View`
  padding: ${metrics.doubleBasePadding}px;
  background: ${colors.black};
  border-radius: ${metrics.baseRadius}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${metrics.doubleBaseMargin}px 0;
`;

export const Count = styled.Text`
  color: ${colors.white};
  font-family: roboto_700;
  font-weight: bold;
  font-size: ${fonts.title}px;
`;
export const Text = styled.Text`
  color: ${colors.light};
  font-family: roboto_300;
  font-size: ${fonts.regular}px;
`;
export const SubTitle = styled.Text`
  color: ${colors.white};
  font-family: roboto_700;
  font-weight: bold;
  font-size: ${fonts.input}px;
  background: ${colors.primary};
  padding: 9px 0;
`;

export const CompletedWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  padding: 9px 0;
`;

export const HideButtonText = styled.Text`
  color: ${colors.blue};
  font-family: roboto_300;
  font-size: ${fonts.input}px;
`;
export const AddButton = styled.TouchableOpacity`
  padding: 15px 60px;
  border-radius: ${metrics.baseRadius}px;
  color: #fff;
  background-color: ${colors.blue};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${metrics.doubleBaseMargin}px 0;
`;
export const AddButtonText = styled.Text`
  color: #fff;
  margin-left: ${metrics.baseMargin}px;
  font-family: roboto_400;
  font-size: 20px;
`;
