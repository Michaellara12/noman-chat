// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/acceso/ingresar',
  ingreso: '/acceso/ingresar',
  registro: '/acceso/registro',
  restablecer: '/acceso/restablecer-contrasena',
  confirmacion: '/acceso/confirmacion-cambio'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  home: path(ROOTS_DASHBOARD, '/home'),
  cuenta: path(ROOTS_DASHBOARD, '/cuenta'),
  three: path(ROOTS_DASHBOARD, '/three'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    four: path(ROOTS_DASHBOARD, '/user/four'),
    five: path(ROOTS_DASHBOARD, '/user/five'),
    six: path(ROOTS_DASHBOARD, '/user/six'),
  },
  usuario: {
    root: path(ROOTS_DASHBOARD, '/usuario'),
    perfil: path(ROOTS_DASHBOARD, '/usuario/perfil'),
  }
};
