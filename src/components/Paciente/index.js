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

export const finalizarCadastro = async (
    nome,
    sexo,
    idade,
    rg,
    cpf,
    identificador,
    sintomas) => {


    let json = {
        nome: nome,
        sexo: sexo,
        idade: idade,
        rg: rg,
        cpf: cpf,
        identificador: identificador,
        sintomas: sintomas
    }

    let requisicao = await fetch(URL_PACIENTES + "/criar", json, { method: "POST", mode: 'cors' });
    let retorno = await requisicao.json();

    console.log(retorno)
}

export const chaves = [
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
    "valor1",
]
