import { User } from '../models/user';

export interface TokenResponseDto {
  token: string;
  user: User;
}
