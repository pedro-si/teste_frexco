import React from 'react';
import './carrinho.css'
import { useState, useEffect } from 'react';
import Pop from "../../components/popup"

export default function Carrinho() {
    const [frutas, setFrutas] = useState([]);
    useEffect(() => {
        const meuCarrinho = localStorage.getItem("produtos");
        setFrutas(JSON.parse(meuCarrinho) || []);

    }, []);
    function limparCarrinho(){
        localStorage.clear();
        window.location.reload()
    }


    function add(fruta) {
       let filtroFrutas = frutas.filter((item)=>{
           return (item.id !==fruta.id)

       })
       fruta.quantidade++;
       filtroFrutas.push(fruta);
       filtroFrutas.sort(function(a,b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
       setFrutas(filtroFrutas);
       localStorage.setItem('produtos',JSON.stringify(filtroFrutas))
       document.getElementById(`quantidade${fruta.id}`).value =fruta.quantidade;
    }
    function diminuir(fruta){
        let filtroFrutas = frutas.filter((item)=>{
            return (item.id !==fruta.id)
 
        })
        if(fruta.quantidade === 1){
            alert('Para remover o item clique em "Remover do Carrinho!"');
            return
        }
        fruta.quantidade--;
        filtroFrutas.push(fruta);
        filtroFrutas.sort(function(a,b) {
         return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
     });
        setFrutas(filtroFrutas);
        localStorage.setItem('produtos',JSON.stringify(filtroFrutas))
        document.getElementById(`quantidade${fruta.id}`).value =fruta.quantidade;
    }

    function remover(id){
        let filtroFrutas = frutas.filter((item)=>{
            return (item.id !==id)
 
        })
       

        setFrutas(filtroFrutas);
        localStorage.setItem('produtos',JSON.stringify(filtroFrutas));
        
    }

    return (
        <ul className='carrinho'>
            <h2>Seu Carrinho:</h2>
            <hr />

            {frutas.map((fruta) => {
                return (
                    <li key={fruta.id} className='item'>
                        <div className='nomeFrutaCar' > <strong >{fruta.name}</strong><Pop fruta={fruta}/></div>
                        <div className='quantidadeCar'>
                            <label>Quantidade:</label><br />
                            <button onClick={() => add(fruta)}>+</button>
                            <input defaultValue={fruta.quantidade} id={`quantidade${fruta.id}`} />
                            <button onClick={() => diminuir(fruta)}>-</button>
                        </div>
                        <div className='buttons'>
                            <button className='add' onClick={() => remover(fruta.id)}>Remover do Carrinho</button><br />
                        </div>
                        <hr />
                    </li>
                    
                )
            })}
            <div className='limpar'><button className='clear' onClick={limparCarrinho}>Limpar Carrinho</button><br /></div>
        </ul>
    )
}