"use client";
import "./produto.css";
import { useEffect, useState } from 'react';
import dados from "@/dados.json";
import Link from "next/link";

export default function produtos(){
    const [produto, setProduto] = useState([]);
    useEffect( () => {
        setProduto(dados);
    }, []);

    return(
        <main>
            <h1>Produtos</h1>
            {produto.length > 0 &&
            <div className='container-films'>
                {produto.map (f => {
                    return(
                        <div key={f.id} className='wrap_films'>
                            <img src={f.image}/>
                            <h3>{f.name}</h3>
                            <Link href={`/produtos/${f.id}`}><p>Saiba mais...</p></Link>
                        </div>
                        )
                    })}
            </div>
            }

        </main>
    )
}