import { Injectable } from '@nestjs/common';
import type { WebTorrent, Torrent } from 'webtorrent';

@Injectable()
export class PlayService {
  private readonly instance: any;

  constructor(private webTorrent: WebTorrent) {
    this.instance = new this.webTorrent();
  }

  async load(magnet: string): Promise<any> {
    return new Promise((resolve) => {
      this.instance.add(magnet, (torrent: Torrent) => {
        resolve(torrent.files[0].createReadStream());
      });
    });
  }
}
