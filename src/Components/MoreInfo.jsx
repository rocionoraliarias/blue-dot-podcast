import Image from './Image'

function MoreInfo (){


    return(
     <div>
         <section class="algunos-temas">
        <a id="topicos"></a>
        <h2 class="titulo-3">Algunos de nuestros temas</h2>
        <div>
            <ul class="iconos">
                <li>
                <Image
        setAlt={'icono'}
        setImage={'icon1.svg'}
        />
                 Trabajo remoto
                </li>
                <li>
                <Image
        setAlt={'icono'}
        setImage={'icon2.svg'}
        />
              Repensando la programación
                </li>
                <li>
                 
                    <Image
        setAlt={'icono'}
        setImage={'icon3.svg'}
        />
            Bases del código
                </li>
                <li>
                     
                    <Image
        setAlt={'icono'}
        setImage={'icon4.svg'}
        />
        Seguridad informática
                </li>
            </ul>
        </div>
    </section>
    
    <section class="azul">
        <h2 class="titulo-azul">¿Querés las últimas novedades?</h2>

            <a href="#Episodios" class="boton-2">Escucha los episodios</a>
    </section>
     </div>
    )
}

export default MoreInfo;