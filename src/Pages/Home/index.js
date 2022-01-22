import React from 'react';
import "./Home.css"
import { useEffect, useState, setState } from 'react'
import api from "../../services/api"
import Pop from '../../components/popup'



function Home() {

    const [frutas, setFrutas] = useState([])
    useEffect(() => {
        async function loadFrutas() {
            const response = await api.get('api/fruit/all')
            setFrutas(response.data);
            return () => {
                setState({});
            };
        }


        loadFrutas();


    }, [])


    function adicionar(fruta) {
        console.log(fruta)
        const meuCarrinho = localStorage.getItem('produtos');
        let produtosSalvos = JSON.parse(meuCarrinho) || [];
        let quantidade = parseInt(document.getElementById(`quantidade${fruta.id}`).value);
        const hasProduct = produtosSalvos.some((produtoSalvo) => produtoSalvo.id === fruta.id);
        if (hasProduct) {
            window.location.href = "../Carrinho"
            
            return;
        }
        if (quantidade === 0) {
            alert("Escolha a quantidade de produtos!");
            return;
        }
        produtosSalvos.push({
            ...fruta,
            'quantidade': quantidade
        });

        produtosSalvos.sort(function (a, b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        localStorage.setItem('produtos', JSON.stringify(produtosSalvos));
        document.getElementById(`add${fruta.id}`).innerHTML = "Ir para o Carrinho";
    }

    function aumentar(id) {
        let valor = parseInt(document.getElementById(`quantidade${id}`).value);
        valor += 1;
        document.getElementById(`quantidade${id}`).value = valor;
        
    }

    function diminuir(id) {
        let valor = parseInt(document.getElementById(`quantidade${id}`).value);
        if (valor === 0) {
            alert("Não é possível diminuir a quantidade");
            return
        }
        valor -= 1;
        document.getElementById(`quantidade${id}`).value = valor;
    }

    return (
        <div className='home'>
            <h1 className='title'>Bem vindo à nossa Loja!</h1>


            <ul>
                <h2>Nossos produtos:</h2>
                <hr />
                {frutas.map((fruta) => {
                    return (
                        <li key={fruta.id} className='item'>
                            <div className='nomeFruta' > <strong >{fruta.name}  </strong> <Pop fruta={fruta}/> </div>
                            <div className='quantidade'>
                                <label>Quantidade:</label><br />
                                <button onClick={() => aumentar(fruta.id)}>+</button>
                                <input defaultValue="0" id={`quantidade${fruta.id}`} />
                                <button onClick={() => diminuir(fruta.id)}>-</button>
                            </div>
                            <div className='buttons'>
                                <button className='add' id={`add${fruta.id}`} onClick={() => adicionar(fruta)}>Adicionar ao Carrinho</button><br />
                            </div>
                            <hr />
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Home;