export type Perfil = {
  nombre: string;
  edad: string;
  posicion: string;
  club: string;
  pie: string;
  biografia: string;
};

let miPerfil: Perfil | null = null;

export function guardarMiPerfil(perfil: Perfil) {
  miPerfil = perfil;
}

export function obtenerMiPerfil() {
  return miPerfil;
}