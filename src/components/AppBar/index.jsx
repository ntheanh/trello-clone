import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ModeSelect from "~/components/ModeSelect"
import AppsIcon from "@mui/icons-material/Apps"
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg"
import SvgIcon from "@mui/material/SvgIcon"
import Workspaces from "./Menu/Workspaces"
import Recent from "./Menu/Recent"
import Starred from "./Menu/Starred"
import Templates from "./Menu/Templates"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Badge from "@mui/material/Badge"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import Tooltip from "@mui/material/Tooltip"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import Profiles from "./Menu/Profiles"
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"

const AppBar = () => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white"
            }}
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button
          sx={{
            color: "white"
          }}
          startIcon={<AddToPhotosIcon />}
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {/* <CloseIcon
                  sx={{
                    color: searchValue ? "white" : "transparent",
                    cursor: "pointer"
                  }}
                  fontSize="small"
                  onClick={() => setSearchValue("")}
                /> */}
                <CloseIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    display: !!searchValue?.length ? "block" : "none"
                  }}
                  fontSize="small"
                  onClick={() => setSearchValue("")}
                />
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "200px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              paddingX: "8px",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" }
            }
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsOutlinedIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineOutlinedIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
