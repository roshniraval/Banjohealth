const API_BASE_URL = "https://retoolapi.dev/oH2iPo";

const get = (url) => {
    return fetch(`${API_BASE_URL}${url}`).then((res) => res.json());
}

const post = (url, body = {}) => {
    return fetch(`${API_BASE_URL}${url}`, body).then((res) => res.json());
}

export { get, post };