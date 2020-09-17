import styled from "styled-components/native";

import { colors, metrics } from "../../styles";

interface ColorProps {
  color: string;
}

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

export const Circle = styled.View`
  margin-left: auto;
  margin-right: auto;
  width: ${metrics.circleSize}px;
  height: ${metrics.circleSize}px;
  border: 15px solid #393939;
  border-radius: ${metrics.circleSize}px;
  justify-content: center;
  align-items: center;
`;

export const CircleBorder = styled.View`
  width: 310px;
  height: 310px;
  position: absolute;
  border-width: 15px;
  border-color: #2d2d2d;
  border-radius: ${metrics.circleSize}px;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.1);
`;

export const FirstProgressLayer = styled.View`
  width: ${metrics.circleSize}px;
  height: ${metrics.circleSize}px;
  position: absolute;
  border-width: 15px;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: ${colors.blue};
  border-top-color: ${colors.blue};
  border-radius: ${metrics.circleSize}px;
  transform: rotateZ(-135deg);
`;

export const SecondProgressLayer = styled.View`
  width: ${metrics.circleSize}px;
  height: ${metrics.circleSize}px;
  position: absolute;
  border-width: 15px;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: ${colors.blue};
  border-top-color: ${colors.blue};
  border-radius: ${metrics.circleSize}px;
  transform: rotateZ(45deg);
`;

export const OffsetLayer = styled.View`
  width: ${metrics.circleSize}px;
  height: ${metrics.circleSize}px;
  position: absolute;
  border-width: 15px;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: #393939;
  border-top-color: #393939;
  border-radius: ${metrics.circleSize}px;
  transform: rotateZ(-135deg);
`;

export const CountDown = styled.Text`
  position: absolute;
  font-size: 55px;
  font-weight: bold;
  font-family: roboto_700;
  color: ${colors.white};
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: ${metrics.doubleBasePadding}px;
`;
export const Button = styled.TouchableOpacity`
  padding: 15px 60px;
  border-radius: ${metrics.baseRadius}px;
  color: #fff;
  background-color: ${(props: ColorProps) => props.color};
`;
export const ButtonText = styled.Text`
  color: ${(props: ColorProps) => props.color};
  font-weight: 400;
  text-align: center;
  font-size: 18px;
  font-family: roboto_400;
`;
