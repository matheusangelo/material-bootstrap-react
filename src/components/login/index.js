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


export const enumPerfils = Object.freeze({
    MASTER: "master",
    ESPECIALISTA: "especialista",
    CONVENCIONAL: "covnencional"
});


export const verificarPerfilAdmin = () => {
    if (!(sessionStorage.getItem("profile") == enumPerfils.MASTER)) {
        return false
    }
    return true
}

export const verificarAcessoPorPerfil = () => {
    let url = window.location.href;
    if (sessionStorage.getItem("auth")) {
        if ((sessionStorage.getItem("profile") == enumPerfils.SENSORIAMENTO)) {
            return true
        }
        if ((sessionStorage.getItem("profile") == enumPerfils.ESPECIALISTA)) {
            if (url.indexOf('/convencional') >= 0) {
                return false
            }
            return true
        }
        if ((sessionStorage.getItem("profile") == enumPerfils.CONVENCIONAL)) {
            if (url.indexOf('/master') >= 0) {
                return false
            }
            return true
        }
    }
    return true
}