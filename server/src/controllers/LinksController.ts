import { Request, Response } from 'express';
import { link } from 'fs';
import { Server } from 'http';
import { url } from 'inspector';

import { Link } from '../models/link';

const links: Link[] = [];
let nextId = 1;

function generateCode() {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const linksController = {
  create(request: Request, response: Response) {
    const link = request.body as Link;

    link.id = nextId++;
    link.url_code = generateCode();
    link.hits = 0;

    links.push(link);

    return response.status(201).json(link);
  },

  show(request: Request, response: Response) {
    const url_code = request.params.url_code as string;

    const linkIndex = links.findIndex((item) => item.url_code === url_code);

    if (linkIndex === -1)
      return response.status(404).json({ message: 'Link not found' });

    links[linkIndex].hits!++;

    return response.json(links[linkIndex]);
  },

  stats(request: Request, response: Response) {
    const url_code = request.params.url_code as string;

    const link = links.find((item) => item.url_code === url_code);

    if (!link) return response.status(404).json({ message: 'Link not found' });

    return response.json(link);
  },
};

export default linksController;
