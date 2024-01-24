import { StyleSheet, View, Alert } from "react-native";
import { Navbar } from "./app/components/Navbar";

import { useState } from "react";

import { MainScreen } from "./app/screens/MainScreen";
import { TodoScreen } from "./app/screens/TodoScreen";

export default function App() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Выучить React Native" },
    { id: "2", title: "Написать приложение" },
  ]);
  const [todoId, setTodoId] = useState(null);

  const addTodo = (title) => {
    // const newTodo = {
    // 	id: Date.now().toString(),
    // 	title: title
    // }

    // setTodos((preTodos) => {
    // 	return [
    // 		...preTodos,
    // 		newTodo
    // 	]
    // })

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены что ходите удалить "${todo.title}"`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Удаление",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id,title) =>{
	setTodos(old=>old.map(todo=>{
		if(todo.id===id){
			todo.title=title
		}
		return todo
	}))	
  }

  return (
    <View>
      <Navbar title="ToDo App" />
      <View style={styles.container}>
        {todoId !== null ? (
          <TodoScreen
            goBack={() => setTodoId(null)}
            onRemove={removeTodo}
            todo={todos.find((todo) => todo.id === todoId)}
			onSave={updateTodo}
          />
        ) : (
          <MainScreen
            onSubmit={addTodo}
            todos={todos}
            onRemove={removeTodo}
            onOpen={(id) => {
              setTodoId(id);
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
