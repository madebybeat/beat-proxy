import { IsString } from 'class-validator';

export class PlayDto {
  @IsString()
  magnet: string;
}
