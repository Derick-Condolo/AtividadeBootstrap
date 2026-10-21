"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dados from "@/./dados.json";

export default function film(){
    const params = useParams();
    const [film, setFilm] = useState();

    useEffect( () => {
        const foundFilm = dados.find(f => f.id == params.id);
        setFilm(foundFilm);
    }, []);

    return(
        <main>
            {film && <>
                <h1>{film.titulo}</h1>
                <img src={film.imagem} />
                <ul>
                    <li>Ano: {film.ano}</li>
                    <li>Gênero: {film.genero}</li>
                </ul>
                <p>{film.sinopse}</p>
            </>}
        </main>
    )
} 