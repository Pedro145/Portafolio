import React, { useRef } from "react";
import { Button, makeStyles, Paper, Radio, Link } from "@material-ui/core"
import Navbar2 from "../Navbar2/Navbar2";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import TypeWriterEffect from "react-typewriter-effect"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ParticlesFondo from "../Particles/Particles";
import Typed from "react-typed"



const Contact = () => {


    const clases = useStyles();
    const form = useRef()
    const [value, setValue] = useState("Hola")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0tnlijd', 'template_jtm0o9m', form.current, 'OJP1auFONdLrZI_iW')
            .then((result) => {
                console.log(result.text);
                alert("Mensaje enviado correctamente!")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Navbar2></Navbar2>
            <div className={clases.titulo2}>
                <TypeWriterEffect
                    text="CONTACTATE CONMIGO!"
                    textStyle={{ fontSize: "22px", color: "white" }}
                    startDelay={100}
                    cursorColor="white"
                />
            </div>
            <div className={clases.contact}>

                <Paper className={clases.paper}>
                    <div className={clases.mover}>
                        <div className={clases.titulo}>
                            <div className={clases.saludo}>

                                <span>Saludame</span>
                                <Radio className={clases.radio}
                                    value="Hola"
                                    checked={value === "Hola"}
                                    color="default"
                                    onChange={handleChange} />
                                <span>Propuesta</span>
                                <Radio className={clases.radio}
                                    value="Propuesta"
                                    checked={value === "Propuesta"}
                                    color="default"
                                    onChange={handleChange} />

                            </div>
                        </div>
                        <div className={clases.form}>
                            <form ref={form} onSubmit={sendEmail}>
                                {
                                    value === "Hola" ? (
                                        <>

                                            <input color="error" label="Nombre" placeholder="INGRESE SU NOMBRE" type="text" name="user_name"></input>
                                            <input label="Email" type="email" placeholder="INGRESE SU EMAIL" name="user_email"></input>

                                            <textarea className={clases.textarea} label="SALUDAME" placeholder="SALUDAME" name="user_message"></textarea>
                                        </>
                                    ) : value === "Propuesta" ? (
                                        <>
                                            <div className={clases.inputs}>
                                                <input color="primary" minWidth="70" placeholder="INGRESE SU NOMBRE" label="Nombre" type="text" name="user_name"></input>
                                                <input label="Email" type="email" placeholder="INGRESE SU EMAIL" name="user_email" ></input>
                                                <input type="text" placeholder="ASUNTO" name="user_asunto" />
                                            </div>
                                            <br />
                                            <textarea className={clases.textarea} placeholder="ESCRIBE ALGO" name="user_message"></textarea>
                                        </>
                                    ) : null
                                }
                                <br />
                                <Button className={clases.buton} type="submit" value="send">Enviar</Button>
                            </form>
                        </div>
                    </div>

                </Paper>
            </div>
            <div className={clases.icons}>
                <Link href="https://www.linkedin.com/in/pedro-d%C3%A1valos-088640210/" target="_blank">
                    <LinkedInIcon color="primary" fontSize="large" />
                </Link>
                <div className={clases.string}>
                    <Typed
                        strings={[
                            "Linkedin",
                        ]}
                        typeSpeed={70}
                        backSpeed={70}
                        loop
                    />
                </div>
                <br />
                <Link href="https://github.com/Pedro145" target="_blank">
                    <GitHubIcon fontSize="large" color="primary" />
                </Link>
                <div className={clases.string2}>
                    <Typed
                        strings={[
                            "Github",
                        ]}
                        typeSpeed={70}
                        backSpeed={105}
                        loop
                    />
                </div>
            </div>
            <ParticlesFondo />
        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    contact: {
        maxWidth: "50vw",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        background: "none",
        marginTop: "45px",
        marginLeft: theme.spacing(20)
    },
    contactDark: {
        background: "#333",
        color: "#fff"
    },
    form: {
        background: "none",
        "& input": {
            marginLeft: "80px",
            marginTop: "30px",
            background: "none",
            color: "white",
            border: " 3px solid white",
            height: "50px",
            width: "200px"
        },
        "& label": {
            marginTop: "5px",
            color: "white"
        },
        "& textarea": {
            color: "white"
        }
    },
    paper: {
        background: "none",
        border: "2px solid white",
        marginTop: theme.spacing(-1),
        height: theme.spacing(60),
        width: theme.spacing(90),
        "& span": {
            color: "white"
        }
    },
    titulo2: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(20),
        color: "white"
    },
    textarea: {
        marginLeft: theme.spacing(10),
        height: "15vh",
        width: "65vh",
        border: "solid 3px white",
        marginTop: "20px",
        background: "none"
    },
    buton: {
        marginLeft: theme.spacing(40),
        color: "white",
        marginTop: "20px"
    },
    radio: {
        color: "white"
    },
    saludo: {
        marginLeft: theme.spacing(10)
    },
    icons: {
        marginLeft: theme.spacing(120),
        marginTop: theme.spacing(-13)
    },
    string: {
        color: "#fff",
        marginTop: "-33px",
        marginLeft: "36px"
    },
    string2: {
        color: "#fff",
        marginTop: "-31px",
        marginLeft: "37px"
    },
    errors: {
        color: "red",
        fontSize: "12px",
        fontWeight: "px",
      }

}))

export default Contact;
