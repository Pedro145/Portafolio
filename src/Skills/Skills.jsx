import React from "react";
import { makeStyles, Typography } from "@material-ui/core"
import git from "../images/git.png"
import css from "../images/css.png"
import html from "../images/html2.png"
import js from "../images/javascript.png"
import postgres from "../images/postgreSQL2.png"
import react from "../images/react.png"
import redux from "../images/redux2.png"
import sequelize from "../images/sequelize2.png"
import material from "../images/material-ui-logo.png"
import boostrap from "../images/bootstrap.png";
import node from "../images/node.png"
import Navbarr from "../Navbar2/Navbar2";
import ParticlesFondo from "../Particles/Particles.jsx";

const Skills = ({ title, id, dark }) => {
  const clases = useStyles();
  return (
    <div className={clases.skills}>
      <Navbarr></Navbarr>
      <div className={clases.titulo} id={id}>
        <Typography variant="h3">{title}</Typography>
      </div>
      <div className={clases.contenedor}>
        <div className={clases.tecnologia}>
          <h3>GIT</h3>
          <img className={clases.img} src={git} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>CSS</h3>
          <img  className={clases.img} src={css} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>HTML</h3>
          <img  className={clases.img} src={html} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>JAVASCRIPT</h3>
          <img  className={clases.img} src={js} alt="" width={150} />
        </div>
        <div  className={clases.tecnologia} >
          <h3>POSTGRES</h3>
          <img  className={clases.img} src={postgres} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>REACT</h3>
          <img  className={clases.img} src={react} alt="" width={150} />
        </div>
        <div className={clases.tecnologia}>
          <h3>REDUX</h3>
          <img  className={clases.img} src={redux} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>NODE JS</h3>
          <img  className={clases.img} src={node} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>SEQUELIZE</h3>
          <img  className={clases.img} src={sequelize} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>MATERIAL UI</h3>
          <img  className={clases.img} src={material} alt="" width={150}/>
        </div>
        <div className={clases.tecnologia}>
          <h3>BOOSTRAP</h3>
          <img  className={clases.img} src={boostrap} alt="" width={150} />
        </div>
        </div>
        <ParticlesFondo />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  contenedor: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: theme.spacing(-17),
    marginTop:"-30px",
    radius: "5px solid",
    borderRadius: "5px solid black",
    "& div:hover" : {
      cursor: "pointer",
      transform: "translate(-5px)"
    },
    "& h3": {
      textAlign: "center",
      color: "white"
    }
  },
  tecnologia: {
    marginLeft: theme.spacing(9),
    marginTop: "50px",
    border: "2px solid white",
    borderRadius: "9px",
    backdropFilter: "blur(2px)",
    width: "175px",
    "& img" : {
      marginLeft: "13px"
    },
    
  }

 
}))

export default Skills;