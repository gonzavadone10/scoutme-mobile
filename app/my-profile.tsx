import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Perfil = {
  nombre: string;
  edad: string;
  posicion: string;
  club: string;
  pie: string;
  biografia: string;
};

export default function MyProfileScreen() {
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  useFocusEffect(
    useCallback(() => {
      const cargarPerfil = async () => {
        const data = await AsyncStorage.getItem("miPerfil");

        if (data) {
          setPerfil(JSON.parse(data));
        }
      };

      cargarPerfil();
    }, [])
  );

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

      <Text style={styles.sectionTitle}>Estado del perfil</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Perfil listo para scouting</Text>
        <Text style={styles.infoText}>
          Tus datos deportivos ya se encuentran cargados. En una versión completa,
          este perfil podría ser consultado por entrenadores y scouts.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.secondaryButton}
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

  containerEmpty: {
    flex: 1,
    backgroundColor: "#071a2d",
    padding: 20,
    paddingTop: 70,
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
    marginBottom: 16,
  },

  emptyText: {
    color: "rgba(255,255,255,0.75)",
    lineHeight: 22,
    marginBottom: 20,
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
    lineHeight: 21,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 14,
  },

  infoCard: {
    backgroundColor: "rgba(34,197,94,0.14)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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

  button: {
    backgroundColor: "#1694ff",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  secondaryButton: {
    backgroundColor: "#1694ff",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 6,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});