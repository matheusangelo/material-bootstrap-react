let login = {
    login: "matheus.angelo@iadiagnostic.com",
    senha: "123456"
}
export const Autenticacao = (autenticacao) => {
    if (!validarCampos(login, autenticacao)) {
        return false;
    }
    return true;
}


export const validarCampos = (login, autenticacao) => {
    let login_valido = login.login === autenticacao.login;
    let senha_valida = login.senha === autenticacao.senha;

    if (!(login_valido && senha_valida)) {
        return false;
    }

    return true;
}
