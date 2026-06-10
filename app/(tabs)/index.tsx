import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.logo}>SCOUTME</Text>

        <Text style={styles.title}>Descubrí tu potencial</Text>

        <Text style={styles.subtitle}>
          Consultá perfiles, revisá estadísticas y compará jugadores desde tu celular.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/create-profile")}
        >
          <Text style={styles.primaryButtonText}>
            Crear mi perfil deportivo
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accesos rápidos</Text>

        <TouchableOpacity style={styles.optionCard} onPress={() => router.push("/my-profile")}>
          <Text style={styles.optionTitle}>👤 Mi perfil deportivo</Text>

          <Text style={styles.optionText}>
            Consultá y actualizá tu información como jugador.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => router.push("/stats")}
        >
          <Text style={styles.optionTitle}>📊 Cargar estadísticas</Text>
          <Text style={styles.optionText}>
            Registrá partidos, goles, asistencias y minutos jugados.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => router.push("/jugadores")}
        >
          <Text style={styles.optionTitle}>⚽ Ver jugadores</Text>
          <Text style={styles.optionText}>
            Explorá perfiles deportivos disponibles para scouting.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => router.push("/compare")}
        >
          <Text style={styles.optionTitle}>⚔️ Comparar jugadores</Text>
          <Text style={styles.optionText}>
            Analizá el rendimiento entre dos perfiles deportivos.
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Diferencial ScoutMe</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>✓ Datos deportivos organizados</Text>
          <Text style={styles.infoText}>
            A diferencia de una red social, ScoutMe ordena perfiles, estadísticas
            y validaciones para facilitar el trabajo de scouts y entrenadores.
          </Text>
        </View>
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
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#0b4ea2",
    borderRadius: 24,
    padding: 24,
    marginTop: 40,
    marginBottom: 24,
  },
  logo: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 18,
    letterSpacing: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 12,
  },
  subtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#1694ff",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 14,
  },
  optionCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  optionTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  optionText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 14,
    lineHeight: 20,
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