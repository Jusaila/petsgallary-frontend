import axios from 'axios';

export const API_BASE_URL = "https://backend.petsgallerydubai.com/api";
export const IMAGE_BASE_URL = "https://backend.petsgallerydubai.com/storage";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});
