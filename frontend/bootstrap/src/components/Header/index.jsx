import "./header.css";
import Link from "next/link";

export default function Header(){
    return(
        <>
            <header>
                <div className="nav-part1">
                    <div className="title-bar">
                        <Link href="/"><img src="/images/joinhas.webp" className="logotype"/></Link>
                        <h1 className="title">Condolo</h1>
                        <h1 className="title">Games</h1>
                    </div>
                    <ul className="nav-options">
                        <li className="n-option">Produtos</li>
                        <li className="n-option">Carrinho</li>
                        <li className="n-option">Sobre</li>
                        
                    </ul>
                </div>
                <div className="nav-part2">
                    <button className="research"><img src="/images/search.png" className="search-button"/></button>
                    <Link href="/"><button className="login"><b>Login</b></button></Link>
                </div>
            </header>
        </>
    )
}