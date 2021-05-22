function Home () {


    return(
        <div>
            <section class="contenedor">
        <h1 class="titulo">Hello <span class="tachado">World</span> pale blue dot<span class="punto">.</span></h1>
        <div class="contenedor-parrafo">
            <p class="parrafo">El portal de podcasts que explora el mundo de la programación y la tecnología. Nuevos episodios, todos los jueves cada 15 días.</p>
        </div>
        <div class="contenedor-boton">
            <a class="boton" href="#Episodios">CONOCÉ MÁS</a>
        </div>
    </section>


    <section class="contenedor-azul"></section>
    <a id="Episodios"><h2>Episodios</h2></a>
    <div class="podcast">
    
            <iframe src="https://open.spotify.com/embed-podcast/episode/7AZZy2nJ4R9ZndHW0h2yxt" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed-podcast/episode/2Hn8oHQ3EgVTtg8ysqfZco" allow="encrypted-media"></iframe>
           <iframe src="https://open.spotify.com/embed-podcast/episode/3cWta1iiQSfvrdHaCbLkSD" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed-podcast/episode/31VyAQAwBiKoHVoYUCEzjQ" allow="encrypted-media"></iframe>
    </div>
        </div>

    )
}

export default Home;