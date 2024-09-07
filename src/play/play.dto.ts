import { IsMagnetURI } from 'class-validator';

export class PlayDto {
  @IsMagnetURI()
  magnet: string;
}
