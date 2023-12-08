import ImagenBar from '../Fotos/barberia.jpeg'

const Barberia = ()=>{
    return(
        <div>
            <section className="d-flex align-items-center justify-content-center">
            <h1 className="text-center" >Servicio de Barberia</h1>
            </section>
            <br />
            <section>
            <p className="card-text col-12 text-center">
                Con manos expertas y un ojo agudo para el diseño, cada corte se convierte en una expresión única de tu personalidad y estilo. Nuestros servicios de afeitado y arreglo de barba ofrecen un toque de refinamiento, con técnicas precisas que resaltan la estructura de tu rostro. En nuestra barbería, no solo obtendrás un servicio excepcional, sino una experiencia relajante y rejuvenecedora que te dejará listo para enfrentar el mundo con confianza y estilo.</p>
            </section>
            <section className="d-flex align-items-center justify-content-center">
                <img src={ImagenBar} width='600px' />
            </section>
            <br/>
            <section className="btn-text col-12 text-center">
            <a href="#" className="btn btn-black">Inicio</a>
            </section>
        </div>
    )
};

export default Barberia;