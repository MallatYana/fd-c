import { Guid } from 'guid-typescript';

export interface CreatorItem {
  id: Guid;
  nickName: string;
  avatar: string;
  mainInfo: string;
  contacts: string;
  price: string[];
}
