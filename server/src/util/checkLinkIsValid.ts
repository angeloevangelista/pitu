import { IncomingMessage } from 'http';

import createPromisedRequests from './createPromisedRequests';

const validProtocols = ['http', 'https'];

async function checkLinkIsValid(link: string) {
  try {
    const [linkProtocol] = link.split(':');

    if (!linkProtocol) return false;
    if (!validProtocols.includes(linkProtocol)) return false;

    let response: IncomingMessage | null = null;

    const promisedRequests = createPromisedRequests(link);

    switch (linkProtocol) {
      case 'http':
        response = await promisedRequests.http();
        break;

      case 'https':
        response = await promisedRequests.https();
        break;
    }

    return !!response;
  } catch {
    return false;
  }
}

export default checkLinkIsValid;
