import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import ContentCut from "@mui/icons-material/ContentCut"
import ContentCopy from "@mui/icons-material/ContentCopy"
import ContentPaste from "@mui/icons-material/ContentPaste"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Tooltip from "@mui/material/Tooltip"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import ArchiveIcon from "@mui/icons-material/Archive"
import AddCardIcon from "@mui/icons-material/AddCard"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import GroupIcon from "@mui/icons-material/Group"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import AttachmentIcon from "@mui/icons-material/Attachment"

const COLUMN_HEADER_HEIGHT = "50px"
const COLUMN_FOOTER_HEIGHT = "56px"

const BoardContent = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        display: "flex"
      }}
    >
      <Box
        sx={{
          maxWidth: "300px",
          minWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          borderRadius: "6px",
          ml: 2
        }}
      >
        <Box
          sx={{
            height: COLUMN_HEADER_HEIGHT,
            display: "flex",
            p: 2,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
            Column Title
          </Typography>

          <Box>
            <Tooltip title="More option">
              <ExpandMoreIcon
                sx={{ color: "primary.main", cursor: "pointer" }}
                id="basic-column-dropdown"
                aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-column-dropdown"
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>

                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ArchiveIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
              cursor: "pointer"
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://cdn.vietnambiz.vn/2019/8/2/impact-of-ecommerce-on-society-15647219830501355870318-crop-1564722020371805734630.png"
              title="green iguana"
            />
            <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
              <Typography>TheAnhDev </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<GroupIcon />}>
                20
              </Button>
              <Button size="small" startIcon={<InsertCommentIcon />}>
                10
              </Button>
              <Button size="small" startIcon={<AttachmentIcon />}>
                5
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
              cursor: "pointer"
            }}
          >
            <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            height: COLUMN_FOOTER_HEIGHT,
            display: "flex",
            p: 2,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Button startIcon={<AddCardIcon />}>Add a card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
