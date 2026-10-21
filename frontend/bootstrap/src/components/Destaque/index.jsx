import Link from 'next/link';
import './destaque.css';

export default function Destaque(){
    return(
        <>
        <section className="banner">
            <Link href=''><img src="/images/destaque.jpeg" className='destaque-img'/></Link>
        </section>
        </>
    )
}