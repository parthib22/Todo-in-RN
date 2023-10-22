// import { View, Text, StyleSheet, Pressable } from "react-native";
// import { useFonts } from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
// import { useCallback, useState } from "react";

// export default function Tasks(props) {
//   const [deleteCheck, setDeleteCheck] = useState();
//   const [fontsLoaded, fontError] = useFonts({
//     "SF-Light": require("../assets/fonts/SFUIText-Light.otf"),
//     "SF-Regular": require("../assets/fonts/SFUIText-Regular.otf"),
//     "SF-Medium": require("../assets/fonts/SFUIText-Medium.otf"),
//     "SF-SemiBold": require("../assets/fonts/SFUIText-Semibold.otf"),
//     "SF-Bold": require("../assets/fonts/SFUIText-Bold.otf"),
//     "SF-Heavy": require("../assets/fonts/SFUIText-Heavy.otf"),
//   });

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }

//   // const handleDeleteCheck = useCallback(() => {
//   //   onValueChange(deleteCheck);
//   // }, [onValueChange]);

//   return (
//     <View style={styles.task}>
//       <View style={{ flexDirection: "row", alignItems: "center" }}>
//         <Text style={styles.taskNo}>{props.l + 1}</Text>
//         <Text style={styles.taskText}>{props.text}</Text>
//       </View>
//       <Pressable
//         style={styles.delete}
//         onPress={() => {
//           setDeleteCheck(true);
//           handleDeleteCheck;
//         }}
//       >
//         <Ionicons name="ios-trash-bin" size={16} color="#B71C1C" />
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   task: {
//     backgroundColor: "#fff",
//     paddingVertical: 15,
//     paddingRight: 20,
//     paddingLeft: 12,
//     marginVertical: 5,
//     borderColor: "#000",
//     borderRadius: 10,
//     borderWidth: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   taskNo: {
//     fontFamily: "SF-SemiBold",
//     color: "#fff",
//     backgroundColor: "#7E57C2",
//     marginRight: 12,
//     borderRadius: 50,
//     width: 20,
//     height: 20,
//     textAlign: "center",
//   },
//   taskText: {
//     fontFamily: "SF-Regular",
//     fontSize: 16,
//   },
// });
