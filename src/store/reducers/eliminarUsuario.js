import * as actionTypes from "../actions/actionTypes";

const initialState = {
    id: "",
    nombre: "",
    cargando: false,
    exito: false,
    error: false,
    textoDeError: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ELIMINAR_USUARIO_START:
            return {
                ...state,
                cargando: true,
            };
        case actionTypes.ELIMINAR_USUARIO_CON_EXITO:
            return {
                ...state,
                cargando: false,
                exito: true,
                error: false,
                textoDeError: "",
            };
        case actionTypes.ELIMINAR_USUARIO_CON_ERROR:
            return {
                ...state,
                cargando: false,
                exito: false,
                error: false,
                textoDeError: action.error.toString(),
            };
        default:
            return state;
    }
}

export default reducer;