import { Request, Response } from 'express';

import Link from '../models/link';
import linksRepository from '../database/repositories/linksRepository';

import generateCode from '../util/generateCode';
import checkLinkIsValid from '../util/checkLinkIsValid';

const linksController = {
  async create(request: Request, response: Response) {
    const link = request.body as Link;

    if (!(link && link.url))
      return response.status(400).json({ message: 'Invalid link' });

    if (link.url.substring(0, 4) !== 'http') {
      link.url = `http://${link.url}`;
    }

    const validLink = await checkLinkIsValid(link.url);

    if (!validLink)
      return response.status(400).json({ message: 'Invalid link' });

    link.url_code = generateCode();
    link.hits = 0;

    const createdLink = await linksRepository.add(link);

    if (!createdLink || !createdLink.id) return response.status(400);

    return response.status(201).json(createdLink);
  },

  async show(request: Request, response: Response) {
    const url_code = request.params.url_code as string;

    const link = await linksRepository.updateHits(url_code);

    if (!link) return response.status(404).json({ message: 'Link not found' });

    return response.json(link);
  },

  async stats(request: Request, response: Response) {
    const url_code = request.params.url_code as string;

    const link = await linksRepository.findByUrlCode(url_code);

    if (!link) return response.status(404).json({ message: 'Link not found' });

    return response.json(link);
  },
};

export default linksController;
