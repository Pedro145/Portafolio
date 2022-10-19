import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core"
import { List } from "@material-ui/core"

const Navbarr = () => {
  const clases = useStyles();
return(
   <>
   <AppBar position="sticky" className={clases.appbar}>
    <Toolbar className={clases.toolbar}> 
    <List className={clases.list}>
    <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <a href="/">Principal</a>
          <a href="/about">Sobre Mi</a>
          <a href="/skills">Mis Habilidades</a>
          <a href="/mywork">Mis proyectos</a>
          <a href="/contact">Mi contacto</a>
        </ul>
    </nav>
   
    </List>
    </Toolbar>
   </AppBar>
   </>
)
}


const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    border: "1px solid black"
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  list: {
     [theme.breakpoints.down("sm")]: {
            display:"none"
        },
        "& a" :{
            color: "white",
            fontSize: "1.4rem",
            fontWeight: "bold",
            textDecoration: "none",
            marginLeft: theme.spacing(2)
        },
        "& a:hover" : {
          cursor: "pointer",
          color : "white",
          borderBottom: "3px solid"
      },
  }
}))

export default Navbarr;

