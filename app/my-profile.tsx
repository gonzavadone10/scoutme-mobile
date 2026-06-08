import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MyProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.backButtonText}>← Volver al inicio</Text>
      </TouchableOpacity>

      <Text style={styles.kicker}>Perfil deportivo</Text>
      <Text style={styles.title}>Matías Romero</Text>

      <View style={styles.validationCard}>
        <Text style={styles.validationText}>✓ Perfil validado</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Posición</Text>
        <Text style={styles.value}>Extremo derecho</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Club</Text>
        <Text style={styles.value}>Club Atlético Norte</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Pie hábil</Text>
        <Text style={styles.value}>Derecho</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Biografía</Text>
        <Text style={styles.value}>
          Jugador ofensivo con buena velocidad, capacidad de desborde y definición.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Estadísticas</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Goles</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Asistencias</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>18</Text>
          <Text style={styles.statLabel}>Partidos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>840</Text>
          <Text style={styles.statLabel}>Minutos</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Logros</Text>

      <View style={styles.achievement}>
        <Text style={styles.achievementText}>🏆 Perfil validado por scout</Text>
      </View>

      <View style={styles.achievement}>
        <Text style={styles.achievementText}>⚽ 10+ goles en temporada</Text>
      </View>

      <View style={styles.achievement}>
        <Text style={styles.achievementText}>⭐ Jugador destacado del torneo</Text>
      </View>

      <Text style={styles.sectionTitle}>Videos destacados</Text>

      <View style={styles.videoCard}>
        <Text style={styles.videoTitle}>🎥 Goles destacados</Text>
      </View>

      <View style={styles.videoCard}>
        <Text style={styles.videoTitle}>🎥 Mejores asistencias</Text>
      </View>

      <View style={styles.videoCard}>
        <Text style={styles.videoTitle}>🎥 Jugadas individuales</Text>
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
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 12,
  },

  validationCard: {
    backgroundColor: "rgba(34,197,94,0.14)",
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
  },

  validationText: {
    color: "#86efac",
    fontWeight: "800",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },

  label: {
    color: "#94a3b8",
    marginBottom: 4,
  },

  value: {
    color: "#fff",
    fontWeight: "700",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 14,
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 14,
    padding: 18,
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },

  statLabel: {
    color: "#cbd5e1",
    marginTop: 4,
  },

  achievement: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },

  achievementText: {
    color: "#fff",
    fontWeight: "700",
  },

  videoCard: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },

  videoTitle: {
    color: "#fff",
    fontWeight: "700",
  },
});