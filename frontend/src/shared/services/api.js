import axios from 'axios';
import { environment } from '../environmets';

const api = axios.create({
  baseURL: environment.API_URL,
});

export { api };
