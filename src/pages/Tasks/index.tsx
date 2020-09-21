import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Task from "../../components/Task";

import {
  Wrapper,
  Container,
  Title,
  CountWrapper,
  Count,
  Text,
  SubTitle,
  CompletedWrapper,
  HideButtonText,
  AddButton,
  AddButtonText,
} from "./styles";

import tasks from "./data.json";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Tasks: React.FC = () => {
  const navigation = useNavigation();

  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: "TITLE",
        render: () => <Title>Today</Title>,
        isTitle: true,
      },
      {
        key: "COUNT",
        render: () => renderCount(),
      },
      {
        key: "ALL_TASKS_TITLE",
        render: () => <SubTitle>All Tasks</SubTitle>,
        isTitle: true,
      },
      {
        key: "ALL_TASKS",
        render: () => renderAllTasks(),
      },
      {
        key: "COMPLETED_TASKS_TITLE",
        render: () => renderCompletedTitle(),
        isTitle: true,
      },
      {
        key: "COMPLETED_TASKS",
        render: () => renderCompletedTasks(),
      },
      {
        key: "BUTTOn",
        render: () => renderButton(),
      },
    ];

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    };
  }, []);

  const renderAllTasks = () => (
    <View>
      {tasks.allTasks.map((task) => (
        <Task
          border={task.border}
          color={task.color}
          title={task.title}
          text={task.text}
          count={task.count}
          time={task.time}
          iconType={task.iconType}
        />
      ))}
    </View>
  );

  const renderCompletedTasks = () => (
    <View>
      {tasks.completedTasks.map((task) => (
        <Task
          border={task.border}
          color={task.color}
          title={task.title}
          text={task.text}
          count={task.count}
          time={task.time}
          iconType={task.iconType}
        />
      ))}
    </View>
  );

  const renderCompletedTitle = () => (
    <CompletedWrapper>
      <SubTitle>Completed</SubTitle>
      <TouchableOpacity>
        <HideButtonText>Hide</HideButtonText>
      </TouchableOpacity>
    </CompletedWrapper>
  );

  const renderCount = () => (
    <CountWrapper>
      <Count>5.3</Count>
      <Text>Estimated {"\n"} time (h)</Text>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#ececec",
          height: 30,
        }}
      />
      <Count>4</Count>
      <Text>Total tasks {"\n"} in project</Text>
    </CountWrapper>
  );

  const renderButton = () => (
    <AddButton
      onPress={() => {
        navigation.navigate("AddTask");
      }}
    >
      <FontAwesome5 name="plus" color="white" size={15} />
      <AddButtonText>Add new task</AddButtonText>
    </AddButton>
  );

  return (
    <Wrapper>
      <Container>
        <FlatList
          data={data}
          renderItem={({ item }) => item.render()}
          keyExtractor={(item) => item.key}
          stickyHeaderIndices={indexes}
          onRefresh={() => {}}
          refreshing={false}
        />
      </Container>
    </Wrapper>
  );
};

export default Tasks;
