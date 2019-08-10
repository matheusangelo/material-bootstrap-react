export const TOKEN_KEY = "@tcc-Token";
export const autenticado = () => localStorage.getItem(TOKEN_KEY) !== null;
export const retornarToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};