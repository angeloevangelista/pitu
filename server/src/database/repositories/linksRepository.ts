import LinkEntity, { ILinkEntity } from '../entities/link';
import Link from '../../models/link';

const linksRepository = {
  async findByUrlCode(url_code: string) {
    const link = await LinkEntity.findOne<ILinkEntity>({
      where: {
        url_code,
      },
    });

    return link;
  },

  async add(link: Link) {
    const createdLink = await LinkEntity.create<ILinkEntity>(link);

    return createdLink;
  },

  async updateHits(url_code: string): Promise<ILinkEntity | undefined | null> {
    const link = await this.findByUrlCode(url_code);

    if (!link) return null;

    link.hits!++;
    await link.save();

    return link;
  },
};

export default linksRepository;
