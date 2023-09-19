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
import Badge from '@mui/material/Badge'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Tooltip from "@mui/material/Tooltip"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Profiles from "./Menu/Profiles"

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main"
            }}
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
        <Box></Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField id="outlined-search" label="Search" type="search" size="small" />
        <ModeSelect />
        <Tooltip title="Notification" >
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsOutlinedIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" >
          <HelpOutlineOutlinedIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
