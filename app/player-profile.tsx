import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function PlayerProfile() {
  const params = useLocalSearchParams();

  const selectedId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const jugadores = [
    {
      id: "1",
      nombre: "Matías Romero",
      posicion: "Extremo derecho",
      club: "Club Atlético Norte",
      pie: "Derecho",
      goles: 12,
      asistencias: 7,
      partidos: 18,
      minutos: 840,
    },
    {
      id: "2",
      nombre: "Franco Pérez",
      posicion: "Volante central",
      club: "Deportivo Sur",
      pie: "Derecho",
      goles: 4,
      asistencias: 11,
      partidos: 20,
      minutos: 1020,
    },
    {
      id: "3",
      nombre: "Joaquín Morales",
      posicion: "Delantero centro",
      club: "Atlético Barrio Sur",
      pie: "Izquierdo",
      goles: 15,
      asistencias: 4,
      partidos: 20,
      minutos: 1010,
    },
  ];

  const jugador = jugadores.find((j) => j.id === String(selectedId));

  console.log("ID recibido:", selectedId);
  console.log("Jugador encontrado:", jugador?.nombre);

  if (!jugador) {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Jugador no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/jugadores")}
      >
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
      <Text style={styles.name}>{jugador.nombre}</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>✓ Validado</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Posición</Text>
        <Text style={styles.value}>{jugador.posicion}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Club</Text>
        <Text style={styles.value}>{jugador.club}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Pie hábil</Text>
        <Text style={styles.value}>{jugador.pie}</Text>
      </View>

      <Text style={styles.sectionTitle}>Estadísticas</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{jugador.goles}</Text>
          <Text style={styles.statLabel}>Goles</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{jugador.asistencias}</Text>
          <Text style={styles.statLabel}>Asistencias</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{jugador.partidos}</Text>
          <Text style={styles.statLabel}>Partidos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{jugador.minutos}</Text>
          <Text style={styles.statLabel}>Minutos</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071a2d",
    padding: 20,
    paddingTop: 70,
  },

  name: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 15,
  },

  badge: {
    backgroundColor: "#0f766e",
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "700",
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
    fontSize: 16,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 15,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  statCard: {
    width: "48%",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
  },

  statLabel: {
    color: "#cbd5e1",
    marginTop: 6,
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
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 14,
  },

});