import PropTypes from "prop-types";

// material-ui
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// third-party
import { BrowserView, MobileView } from "react-device-detect";
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import { drawerWidth } from "store/constant";
import LogoSection from "../LogoSection";
import MenuList from "./MenuList";

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <MenuList drawerOpen={drawerOpen} />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList drawerOpen={drawerOpen} />
        </Box>
      </MobileView>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
    >
      <Drawer
        container={container}
        variant={matchUpMd ? "permanent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            background: "transparent",
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "66px",
            },
            width: !drawerOpen ? 120 : 320,
            transition: "all 500ms"
          },
          
        }}
        style={{ transition: "all 500ms" }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default Sidebar;
