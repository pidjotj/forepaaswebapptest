export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

// API
export const API_KEY = 'api_key=ebc88d2e844f4ed1760eeddb4d5893d5';
export const BASE_URL = 'https://api.themoviedb.org/3/';

// API Images - w300 for the size
export const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

// API SearchInput
export const BASE_URL_SEARCH = `${BASE_URL}search/movie?${API_KEY}&language=fr&query=`;

// API Details
export const BASE_URL_DETAILS = `${BASE_URL}movie/`;
