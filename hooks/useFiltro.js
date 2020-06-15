import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Fromulario=styled.form`
    width:100%;
    display:flex;
    margin-top:2rem;
    border:1px solid #e1e1e1;
`;

const Select= styled.select`
    flex:1;
    padding:1rem;
    border:none;
    text-align:center !important;
    font-family:'Montserrat';
    appearance:none;
    background-color:#FFFFFF;
    border-radius:10px;
`

const useFiltro = () => {
    const[categorias,guardarCategorias]=useState([]);
    const[categoria,guardarCategoria]=useState('');

    useEffect(()=>{
        const obtenerCategorias=async()=>{
            const resultado=await axios.get('http://localhost:1337/categorias')
            guardarCategorias(resultado.data);
        }
        obtenerCategorias();
    },[])

    const FiltroUI=()=>(
        <Fromulario>
            <Select
            onChange={e=>guardarCategoria(e.target.value)}
            value={categoria}
            >
                <option value="">--Filtrar--</option>
                {categorias.map(opcion=>(
                    <option
                    key={opcion.id}
                    value={opcion.id}
                    >
                    {opcion.nombre}
                    </option>
                ))}
            </Select>
        </Fromulario>
    )
    return {
        categoria,
        FiltroUI
    };
}
 
export default useFiltro;