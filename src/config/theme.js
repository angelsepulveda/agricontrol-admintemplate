import { createTheme } from "@mui/material";

/**
 *  COLORES DE LA APLICACIÓN
 */
const primary = "#00A65A";

/** FIN COLORES DE LA APLICACION**/

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    background: {
      default: "#F4F6F8",
      paper: "#f4f6f8",
    }
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
    MuiListItem: {
      styleOverrides:{
        root:{
          "&.Mui-selected:hover": {
            backgroundColor: "red",
          }
        }
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#222D32',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fff',
          },
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