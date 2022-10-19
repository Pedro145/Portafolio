import { makeStyles } from "@material-ui/core"
import React from "react";
import Navbar2 from "../Navbar2/Navbar2";
import Typed from "react-typed";
import ParticlesFondo from "../Particles/Particles.jsx";

const Landing = () => {
  const clases = useStyles();
  return (
    <div >
      <Navbar2 />
      <div className={clases.landing}>
        <Typed
          strings={[
            "Bienvenidos a mi Portfolio",
            "Desarrollador Full-Stack"
          ]}
          typeSpeed={70}
          backSpeed={70}
          loop
        />
      </div>
          <ParticlesFondo />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  landing: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(35),
    color: "white",
    fontSize: "50px"
  },
  landing2: {
    marginLeft: theme.spacing(39),
    color: "white"
  }
}))

export default Landing;