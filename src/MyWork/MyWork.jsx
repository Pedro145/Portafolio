import React from "react";
import Navbar2 from "../Navbar2/Navbar2";
import { Card, CardContent, CardMedia, Grid, Link, makeStyles, } from "@material-ui/core"
import proyect from "../images/proyecto.png"
import pi from "../images/pi.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import ParticlesFondo from "../Particles/Particles.jsx";








const MyWork = () => {

    const clases = useStyles();

    const proyectos = [
        {
            title: "Foodarity App",
            image: proyect,
            link: "https://foodarity.herokuapp.com/",
            linkGithub: "https://github.com/Pedro145/foodarity-app-1",
            id: 1,
            detalle: "Desarrollo de un app en forma grupal con el fin de reducir el desperdicio de alimentos y brindar ayuda a los sectores de la comunidad que mas lo necesitan.Las tecnologias que utilizamos para el Back End son Node.Js, Express, Sequelize, PostgreSQL y Docker, Para el Front End se utilizo React.Redux, Css Module y Material Ui.Cuenta tambien con una pasarela de pago, registro con Google, autenticacion JWT y GoogleMaps"
        },
        {
            
            image: pi,
            linkGithub: "https://github.com/Pedro145/DogsPi",
            id: 2,
            detalle: "Desarrollo de un SPA (aplicación de una sola página) usando React y Redux para el Front- End, diseñado con css modules.Consume datos de una API externa a través de un BackEnd desarrollado en Node Js usando Express y una base de datos relacional en Postgres usando Sequelize como el ORM.Algunas características del proyecto son: Diferentes tipos de Filtros, una barra de búsqueda y un formulario controlado para crear su propio perro"
        }
    ]



return (

    <div className={clases.Mywork} >
        <Navbar2 />
        <div className={clases.titulo} >
            <Grid container className={clases.container} >
                {
                    proyectos.map((e, id,) => (
                        <Grid className={clases.grid} item key={id} md={4}>
                            <Card className={clases.card}>
                                <CardMedia className={clases.carmedia} image={e.image} />
                                <CardContent className={clases.cardcontent}>
                                    <Link className={clases.titulo} href={e.link} target="_blank">
                                        {e.title}
                                    </Link>
                                    <Link  href={e.linkGithub} target="_blank">
                                        <GitHubIcon fontSize="small" />
                                        </Link>
                                    <h5 className={clases.detalle}>{e.detalle}</h5>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
        <ParticlesFondo />
    </div>
)
}
const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(5)
    },
    grid: {
        marginLeft : "20px"
    },
    card: {
        maxWidth: "350px",
        minHeight: "300px",
        marginTop: theme.spacing(-2),
        margin: theme.spacing(4),
        marginLeft: theme.spacing(5),
    },
    carmedia: {
        paddingTop: "43%",
    },
    detalle : {
        fontSize: "11px",
        font : "oblique bold 120% cursive"
    },
    cardcontent : {
        backgroundColor : "none"
    },
    titulo : {
      
    }
}))

export default MyWork;


