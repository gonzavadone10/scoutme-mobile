import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function CreateProfile() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Crear perfil deportivo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#94a3b8"
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        placeholderTextColor="#94a3b8"
      />

      <TextInput
        style={styles.input}
        placeholder="Posición"
        placeholderTextColor="#94a3b8"
      />

      <TextInput
        style={styles.input}
        placeholder="Club actual"
        placeholderTextColor="#94a3b8"
      />

      <TextInput
        style={styles.input}
        placeholder="Pie hábil"
        placeholderTextColor="#94a3b8"
      />

      <TextInput
        style={[styles.input, styles.bio]}
        multiline
        placeholder="Biografía deportiva"
        placeholderTextColor="#94a3b8"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071a2d",
    padding: 20,
    paddingTop: 60,
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