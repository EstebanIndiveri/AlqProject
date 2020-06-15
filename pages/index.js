import React,{useEffect,useState}  from 'react';
import Head from 'next/head';
import usePropiedades from '../hooks/usePropiedades';
import axios from 'axios';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import useFiltro from '../hooks/useFiltro';

const Contenedor=styled.div`
  margin:0 auto;
  width:95%;
  max-width:800px;
`;


export default function Home() {
  const[propiedades,setPropiedades]=useState([]);
  const[filtradas,guardarFiltradas]=useState([]);
  const{Propiedades}=usePropiedades(filtradas);
  const{categoria,FiltroUI}=useFiltro();

  //api
  useEffect(()=>{
   if(categoria){
     //filter 
    const filtradas=propiedades.filter(propiedad=>propiedad.categoria.id== categoria)
    guardarFiltradas(filtradas);
    

   }else{
     //api TODO
     const obtenerPropiedades=async()=>{
      console.log(categoria);
      const resultado=await axios.get('http://localhost:1337/propiedades');
      setPropiedades(resultado.data);
      guardarFiltradas(resultado.data);

    }
    obtenerPropiedades();
   }
  },[categoria]);

  return (
    <Contenedor>
      <Head>
        <title>CMS con Strapi</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css.map" integrity="undefined" crossOrigin="anonymous" />
      </Head>
      <FiltroUI/>
      <h2
      css={css`
      text-align:center;
      font-family:'Montserrat'
      `}
      >Nuestros alojamientos</h2>
      <Propiedades/>
      </Contenedor>
  
  
  )
}
