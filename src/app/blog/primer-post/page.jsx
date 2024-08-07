import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: 'Primer post'
}

export default function PrimerPost(){
    return(
        <div>
            <h1>Este es el primer primer post</h1> 
            <Image src="/img/imagen1.jpg" width={300} height={300}/>
            <Link href="/">Ir a la pagina principal</Link>
            <a href="/"> Ejemplo de ancla</a>
        </div>
    )

}
