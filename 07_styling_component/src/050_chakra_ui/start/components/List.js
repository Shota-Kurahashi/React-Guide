import {
  VStack,
  StackDivider,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      color={{ sm: "red.500", md: "blue.500" }}
      borderColor="black.100"
      bgColor="white"
      borderWidth="1px"
      borderRadius="3px"
      alignItems={"start"}
      p={5}
      width="80%"
    >
      {todos.map((todo) => {
        return (
          <HStack key={todo.id} spacing="5">
            <IconButton
              isRound
              bgColor={"cyan.100"}
              opacity={0.5}
              icon={<VscCheck />}
              onClick={() => complete(todo.id)}
            >
              完了
            </IconButton>
            <Text>{todo.content}</Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default List;
