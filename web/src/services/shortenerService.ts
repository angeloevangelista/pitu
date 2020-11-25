import { AxiosInstance } from 'axios';
import baseAPI from './api';

export interface IURL {
  id: number;
  url: string;
  url_code: string;
  hits: number;
  updatedAt: Date;
  createdAt: Date;
  relative_date?: string;
}

class ShortenerService {
  private api: AxiosInstance;

  constructor() {
    this.api = baseAPI('http://127.0.0.1:3333');
  }

  async getLink(code: string): Promise<IURL> {
    const result = await this.api.get<IURL>(`links/${code}`);

    return result.data;
  }

  async getStats(code: string): Promise<IURL> {
    const result = await this.api.get<IURL>(`links/${code}/stats`);

    return result.data;
  }

  async generate(url: string): Promise<IURL> {
    const result = await this.api.post<IURL>('links', {
      url,
    });

    return result.data;
  }
}

export default ShortenerService;
