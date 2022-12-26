import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toasts = useToast();

  const addTodo = (e) => {
    e.preventDefault();
    if (!enteredTodo) {
      toasts({
        title: "エラー",
        status: "error",
        duration: 2000,
        isClosable: true,
        description: "入力してください",
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <HStack>
          <Input
            placeholder="新しいタスク"
            _placeholder={{ opacity: "0.3", color: "gray.500" }}
            size="lg"
            p={3}
            bgColor="white"
            variant="flushed"
            value={enteredTodo}
            onChange={(e) => setEnteredTodo(e.target.value)}
          />
          <Button
            borderColor={"blue.200"}
            _hover={{
              bgColor: "blue.100",
            }}
            m={2}
            borderWidth={"2px"}
            bgColor="white"
            type="submit"
          >
            追加
          </Button>
        </HStack>
      </form>
    </div>
  );
};

export { Form };
