// material-ui
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// project imports
import menuItem from "menu-items";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = ({ drawerOpen }) => {
    const [changeWidth, setChangeWidth] = useState(drawerOpen);
    useEffect(() => {
      // set time out of 500ms and change image
      if (!drawerOpen) {
        setTimeout(() => {
          setChangeWidth(true);
        }, 250);
      } else {
        setChangeWidth(false);
      }
    }, [drawerOpen]);
  const navItems = menuItem.items[0].children.map((item) => {
    return (
      <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
        <Link to={item.url} style={{ textDecoration: "none" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: drawerOpen ? "initial" : "center",
              px: 3,
              border: `2px solid ${item.border}`,
              borderRadius: 2,
              py: 0,
              outline: "2px solid white",
              background: item.background,
              width: changeWidth ? "auto" : "fit-content",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: drawerOpen ? 1 : "auto",
                justifyContent: "center",
                "& .css-13hpr95-MuiListItemIcon-root": {
                  marginRight: 8,
                },
              }}
            >
              <img src={item.icon} width={30} alt={item.title}/>
            </ListItemIcon>
            <ListItemText>
              <div
                style={{
                  opacity: drawerOpen ? 1 : 0,
                  color: item.color,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {item.title}
              </div>
            </ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>
    );
  });

  return (
    <List
      style={{
        borderBottom: "1.5px solid gray",
        borderRight: "1.5px solid gray",
        borderLeft: "1.5px solid gray",
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 15,
        paddingTop: 20,
        marginLeft: 8,
        gap: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {navItems}
    </List>
  );
};

export default MenuList;
