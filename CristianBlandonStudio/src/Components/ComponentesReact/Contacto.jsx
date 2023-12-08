import { NavLink } from "react-router-dom";
import style from '../Css/Contacto.module.css'
import ImagenWhatsapp from '../Fotos/whatsapp-logo-FF7ABF0919-seeklogo.com.png'
import ImagenInstagram from '../Fotos/957-9571383_instagram-logo-imagenes-de-la-app-de-instagram.png'
import ImagenContacto from '../Fotos/Captura de pantalla 2023-08-30 191200.png'


const contacto = ()=>{
    return(
        <div>
            <div className="d-flex align-items-center justify-content-center">
            <h1>Contacto</h1>
            </div>
            <br />
            <section className="d-flex align-items-center justify-content-center">
            <NavLink to='https://walink.co/c7b633'>
                <img src={ImagenWhatsapp} width='100px'/>
            </NavLink>
            <img src={ImagenContacto} width='300px'/>
            <NavLink to='https://www.instagram.com/cristianblandonstudio/'>
                <img src={ImagenInstagram} width='150px'/>
            </NavLink>
            </section>
        </div>
    )
};

export default contacto;