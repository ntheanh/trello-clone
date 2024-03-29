import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { teal, deepOrange, cyan, orange } from "@mui/material/colors"

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "60px",
    boardBarHeight: "68px"
  },
  colorSchemes: {
    //   light: {
    //     palette: {
    //       primary: teal,
    //       secondary: deepOrange
    //     }
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px"
          },
          // "*::-webkit-scrollbar-track": {
          //   backgroundColor: "#bdc3c7"
          // },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "5px"
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white"
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
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        fontSize: "0.875rem",
        "& fieldset": {
          borderWidth: "0.5px important"
        }
      }
    }
  }
})
export default theme
