import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { obtenerMiPerfil } from "./store/profileStore";

export default function MyProfileScreen() {
  const perfil = obtenerMiPerfil();

  if (!perfil) {
    return (
      <View style={styles.containerEmpty}>
        <Text style={styles.title}>Mi Perfil Deportivo</Text>

        <Text style={styles.emptyText}>
          Todavía no creaste tu perfil deportivo.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/create-profile")}
        >
          <Text style={styles.buttonText}>Crear perfil</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.backButtonText}>← Volver al inicio</Text>
      </TouchableOpacity>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {perfil.nombre.charAt(0).toUpperCase()}
        </Text>
      </View>

      <Text style={styles.kicker}>Perfil deportivo</Text>
      <Text style={styles.title}>{perfil.nombre}</Text>

      <View style={styles.validationCard}>
        <Text style={styles.validationText}>✓ Perfil cargado</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Edad</Text>
        <Text style={styles.value}>{perfil.edad} años</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Posición</Text>
        <Text style={styles.value}>{perfil.posicion}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Club</Text>
        <Text style={styles.value}>{perfil.club}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Pie hábil</Text>
        <Text style={styles.value}>{perfil.pie}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Biografía</Text>
        <Text style={styles.value}>{perfil.biografia}</Text>
      </View>

      <Text style={styles.sectionTitle}>Estadísticas iniciales</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Goles</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Asist.</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Partidos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Minutos</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Estado del perfil</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Perfil listo para scouting</Text>
        <Text style={styles.infoText}>
          Tu perfil deportivo fue cargado correctamente y puede ser visualizado
          por entrenadores y scouts dentro de la plataforma.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/create-profile")}
      >
        <Text style={styles.buttonText}>Editar perfil</Text>
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

  containerEmpty: {
    flex: 1,
    backgroundColor: "#071a2d",
    padding: 20,
    paddingTop: 70,
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
    marginBottom: 20,
  },

  emptyText: {
    color: "rgba(255,255,255,0.8)",
    marginBottom: 20,
    fontSize: 16,
  },

  backButton: {
    backgroundColor: "#1694ff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  backButtonText: {
    color: "#fff",
    fontWeight: "700",
  },

  validationCard: {
    backgroundColor: "rgba(34,197,94,0.15)",
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
    fontSize: 16,
    fontWeight: "700",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 14,
  },

  infoCard: {
    backgroundColor: "rgba(34,197,94,0.15)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },

  infoTitle: {
    color: "#86efac",
    fontWeight: "800",
    marginBottom: 8,
  },

  infoText: {
    color: "rgba(255,255,255,0.8)",
    lineHeight: 22,
  },

  button: {
    backgroundColor: "#1694ff",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },

  avatar: {
  width: 86,
  height: 86,
  borderRadius: 43,
  backgroundColor: "#1694ff",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 18,
},

avatarText: {
  color: "#fff",
  fontSize: 34,
  fontWeight: "900",
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
});