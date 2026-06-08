import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function StatsScreen() {
  const [rival, setRival] = useState("");
  const [goles, setGoles] = useState("");
  const [asistencias, setAsistencias] = useState("");
  const [minutos, setMinutos] = useState("");

  const guardarEstadistica = () => {
    Alert.alert(
      "Estadística guardada",
      "Los datos fueron registrados correctamente en el perfil del jugador."
    );

    setRival("");
    setGoles("");
    setAsistencias("");
    setMinutos("");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.backButtonText}>← Volver al inicio</Text>
      </TouchableOpacity>

      <Text style={styles.kicker}>Perfil deportivo</Text>
      <Text style={styles.title}>Cargar estadísticas</Text>

      <Text style={styles.subtitle}>
        Registrá el rendimiento de un partido para mantener actualizado tu perfil.
      </Text>

      <View style={styles.formCard}>
        <TextInput
          style={styles.input}
          placeholder="Rival"
          placeholderTextColor="#94a3b8"
          value={rival}
          onChangeText={setRival}
        />

        <TextInput
          style={styles.input}
          placeholder="Goles"
          placeholderTextColor="#94a3b8"
          keyboardType="numeric"
          value={goles}
          onChangeText={setGoles}
        />

        <TextInput
          style={styles.input}
          placeholder="Asistencias"
          placeholderTextColor="#94a3b8"
          keyboardType="numeric"
          value={asistencias}
          onChangeText={setAsistencias}
        />

        <TextInput
          style={styles.input}
          placeholder="Minutos jugados"
          placeholderTextColor="#94a3b8"
          keyboardType="numeric"
          value={minutos}
          onChangeText={setMinutos}
        />

        <TouchableOpacity style={styles.button} onPress={guardarEstadistica}>
          <Text style={styles.buttonText}>Guardar estadística</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>¿Para qué sirve?</Text>
        <Text style={styles.infoText}>
          Estas estadísticas permiten construir un perfil deportivo más completo
          y facilitan el análisis por parte de entrenadores y scouts.
        </Text>
      </View>
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

  backButton: {
    backgroundColor: "#1694ff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 20,
    alignSelf: "flex-start",
  },

  backButtonText: {
    color: "#fff",
    fontWeight: "800",
  },

  kicker: {
    color: "rgba(255,255,255,0.65)",
    textTransform: "uppercase",
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 8,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8,
  },

  subtitle: {
    color: "rgba(255,255,255,0.78)",
    lineHeight: 21,
    marginBottom: 20,
  },

  formCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.12)",
    color: "#fff",
    borderRadius: 14,
    padding: 15,
    marginBottom: 14,
  },

  button: {
    backgroundColor: "#1694ff",
    borderRadius: 14,
    padding: 15,
    alignItems: "center",
    marginTop: 4,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
  },

  infoCard: {
    backgroundColor: "rgba(34,197,94,0.14)",
    borderRadius: 16,
    padding: 16,
  },

  infoTitle: {
    color: "#86efac",
    fontWeight: "800",
    marginBottom: 8,
  },

  infoText: {
    color: "rgba(255,255,255,0.8)",
    lineHeight: 20,
  },
});