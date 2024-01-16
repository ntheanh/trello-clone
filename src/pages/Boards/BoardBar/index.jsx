import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import DashboardIcon from "@mui/icons-material/Dashboard"
import VpnLockIcon from "@mui/icons-material/VpnLock"
import AddToDriveIcon from "@mui/icons-material/AddToDrive"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import FilterListIcon from "@mui/icons-material/FilterList"
const MENU_STYLES = {
  color: "primary.main",
  bgcolor: "white",
  borderRadius: "5px",
  border: "none",
  paddingX: "5px",
  "&:hover": {
    bgcolor: "primary.50"
  },
  "& .MuiSvgIcon-root": {
    color: "primary.main"
  }
}

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        paddingX: 2,
        borderTop: "1px solid #00bfa5"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="Dashboard"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<ElectricBoltIcon />}
          label="Automation"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
    </Box>
  )
}

export default BoardBar
