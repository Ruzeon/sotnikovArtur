import { View } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const nav = useNavigation();

  const logOut = async () => {
    await AsyncStorage.removeItem("token").then(() => {
      nav.replace("Login");
    });
  };
  return (
    <View style={{ flex: 1, gap: 10, alignItems: "center", margin: 16 }}>
      <Button title={"Выйти"} onPress={() => logOut()} />
    </View>
  );
};

export default Settings;
