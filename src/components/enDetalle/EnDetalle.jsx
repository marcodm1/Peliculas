import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../funciones/httpClient';
import Spinner from '../spinner/Spinner';
import './enDetalle.css';

const EnDetalle = () => {
    const { peliId } = useParams();
    const [cargado, setCargado] = useState(true);
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        setCargado(true);
        get('/movie/' + peliId).then(data => {
            setPelicula(data);
            setCargado(false);
        });
    }, [peliId]);

    if (!pelicula) {
        return null;
    }

    if (cargado) {
        return <Spinner />;
    }
    const imgUrl = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
    return (
        pelicula.genres ? (
            <>
                {/* <div className="detallesPeli" style={{backgroundImage: `url(${imgUrl})`}}> */}
                <div className="detallesPeli">
                    <img src={imgUrl} alt={pelicula.title} className="columna" />
                    <div className="descripcion">
                        <p className="pStrong"><strong>Nombre: </strong> {pelicula.title}</p>
                        <p className="pStrong"><strong>Nota: </strong> {pelicula.vote_average}</p>
                        <p className="pStrong"><strong>Valoraciones:</strong> {pelicula.vote_count}</p>
                        <p className="pStrong"><strong>Titulo:</strong> {pelicula.title}</p>
                        <p><strong>Géneros:</strong> {pelicula.genres.map(objeto => objeto.name).join(", ")}</p>
                        <p><strong>Descripción:</strong> {pelicula.overview}</p>
                    </div>
                </div>
            </>
        ) :
            <p>Error</p>
    )
}
export default EnDetalle;

/*
"adult":false,
"backdrop_path":"/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
"belongs_to_collection":{
    "id":558216,
    "name":"Venom Collection",
    "poster_path":"/670x9sf0Ru8y6ezBggmYudx61yB.jpg",
    "backdrop_path":"/rhLspFB1B8ZCkWEHFYmc3NKagzq.jpg"},
"budget":116000000,
"genres":[
    {"id":878,"name":"Science Fiction"},
    {"id":28,"name":"Action"}],
"homepage":"http://www.venom.movie/site/",
"id":335983,
"imdb_id":"tt1270797",
"original_language":"en",
"original_title":"Venom",
"overview":"Investigative journalist Eddie Brock...",
"popularity":1312.954,
"poster_path":"/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
"production_companies":[
    {"id":31828,"logo_path":null,"name":"Avi Arad Productions","origin_country":"US"},
    {"id":53462,"logo_path":null,"name":"Matt Tolmach Productions","origin_country":"US"},
    {"id":84041,"logo_path":"/XmHMPGzdI5c4WGX1YlxU4s2v7T.png","name":"Pascal Pictures","origin_country":"US"},
    {"id":7505,"logo_path":"/837VMM4wOkODc1idNxGT0KQJlej.png","name":"Marvel Entertainment","origin_country":"US"},
    {"id":81620,"logo_path":"/gNp4dfuBOXmVWdGKb63NfbFNbFi.png","name":"Tencent Pictures","origin_country":"CN"}],
"production_countries":[
    {"iso_3166_1":"CN","name":"China"},
    {"iso_3166_1":"US","name":"United States of America"}],
"release_date":"2018-09-28",
"revenue":855013954,
"runtime":112,
"spoken_languages":[
    {"english_name":"Mandarin","iso_639_1":"zh","name":"普通话"},
    {"english_name":"English","iso_639_1":"en","name":"English"},
    {"english_name":"Malay","iso_639_1":"ms","name":"Bahasa melayu"}],
"status":"Released","tagline":"The world has enough Superheroes.",
"title":"Venom",
"video":false,
"vote_average":6.8,
"vote_count":12069}

{adult: false, backdrop_path: "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg",…}
adult: false
backdrop_path: "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg"
belongs_to_collection: {id: 558216, name: "Venom Collection", poster_path: "/670x9sf0Ru8y6ezBggmYudx61yB.jpg",…}
budget: 110000000
genres: [{id: 878, name: "Science Fiction"}, {id: 28, name: "Action"}]
homepage: "https://www.venom.movie"
id: 580489
imdb_id: "tt7097896"
original_language: "en"
original_title: "Venom: Let There Be Carnage"
overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady."
popularity: 5385.757
poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
production_companies: [{id: 7505, logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png", name: "Marvel Entertainment",…},…]
production_countries: [{iso_3166_1: "CN", name: "China"}, {iso_3166_1: "US", name: "United States of America"}]
release_date: "2021-09-30"
revenue: 395841558
runtime: 97
spoken_languages: [{english_name: "English", iso_639_1: "en", name: "English"}]
status: "Released"
tagline: ""
title: "Venom: Let There Be Carnage"
video: false
vote_average: 6.9
vote_count: 1486
*/