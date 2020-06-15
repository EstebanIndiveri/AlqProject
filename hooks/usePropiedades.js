import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faRestroom } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';


import axios from 'axios';

const Grid=styled.div`
    
    @media(min-width:480px){
        display:grid;
        grid-template-columns: repeat(2,1fr);
        row-gap:2rem;
        column-gap:2rem;
    }
    @media(min-width:768px){
        grid-template-columns: background-repeat(3,1fr);
    }
`;
const Card=styled.div`
    
    border-radius:10px;
    background-color:#f5f5f5;
    max-width:400px;
    &:hover{
        box-shadow: 2px 2px 4px 3px #e1e1e1;
        transition:all 300ms;
        cursor:pointer;
    }
    img{
        max-width:100%;
        max-height:205px;
        align-content:center;
        display:block;
        margin:auto;
    }
`;
const Contenido=styled.div`
    padding:1rem;
    h3{
        margin:0 0 2rem 0;
        font-size:1.4rem;
        font-family:'Montserrat';
        font-weight:bold;
        text-align:center;
    }
    ul{
        list-style:none;
        padding:0;
        display:flex;
        width:100%;
        justify-content:space-between;
    }
    ul li{
        display:flex;
    }
    ul li p{
        font-weight:600;
        margin-left:1rem;
    }
`;

const usePropiedades=(propiedades)=>{
    // console.log(propiedades);
    
    const Propiedades=()=>(
        <Grid>
            {propiedades.map(propiedad=>(
                <Card key={propiedad.id}>
                    <img src={`http://localhost:1337${propiedad.imagen[0].url}`}/>
                    <Contenido>
                        <h3>{propiedad.nombre}</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon style={{margin:'auto'}} icon={faBed} size="xs" height="18px" color="blueviolet"/>
                                <p> {propiedad.habitaciones}</p>
                                </li>
                            <li>
                                <FontAwesomeIcon style={{margin:'auto'}} icon={faRestroom} size="xs" height="18px" color="blueviolet"/> 
                                <p> {propiedad.WC}</p>
                                </li>
                            <li>
                                <FontAwesomeIcon style={{margin:'auto'}} icon={faCar} size="xs" height="18px" color="blueviolet"/> 
                                <p>{propiedad.estacionamiento}</p>
                                </li>
                        </ul>
                            <div>{propiedad.agente.nombre}</div>
                    </Contenido>
                </Card>
            ))}
        </Grid>
    )
    return{
        Propiedades
    }
}
export default usePropiedades;