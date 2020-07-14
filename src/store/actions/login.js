import * as actionTypes from "./actionTypes";
import Axios from "axios";

const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    }
}

const loginConExito = (idToken, expirationDate, localId) => {
    return {
        type: actionTypes.LOGIN_CON_EXITO,
        idToken: idToken,
        expirationDate: expirationDate,
        localId: localId,
    }
}

const loginConError = (error) => {
    return {
        type: actionTypes.LOGIN_CON_ERROR,
        error: error,
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginStart());
        const data = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        const headers = {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
        Axios.post("endpoint que falta hacer", data, headers)
            .then(response => {
                console.log(response);
                localStorage.setItem("idToken", response.data.idToken);
                localStorage.setItem("expirationDate", response.data.expiresIn);
                localStorage.setItem("localId", response.data.localId);
                dispatch(loginConExito(response.data.idToken, response.data.expiresIn, response.data.localId));
            }).catch(error => {
                console.log(error.response.data.error.message);
                dispatch(loginConError(error.response.data.error.message));
            });
    }
}

const recuperarContrasenaConExito = () => {
    return {
        type: actionTypes.RECUPERAR_CONTRASENA_CON_EXITO,
    }
}

export const recuperarContrasena = (email) => {
    return dispatch => {
        dispatch(loginStart());
        const data = {
            email: email,
            returnSecureToken: true,
        }
        const headers = {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
        Axios.post("endpoint que falta hacer", data, headers)
            .then(response => {
                console.log(response);
                dispatch(recuperarContrasenaConExito());
            }).catch(error => {
                console.log(error.response.data.error.message);
                dispatch(loginConError(error.response.data.error.message));
            });
    }

}