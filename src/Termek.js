import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Termek(){
    const[termek,setTermek]= useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/api/Termek').then((response)=>{
            setTermek(response.data);
        })
        
    }, []);

    return (
        <div>
            {
                termek.map((value,key)=>{
                    return(
                        <div className=".table-strip">
                            <div>{value.Nev}</div>
                            <div>{value.Ar}</div>
                            <div>{value.Leiras}</div>
                            <div>{value.kep}</div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Termek;