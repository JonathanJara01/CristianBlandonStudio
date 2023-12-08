import ImagenBoda from '../Fotos/galeriaCollage.png'

const Novias = ()=>{
    return(
        <div>
        <div>
            <section className="d-flex align-items-center justify-content-center">
            <h1 className="text-center" >Servicio de Novias</h1>
            </section>
            <br />
            <section>
            <p className="card-text col-12 text-center">
            En el día más especial de tu vida, confía en nuestro equipo de expertos para crear un peinado y maquillaje de novia que capture tu esencia y realce tu belleza natural. Nuestros estilistas y maquilladores comprenden la importancia de cada detalle, desde el más mínimo rizo hasta el tono perfecto de labial. Trabajando en estrecha colaboración contigo, diseñaremos un peinado que complemente tu vestido y refleje tu estilo personal, ya sea que busques un look romántico y suave o uno audaz y moderno. Además, nuestro maquillaje resaltará tus rasgos más hermosos, manteniendo un equilibrio entre la luminosidad y la durabilidad para que te veas radiante durante todo el día y la noche. En un ambiente relajante, te mimaremos y cuidaremos, asegurando que te sientas como la novia deslumbrante que siempre has soñado ser.</p>
            </section>
            <section className="d-flex align-items-center justify-content-center">
                <img src={ImagenBoda} width='600px' />
            </section>
            <br/>
            <section className="btn-text col-12 text-center">
            <a href="#" className="btn btn-black">Inicio</a>
            </section>
        </div>
        </div>
    )
};

export default Novias;