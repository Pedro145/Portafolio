import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core"
import image from "../images/cv.jpg";
import cv from "../images/Cv.pdf";
import Navbar2 from "../Navbar2/Navbar2";
import ParticlesFondo from "../Particles/Particles.jsx";


const About = () => {
    const clases = useStyles();
    return (
        <div className={clases.about}>
            <Navbar2></Navbar2>
            <div >
            
            <Card className={clases.card}>
                <CardMedia image={image}  className={clases.cardmedia}/>
                
                <CardContent className={clases.cardcontent}>
                <Typography className={clases.letras} variant="h2">
                    Hola! Mi nombre es Pedro Davalos!
                </Typography>
                <Typography className={clases.letras} variant="h6">
                    Soy desarrollador web graduado en el bootcamp de SoyHenry, actualmente me encuentro
                    en la busqueda de mi primera oportunidad en el mundo de la programacion que me permita poner a prueba mis conocimientos.
                    Soy apasionado a la hora de programar me gusta investigar lo desconocido y poder seguir adquiriendo conocimientos en distintas tecnologias.
                </Typography>
                </CardContent>
                <CardActions>
                    <Button className={clases.buton} variant="contained">
                        <a href={cv} download>
                        Descargar Cv
                        </a>
                       
                    </Button>
                </CardActions>
            </Card>
            </div>
            <ParticlesFondo />
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    card: {
        
        background: "none",
        height: "70vh",
        width: "170vh",
        display: "flex",
        marginTop: theme.spacing(6),
        marginLeft: theme.spacing(12),
        position: "relative"
    },
    cardmedia: {
        width: "700px",
        height: "300px",
        borderRadius: "12px",
        margin : theme.spacing(1)
    },
    cardcontent : {
        marginTop: theme.spacing(-2),

    },
    titulo: {
        maxWidth: "80vw",
        margin: "0 auto" 
    },
    buton: {
        position: "absolute",
        bottom: "5rem",
        right: "3rem",
        padding: theme.spacing(2),
        background: "none",
        border: "1px solid white",
        "& a" : {
            color : "white"
        },
        "&:hover" : {
            background: "none"
        },
        "& a" : {
            color: "white",
            textDecoration: "none"
        }
    },
    letras: {
        
        color: "white"
    },
   
  }))

export default About;