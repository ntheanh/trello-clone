import { experimental_extendTheme as extendTheme } from "@mui/material/styles"

const APP_BAR_HEIGHT = "60px"
const BOARD_BAR_HEIGHT = "68px"
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
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
