import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function CreateProfile() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [posicion, setPosicion] = useState("");
  const [club, setClub] = useState("");
  const [pie, setPie] = useState("");
  const [biografia, setBiografia] = useState("");

  const guardarPerfil = async () => {
    const perfil = {
      nombre,
      edad,
      posicion,
      club,
      pie,
      biografia,
    };

    await AsyncStorage.setItem("miPerfil", JSON.stringify(perfil));

    Alert.alert("Perfil guardado", "Tu perfil deportivo fue creado correctamente.");

    router.replace("/my-profile");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Crear perfil deportivo</Text>

      <TextInput style={styles.input} placeholder="Nombre completo" placeholderTextColor="#94a3b8" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Edad" placeholderTextColor="#94a3b8" value={edad} onChangeText={setEdad} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Posición" placeholderTextColor="#94a3b8" value={posicion} onChangeText={setPosicion} />
      <TextInput style={styles.input} placeholder="Club actual" placeholderTextColor="#94a3b8" value={club} onChangeText={setClub} />
      <TextInput style={styles.input} placeholder="Pie hábil" placeholderTextColor="#94a3b8" value={pie} onChangeText={setPie} />

      <TextInput
        style={[styles.input, styles.bio]}
        multiline
        placeholder="Biografía deportiva"
        placeholderTextColor="#94a3b8"
        value={biografia}
        onChangeText={setBiografia}
      />

      <TouchableOpacity style={styles.button} onPress={guardarPerfil}>
        <Text style={styles.buttonText}>Guardar perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#071a2d" },
  content: { padding: 20, paddingTop: 60, paddingBottom: 110 },
  title: { color: "#fff", fontSize: 28, fontWeight: "800", marginBottom: 25 },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  },
  bio: { height: 120, textAlignVertical: "top" },
  button: {
    backgroundColor: "#1694ff",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "800", fontSize: 16 },
});