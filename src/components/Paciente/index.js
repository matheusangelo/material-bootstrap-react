import { URL_PACIENTES } from '../../include/base';
import React from 'react'
export default async function requisicaoPacientes(method, id) {

    let url = URL_PACIENTES;

    if (id) {
        url = url + "/" + id;
    }

    try {
        let busca = await fetch(url, { method: method, mode: 'cors' });
        let retorno = await busca.json();

        if (method == 'GET') {
            console.log(JSON.stringify(retorno));
            return retorno;
        }

        if (method == 'DELETE') {
            return false;
        }

    } catch (e) {
        console.log(e)
    }
}

export function retornarNãoProcessados(pacientes) {
    let retorno_filto = pacientes.filter((x) => x.status == "Não Processado");

    return retorno_filto.lenght;
}

export function gerenciarSintomas(index, sintoma, intensidade, array = [], adicionar = true) {
    console.log(index)
    if (!adicionar) {
        let exclusao = array.splice(index, 1)

        return array.filter((x) => x != exclusao)
    }

    let novo_registro = {
        "sintoma": sintoma,
        "intensidade": intensidade
    }

    array.push(novo_registro)

    return array
}

export const finalizarCadastro = async (prontuario, id) => {
    if (id) {
        let requisicao = await fetch(URL_PACIENTES + "/"+id, { method: "PUT", mode: 'cors', body:JSON.stringify(prontuario) });
        let retorno = await requisicao.json();
        return true
    }
    else {
        let requisicao = await fetch(URL_PACIENTES, prontuario, { method: "POST", mode: 'cors' });
        let retorno = await requisicao.json();
        return true
    }
}

export let Context = React.createContext({});