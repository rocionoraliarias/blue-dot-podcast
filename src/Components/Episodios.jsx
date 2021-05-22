import Image from './Image'


function Episodios () {


    return(
        <div>
        <section class="donde">
        <div class="imagen-telefono">
            <a id="nosotros"></a>
            <Image
        setAlt={'Telefono'}
        setImage={'phone.png'}
        />
        </div>
        <div class="donde-venimos">
            <h2 class="venimos">De dónde venimos</h2>
            <div class="parrafo-donde">
                <p class="parrafo-1">Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light.</p>
                <p class="parrafo-2">Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves.</p>
            </div>
        </div>
    </section>

    <section class="aversi">
        <a id="entrevistas"></a>
        <h2 class="titulo-2">Invitadas/os estelares</h2>
        <div class="personalidad">
            <Image
        setAlt={'grace-hopper'}
        setImage={'grace-hopper.png'}
        />
                    <Image
        setAlt={'Margaret_Hamilton'}
        setImage={'Margaret_Hamilton.png'}
        />
                    <Image
        setAlt={'Univac'}
        setImage={'An-E.R.A.Univac-1103-computer-in-the-1950s.png'}
        />
                    <Image
        setAlt={'Katie-Bouman'}
        setImage={'Katie-Bouman.png'}
        />
                    <Image
        setAlt={'Eniac'}
        setImage={'Eniac.png'}
        />
                    <Image
        setAlt={'susan-kare'}
        setImage={'susan-kare.png'}
        />
        </div>
    </section>
    </div>
    )
}

export default Episodios;