import axios from 'axios';

const host = 'https://hechoencasa-backend.herokuapp.com';
export function guardarUsuario(nombre, correo, mensaje) {
  return axios.post(host + '/landin', {
    usuario: nombre,
    correo: correo,
    mensaje: mensaje,
  });
}
