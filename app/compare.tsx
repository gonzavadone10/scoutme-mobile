import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const jugadores = [
  { id: 1, nombre: "Matías Romero", goles: 12, asistencias: 7, partidos: 18, minutos: 840 },
  { id: 2, nombre: "Franco Pérez", goles: 4, asistencias: 11, partidos: 20, minutos: 1020 },
  { id: 3, nombre: "Lucas Torres", goles: 2, asistencias: 1, partidos: 21, minutos: 1150 },
  { id: 4, nombre: "Tomás Aguirre", goles: 18, asistencias: 3, partidos: 19, minutos: 970 },
  { id: 5, nombre: "Nicolás Silva", goles: 1, asistencias: 6, partidos: 16, minutos: 760 },
  { id: 6, nombre: "Bruno Medina", goles: 0, asistencias: 0, partidos: 22, minutos: 1200 },
  { id: 7, nombre: "Santiago López", goles: 9, asistencias: 10, partidos: 18, minutos: 930 },
  { id: 8, nombre: "Agustín Herrera", goles: 1, asistencias: 5, partidos: 17, minutos: 880 },
  { id: 9, nombre: "Joaquín Morales", goles: 15, asistencias: 4, partidos: 20, minutos: 1010 },
];

export default function CompareScreen() {
  const [player1Index, setPlayer1Index] = useState(0);
  const [player2Index, setPlayer2Index] = useState(8);

  const player1 = jugadores[player1Index];
  const player2 = jugadores[player2Index];

  const nextPlayer1 = () => {
    setPlayer1Index((prev) => (prev + 1) % jugadores.length);
  };

  const nextPlayer2 = () => {
    setPlayer2Index((prev) => (prev + 1) % jugadores.length);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/jugadores")}>
        <Text style={styles.backButtonText}>← Volver a Jugadores</Text>
      </TouchableOpacity>

      <Text style={styles.kicker}>Scouting digital</Text>
      <Text style={styles.title}>Comparar jugadores</Text>
      <Text style={styles.subtitle}>
        Elegí dos perfiles y compará sus estadísticas principales.
      </Text>

      <View style={styles.selectRow}>
        <TouchableOpacity style={styles.playerSelect} onPress={nextPlayer1}>
          <Text style={styles.selectLabel}>Jugador 1</Text>
          <Text style={styles.selectName}>{player1.nombre}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.playerSelect} onPress={nextPlayer2}>
          <Text style={styles.selectLabel}>Jugador 2</Text>
          <Text style={styles.selectName}>{player2.nombre}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.table}>
        <View style={styles.rowHeader}>
          <Text style={styles.cellHeader}>Estadística</Text>
          <Text style={styles.cellHeader}>{player1.nombre}</Text>
          <Text style={styles.cellHeader}>{player2.nombre}</Text>
        </View>

        <CompareRow label="Goles" value1={player1.goles} value2={player2.goles} />
        <CompareRow label="Asistencias" value1={player1.asistencias} value2={player2.asistencias} />
        <CompareRow label="Partidos" value1={player1.partidos} value2={player2.partidos} />
        <CompareRow label="Minutos" value1={player1.minutos} value2={player2.minutos} />
      </View>
    </ScrollView>
  );
}

function CompareRow({
  label,
  value1,
  value2,
}: {
  label: string;
  value1: number;
  value2: number;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{label}</Text>
      <Text style={[styles.cell, value1 > value2 && styles.winner]}>{value1}</Text>
      <Text style={[styles.cell, value2 > value1 && styles.winner]}>{value2}</Text>
    </View>
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
  selectRow: {
    gap: 12,
    marginBottom: 20,
  },
  playerSelect: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  selectLabel: {
    color: "#94a3b8",
    marginBottom: 6,
    fontWeight: "700",
  },
  selectName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
  table: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  rowHeader: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.08)",
  },
  cellHeader: {
    flex: 1,
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    padding: 12,
    fontSize: 12,
  },
  cell: {
    flex: 1,
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
    padding: 14,
    fontSize: 13,
  },
  winner: {
    color: "#86efac",
    fontWeight: "900",
  },
});