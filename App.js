import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useFonts } from "expo-font";
import Tasks from "./components/Task";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const bg = "#D1C4E9";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [fontsLoaded, fontError] = useFonts({
    "SF-Light": require("./assets/fonts/SFUIText-Light.otf"),
    "SF-Regular": require("./assets/fonts/SFUIText-Regular.otf"),
    "SF-Medium": require("./assets/fonts/SFUIText-Medium.otf"),
    "SF-SemiBold": require("./assets/fonts/SFUIText-Semibold.otf"),
    "SF-Bold": require("./assets/fonts/SFUIText-Bold.otf"),
    "SF-Heavy": require("./assets/fonts/SFUIText-Heavy.otf"),
    // "SF-Bold1": require("./assets/fonts/SFUIText-BoldG1.otf"),
    // "SF-Bold2": require("./assets/fonts/SFUIText-BoldG2.otf"),
    // "SF-Bold3": require("./assets/fonts/SFUIText-BoldG3.otf"),
    // "SF-BoldItalic1": require("./assets/fonts/SFUIText-BoldItalicG1.otf"),
    // "SF-BoldItalic2": require("./assets/fonts/SFUIText-BoldItalicG2.otf"),
    // "SF-BoldItalic3": require("./assets/fonts/SFUIText-BoldItalicG3.otf"),
    // "SF-HeavyItalic": require("./assets/fonts/"),
    // "SF-Italic": require("./assets/fonts/"),
    // "SF-Italic1": require("./assets/fonts/"),
    // "SF-Italic2": require("./assets/fonts/"),
    // "SF-Italic3": require("./assets/fonts/"),
    // "SF-LightItalic": require("./assets/fonts/"),
    // "SF-MediumItalic": require("./assets/fonts/"),
    // "SF-Regular1": require("./assets/fonts/"),
    // "SF-Regular2": require("./assets/fonts/"),
    // "SF-Regular3": require("./assets/fonts/"),
    // "SF-SemiBoldItalic": require("./assets/fonts/"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  const handleClick = () => {
    if (task.trim() !== "" && task !== undefined && task != null) {
      Keyboard.dismiss();
      setTaskList([...taskList, task]);
      setTask("");
    }
    console.log(taskList);
  };

  const handleDelete = (ele) => {
    let tempList = taskList.filter((item) => item !== ele);
    setTaskList(tempList);
    console.log(ele);
    console.log(taskList);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's tasks:</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {taskList.map((task, index) => (
          <View style={styles.task} key={index}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.taskNo}>{index + 1}</Text>
              <Text style={styles.taskText}>{task}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.delete}
              onPress={() => {
                handleDelete(task);
                console.log("pressed");
              }}
            >
              <Ionicons name="ios-trash-bin" size={16} color="#B71C1C" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapperParent}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task..."
          value={task}
          onChangeText={(e) => setTask(e)}
        />
        <TouchableHighlight
          underlayColor={"#eee"}
          style={styles.addWrapper}
          onPress={handleClick}
        >
          <Ionicons name="ios-add" size={20} color="black" />
        </TouchableHighlight>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

NavigationBar.setBackgroundColorAsync(bg);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg,
    padding: 30,
  },
  title: {
    fontFamily: "SF-Bold",
    fontSize: 24,
    marginTop: 60,
    marginBottom: 30,
  },
  task: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingRight: 20,
    paddingLeft: 12,
    marginVertical: 5,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskNo: {
    fontFamily: "SF-SemiBold",
    color: "#fff",
    backgroundColor: "#7E57C2",
    marginRight: 12,
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: "center",
  },
  taskText: {
    fontFamily: "SF-Regular",
    fontSize: 16,
  },
  inputWrapperParent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: bg,
    marginHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: "SF-Regular",
  },
  addWrapper: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: 1,
    paddingTop: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
