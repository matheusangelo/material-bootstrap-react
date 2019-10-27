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

export let value = {
    "cpf": "",
    "data_atendimento": "",
    "idade": "",
    "identificador": "",
    "inputs": {
        "value1": 0,
        "value2": 0,
        "value3": 0,
        "value4": 0,
        "value5": 0,
        "value6": 0,
        "value7": 0,
        "value8": 0,
        "value9": 0,
        "value10": 0,
        "value11": 0,
        "value12": 0,
        "value13": 0,
        "value14": 0,
        "value15": 0,
        "value16": 0,
        "value17": 0,
        "value18": 0,
        "value19": 0,
        "value20": 0,
        "value21": 0,
        "value22": 0,
        "value23": 0,
        "value24": 0,
        "value25": 0,
        "value26": 0,
        "value27": 0,
        "value28": 0,
        "value29": 0,
        "value30": 0,
    },
    "nome": "",
    "observacoes": "",
    "rg": "",
    "sexo": "",
    "status": ""
}