import style from '../Css/Home.module.css';
import imagenHome from '../Fotos/FotoHome.png'

const home = ()=>{
    return(
        <div className="container">
            <div className="row">
            <h1 className="col-12 text-center d-flex align-items-center justify-content-center">Acerca De Nosotros</h1>
            </div>
            <div className="row">
            <p className="col-12 text-center" >En Cristian Blandón Studio, fusionamos años de experiencia y pasión por la belleza para ofrecerte una amplia gama de servicios que van desde cortes y coloración de vanguardia hasta peinados y maquillaje excepcional, con un enfoque especializado en el embellecimiento de novias. Nuestro equipo de expertos trabaja incansablemente para realzar tu belleza natural, resaltando tus rasgos únicos con atención meticulosa a los detalles, asegurando que cada cliente se sienta mimado y transformado. Ya sea para una ocasión especial o simplemente para cuidar de ti mismo, en Cristian Blandón Studio te dedicamos un servicio excepcional que refleja nuestra pasión por la perfección y la autenticidad en cada estilo que creamos.</p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
            <img src={imagenHome} height='350px' />
            </div>
        </div>
    )
};

export default home;