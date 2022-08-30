import { createTheme } from "@mui/material";

/**
 *  COLORES DE LA APLICACIÓN
 */
const primary = "#4CAF50";

/** FIN COLORES DE LA APLICACION**/

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          color: '#fff',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        style: {
          color: '#fff',
          marginBottom: 20
        },
      },
    },
  },
});

export default theme;