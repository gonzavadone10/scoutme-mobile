import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const jugadores = [
  {
    id: 1,
    nombre: "Matías Romero",
    posicion: "Extremo derecho",
    club: "Club Atlético Norte",
    validado: true,
    goles: 12,
    asistencias: 7,
    partidos: 18,
  },
  {
    id: 2,
    nombre: "Franco Pérez",
    posicion: "Volante central",
    club: "Deportivo Sur",
    validado: true,
    goles: 4,
    asistencias: 11,
    partidos: 20,
  },
  {
    id: 3,
    nombre: "Lucas Torres",
    posicion: "Defensor central",
    club: "Atlético Oeste",
    validado: false,
    goles: 2,
    asistencias: 1,
    partidos: 21,
  },
  {
    id: 4,
    nombre: "Tomás Aguirre",
    posicion: "Delantero centro",
    club: "Barrio Norte FC",
    validado: true,
    goles: 18,
    asistencias: 3,
    partidos: 19,
  },
  {
    id: 5,
    nombre: "Nicolás Silva",
    posicion: "Lateral izquierdo",
    club: "Juventud Sur",
    validado: false,
    goles: 1,
    asistencias: 6,
    partidos: 16,
  },
  {
    id: 6,
    nombre: "Bruno Medina",
    posicion: "Arquero",
    club: "San Martín FC",
    validado: true,
    goles: 0,
    asistencias: 0,
    partidos: 22,
  },
  {
    id: 7,
    nombre: "Santiago López",
    posicion: "Enganche",
    club: "Estrella del Sur",
    validado: true,
    goles: 9,
    asistencias: 10,
    partidos: 18,
  },
  {
    id: 8,
    nombre: "Agustín Herrera",
    posicion: "Lateral derecho",
    club: "Defensores Unidos",
    validado: false,
    goles: 1,
    asistencias: 5,
    partidos: 17,
  },
  {
    id: 9,
    nombre: "Joaquín Morales",
    posicion: "Delantero centro",
    club: "Atlético Barrio Sur",
    validado: true,
    goles: 15,
    asistencias: 4,
    partidos: 20,
  },
];

export default function JugadoresScreen() {
  const [search, setSearch] = useState("");
  const [showValidated, setShowValidated] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>Scouting digital</Text>
      <Text style={styles.title}>Jugadores</Text>
      <Text style={styles.subtitle}>
        Explorá perfiles deportivos con estadísticas, club y estado de validación.
      </Text>

      <TextInput
        placeholder="Buscar jugador..."
        placeholderTextColor="#94a3b8"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.filterRow}>

        <TouchableOpacity
          style={[
            styles.filterButton,
            !showValidated && styles.filterButtonActive,
          ]}
          onPress={() => setShowValidated(false)}
        >
          <Text style={styles.filterText}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            showValidated && styles.filterButtonActive,
          ]}
          onPress={() => setShowValidated(true)}
        >
          <Text style={styles.filterText}>Validados</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.compareButton}
        onPress={() => router.push("/compare")}
      >
        <Text style={styles.compareButtonText}>⚔️ Comparar jugadores</Text>
      </TouchableOpacity>

      {jugadores
        .filter((jugador) =>
          jugador.nombre.toLowerCase().includes(search.toLowerCase())
        )
        .filter((jugador) =>
          showValidated ? jugador.validado : true
        )
        .map((jugador) => (
          <View key={jugador.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.name}>{jugador.nombre}</Text>
                <Text style={styles.position}>{jugador.posicion}</Text>
              </View>

              <Text style={jugador.validado ? styles.badgeOk : styles.badgePending}>
                {jugador.validado ? "✓ Validado" : "Pendiente"}
              </Text>
            </View>

            <Text style={styles.club}>{jugador.club}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{jugador.goles}</Text>
                <Text style={styles.statLabel}>Goles</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{jugador.asistencias}</Text>
                <Text style={styles.statLabel}>Asist.</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{jugador.partidos}</Text>
                <Text style={styles.statLabel}>Partidos</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => router.push(`/player-profile?id=${jugador.id}`)}
            >
              <Text style={styles.profileButtonText}>Ver perfil</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    marginBottom: 8,
  },
  subtitle: {
    color: "rgba(255,255,255,0.78)",
    lineHeight: 21,
    marginBottom: 20,
  },
  search: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginBottom: 20,
    color: "#0f172a",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "800",
  },
  position: {
    color: "#cbd5e1",
    marginTop: 4,
  },
  badgeOk: {
    color: "#86efac",
    fontWeight: "800",
    fontSize: 12,
  },
  badgePending: {
    color: "#fde68a",
    fontWeight: "800",
    fontSize: 12,
  },
  club: {
    color: "rgba(255,255,255,0.75)",
    marginBottom: 14,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
  statBox: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
  },
  statNumber: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },
  statLabel: {
    color: "#cbd5e1",
    fontSize: 12,
    marginTop: 4,
  },
  profileButton: {
    backgroundColor: "#1694ff",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
  },
  profileButtonText: {
    color: "#fff",
    fontWeight: "800",
  },

  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  filterButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  filterButtonActive: {
    backgroundColor: "#1694ff",
  },

  filterText: {
    color: "#fff",
    fontWeight: "700",
  },

  compareButton: {
  backgroundColor: "#1694ff",
  borderRadius: 14,
  padding: 14,
  alignItems: "center",
  marginBottom: 18,
},

compareButtonText: {
  color: "#fff",
  fontWeight: "800",
},
});