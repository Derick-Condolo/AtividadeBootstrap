import './card.css';
import Link from 'next/link';

export default function Card(){
    return(
        <>
            <section className="card">
                <img src="/images/xboxseriesx.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title"> Xbox Series X</h4>
                    <p className="card-text">Conheça o console mais potente dessa geração!</p>
                    <Link href="#"><button className="btn-comprar">Comprar</button></Link>
                </div>
            </section>
        </>
    )
}