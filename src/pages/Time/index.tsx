import React, { useState } from "react";

import Task from "../../components/Task";

import {
  Wrapper,
  Container,
  Circle,
  FirstProgressLayer,
  SecondProgressLayer,
  OffsetLayer,
  CountDown,
  Buttons,
  Button,
  ButtonText,
  CircleBorder,
} from "./styles";

const Time: React.FC = () => {
  const [percent, setPercent] = useState(30);

  const propStyle = (percent: number, base_degrees: number) => {
    const rotateBy = base_degrees + percent * 3.6;
    return {
      transform: [{ rotateZ: `${rotateBy}deg` }],
    };
  };

  const renderThirdLayer = (percent: number) => {
    if (percent > 50) {
      /**
       * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
       * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
       * before passing to the propStyle function
       **/
      return <SecondProgressLayer style={propStyle(percent - 50, 45)} />;
    } else {
      return <OffsetLayer />;
    }
  };

  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <Wrapper>
      <Container>
        <Task
          border="redBorder"
          color="red"
          title="Mobile app design"
          text="30 minutes"
          count="1/4"
          time="25 min"
          iconType={1}
        />
      </Container>

      <Circle>
        <CircleBorder />
        <FirstProgressLayer style={firstProgressLayerStyle} />
        {renderThirdLayer(percent)}
        <CountDown>21:05</CountDown>
      </Circle>
      <Buttons>
        <Button color="#37394c" onPress={() => {}}>
          <ButtonText color="#6d7bf7">Stop</ButtonText>
        </Button>
        <Button color="#6d7bf7" onPress={() => {}}>
          <ButtonText color="#fff">Pause</ButtonText>
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default Time;
