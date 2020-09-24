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

export const FormGroup = styled.View`
  padding: ${metrics.doubleBasePadding * 1.25}px;
  background: ${colors.black};
  border-radius: ${metrics.baseRadius}px;
  margin-top: ${metrics.doubleBaseMargin}px;
`;

export const Label = styled.Text`
  font-family: roboto_400;
  font-size: 18px;
  color: ${colors.light};
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.light,
})`
  margin-top: ${metrics.baseMargin}px;
  font-family: roboto_400;
  font-size: 15px;
  color: ${colors.light};
`;

export const SubTitle = styled.Text`
  color: ${colors.white};
  font-family: roboto_700;
  font-weight: bold;
  font-size: 20px;
  margin-top: ${metrics.doubleBaseMargin}px;
`;

export const Priorities = styled.View`
  padding: ${metrics.doubleBasePadding * 1.25}px;
  background: ${colors.black};
  border-radius: ${metrics.baseRadius}px;
  margin-top: ${metrics.doubleBaseMargin}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonCheck = styled.TouchableOpacity`
  width: 90px;
  padding: ${metrics.basePadding / 2}px ${metrics.doubleBasePadding / 1.75}px;
  background-color: ${colors.dark};
  border: 1px solid ${colors.dark};
  border-radius: 25px;
`;
export const ButtonText = styled.Text`
  color: ${colors.light};
  font-family: roboto_300;
  font-size: ${fonts.input}px;
  text-align: center;
`;

export const SaveButton = styled.TouchableOpacity`
  padding: 15px 60px;
  border-radius: ${metrics.baseRadius}px;
  color: #fff;
  background-color: ${colors.blue};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${metrics.doubleBaseMargin}px 0;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  margin-left: ${metrics.baseMargin}px;
  font-family: roboto_400;
  font-size: 20px;
`;
