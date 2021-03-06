import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoMobile:{
    top:'0%',
    maxWidth:'100%',
    height:'9vh', 
    // paddingRight:'10vw',
    // marginRight:'10vw',
    // width:'7.708333333333334vw', 
    // marginLeft:'7.51851851851852%',
    paddingLeft:'20%',
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [openServices, setOpenServices] = React.useState(true);
  const [openAbout, setOpenAbout] = React.useState(true);
  const [openJaskudo, setOpenJaskudo] = React.useState(true);

  const handleClickServices = () => {
    setOpenServices(!openServices);
  };
  const handleClickAbout = () => {
    setOpenAbout(!openAbout);
  };
  const handleClickJaskudo = () => {
    setOpenJaskudo(!openJaskudo);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        // <ListSubheader component="div" id="nested-list-subheader">
        //   Gledex
        // </ListSubheader>
        <Link href='/' color="secondary">
        <img src='./Assets/gledex-logo.png' className={classes.logoMobile}/>
      </Link>
      }
    >
      <ListItemButton onClick={handleClickServices}>
        <ListItemIcon>
          {/* <StarBorder /> */}
        </ListItemIcon>
        <ListItemText primary="Services" />
        {openServices ?  <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={!openServices} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {/* <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
          <StarBorder />
          </ListItemIcon>
          <Link href='/jaskudo' style={{textDecoration:'none', color:'black'}}>
              <ListItemText primary="JasKu Do" />
          </Link>
        </ListItemButton> */}
 
          <ListItemButton sx={{ pl: 4 }} onClick={handleClickJaskudo}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Cargo" />
            {openJaskudo ?  <ExpandMore /> : <ExpandLess />}
          </ListItemButton>
          <Collapse in={!openJaskudo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
              </ListItemIcon>
              <Link href='/jaskudo' style={{textDecoration:'none', color:'black'}}>
                <ListItemText primary="JasKu Do" />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
              </ListItemIcon>
              <Link href='/jakadalu' style={{textDecoration:'none', color:'black'}}>
                <ListItemText primary="JaKa DaLu"/>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
              </ListItemIcon>
              <Link href='/land' style={{textDecoration:'none', color:'black'}}>
                <ListItemText primary="Land"/>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
              </ListItemIcon>
              <Link href='/sea' style={{textDecoration:'none', color:'black'}}>
                <ListItemText primary="Sea" />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
                <StarBorder style={{opacity:'0'}}/>
              </ListItemIcon>
              <Link href='/air' style={{textDecoration:'none', color:'black'}}>
                <ListItemText primary="Air" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <Link href='/household' style={{textDecoration:'none', color:'black'}}>
              <ListItemText primary="Movers" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <Link href='/warehouse' style={{textDecoration:'none', color:'black'}}>
              <ListItemText primary="Warehouse" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <Link href='/armada' style={{textDecoration:'none', color:'black'}}>
              <ListItemText primary="Our Armada" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          {/* <StarBorder /> */}
        </ListItemIcon>
        <Link href='/network' style={{textDecoration:'none', color:'black'}}>
          <ListItemText primary="Network" />
        </Link> 
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          {/* <StarBorder /> */}
        </ListItemIcon>
        <Link href='/gallery' style={{textDecoration:'none', color:'black'}}>
          <ListItemText primary="Gallery" />
        </Link> 
      </ListItemButton>
      <ListItemButton onClick={handleClickAbout}>
        <ListItemIcon>
          {/* <StarBorder /> */}
        </ListItemIcon>
        <ListItemText primary="About Us" />
        {openAbout ?  <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={!openAbout} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <Link href='/aboutus' style={{textDecoration:'none', color:'black'}}>
              <ListItemText primary="General" />
            </Link> 
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <Link href='/structure' style={{textDecoration:'none', color:'black'}}>
              <ListItemText primary="Legal" />
            </Link> 
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          {/* <StarBorder /> */}
        </ListItemIcon>
        <Link href='/contact' style={{textDecoration:'none', color:'black'}}>
          <ListItemText primary="Contact" />
        </Link> 
      </ListItemButton>
    </List>
  );
}
