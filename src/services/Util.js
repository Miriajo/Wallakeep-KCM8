// IMPORTANTE
// En este fichero encontrarás utilidades que te ayudarán a completar la práctica. Lee con atención todas las funciones antes de empezar a realizar la práctica.

export const HOST = "http://localhost:3000";
export const API = `apiv3`;

export const USER_SESSION_KEY = "currentUser";
export const MESSAGES_SESSION_KEY = "messages";

export const EIGHTEEN_YEARS_IN_MILLISECONDS = 18 * 365 * 24 * 60 * 60 * 1000;

export const checkString = (value) => {
    return (!value || value.trim().length < 1);
} 

export const isOldThan18YearsOld = (birthday) => {
    const past = new Date(Date.now() - EIGHTEEN_YEARS_IN_MILLISECONDS).getTime();

    const newDate = new Date(birthday).getTime();
    
    if (birthday.trim().length > 0 ) {
        return newDate >= past
    }
    else {
        return true
    }
};

export const signedIn = () => {
    const user = sessionStorage.getItem(USER_SESSION_KEY);

    return user && JSON.stringify(user) !== JSON.stringify({});
};

export const checkIfUserHasSignIn = (history) => {
    if (!signedIn()) {
        history.push("/sign-in")
    }
};

export const logout = () => {
    sessionStorage.clear();
};

export const currentUser = () => {
    return JSON.parse(sessionStorage.getItem(USER_SESSION_KEY));
};

export const getSavedMessages = () => {
    return JSON.parse(sessionStorage.getItem(MESSAGES_SESSION_KEY)) || [];
};

export const saveMessages = (messages) => {
    return sessionStorage.setItem(MESSAGES_SESSION_KEY, JSON.stringify(messages));
};

export const initialSearch = () => {

    if(currentUser().tag != null)
    {
        return {tag: currentUser().tag};
    }
    else {
        return {};
    }
};