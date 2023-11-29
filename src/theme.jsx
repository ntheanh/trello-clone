import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { teal, deepOrange, cyan, orange } from "@mui/material/colors"

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "58px",
    boardBarHeight: "68px"
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    }
  },
  dark: {
    palette: {
      primary: cyan,
      secondary: orange
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: 'bdc3c7'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#00b894',
            borderRadius: '5px'
          }

        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    }
  }
})
export default theme
