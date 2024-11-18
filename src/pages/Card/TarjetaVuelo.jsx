import "./TarjetaVuelo.css"

export const TarjetaVuelo = () => {
    return (
        <>
            <div className="TarjetaVuelo">
                <div className="imgAerolinea">
                    <img src="../public/Avianca-logo.png" alt="Logo de avianca" />
                </div>
                <div className="infoVuelo">
                    <span>Vuelo 1234</span>
                    <p name="" id="" className="descripcion">Aquí va la descripcion del vuelo</p>
                    <div className="origenDestino">
                        <span>Barranquilla</span>
                        <span>-</span>
                        <span>Bogotá</span>
                    </div>
                    <span>Valor del vuelo: $5.000.000</span>
                </div>
                <div className="infoAeropuerto">
                    <h4>El dorado</h4>
                    <div className="imgAeropuerto">
                        <img src="../public/ElDorado.jpg" alt="Logo de El Dorado" />
                    </div>

                    <div className="horas">
                        <span>12:00</span>
                        <span>-</span>
                        <span>1:00</span>
                    </div>
                </div>
            </div>
        </>
    )
}
