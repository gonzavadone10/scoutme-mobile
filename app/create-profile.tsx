import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { guardarMiPerfil, obtenerMiPerfil } from "./store/profileStore";

export default function CreateProfile() {
  const perfilActual = obtenerMiPerfil();

  const [nombre, setNombre] = useState(perfilActual?.nombre || "");
  const [edad, setEdad] = useState(perfilActual?.edad || "");
  const [posicion, setPosicion] = useState(perfilActual?.posicion || "");
  const [club, setClub] = useState(perfilActual?.club || "");
  const [pie, setPie] = useState(perfilActual?.pie || "");
  const [biografia, setBiografia] = useState(perfilActual?.biografia || "");

  const guardarPerfil = () => {
    guardarMiPerfil({
      nombre,
      edad,
      posicion,
      club,
      pie,
      biografia,
    });

    router.replace("/my-profile");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>
        {perfilActual ? "Editar perfil deportivo" : "Crear perfil deportivo"}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#94a3b8"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
      />

      <TextInput
        style={styles.input}
        placeholder="Posición"
        placeholderTextColor="#94a3b8"
        value={posicion}
        onChangeText={setPosicion}
      />

      <TextInput
        style={styles.input}
        placeholder="Club actual"
        placeholderTextColor="#94a3b8"
        value={club}
        onChangeText={setClub}
      />

      <TextInput
        style={styles.input}
        placeholder="Pie hábil"
        placeholderTextColor="#94a3b8"
        value={pie}
        onChangeText={setPie}
      />

      <TextInput
        style={[styles.input, styles.bio]}
        multiline
        placeholder="Biografía deportiva"
        placeholderTextColor="#94a3b8"
        value={biografia}
        onChangeText={setBiografia}
      />

      <TouchableOpacity style={styles.button} onPress={guardarPerfil}>
        <Text style={styles.buttonText}>
          {perfilActual ? "Guardar cambios" : "Guardar perfil"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071a2d",
  },

  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 110,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  },

  bio: {
    height: 120,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#1694ff",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});