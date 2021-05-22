import Image from './Image'


function Navbar () {

return(
    <nav class="navbar" id="navbar-header">
    <header class="navbar-header">
        <Image
        setAlt={'Logo'}
        setImage={'logo.svg'}
        />
        <a href="#navbar-header" class="navbar-menu-mobile open">
            <i class="fas fa-bars"></i>
        </a>
        <a href="#" class="navbar-menu-mobile close ">
            <i class="fas fa-times"></i>
        </a>
    </header>


    <ul class="navbar-container">
        <li><a href="#Episodios" class="li">EPISODIOS</a></li>
        <li><a href="#nosotros" class="li">NOSOTROS</a></li>
        <li><a href="#entrevistas" class="li">ENTREVISTAS</a></li>
        <li><a href="#topicos" class="li">TOPICOS</a></li>
    </ul>
</nav>

)
}

export default Navbar;