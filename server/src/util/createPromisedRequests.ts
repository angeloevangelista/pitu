import http, { IncomingMessage } from 'http';
import https from 'https';

const createPromisedRequests = (link: string) => ({
  http: () =>
    new Promise<IncomingMessage>((resolve, reject) => {
      http
        .request(link, (response) => resolve(response))
        .on('error', reject)
        .end();
    }),

  https: () =>
    new Promise<IncomingMessage>((resolve, reject) => {
      https
        .request(link, (response) => resolve(response))
        .on('error', reject)
        .end();
    }),
});

export default createPromisedRequests;
