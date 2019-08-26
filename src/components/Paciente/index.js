import { URL_PACIENTES } from '../../include/base';

export default async function requisicaoPacientes(method, id) {

    let url = URL_PACIENTES;

    if (id) {
        url = url + "/" + id;
    }

    try {
        let busca = await fetch(url, { method: method, mode: 'cors' });
        let retorno = await busca.json();

        if (method == 'GET') {
            return retorno[0];
        }

        if (method == 'DELETE') {
            return false;
        }

    } catch (e) {
        console.log(e)
    }
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