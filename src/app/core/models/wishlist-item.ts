import { Guid } from 'guid-typescript';

export interface WishlistItem {
  id: string;
  userId: Guid;
  mainDescription: string;
  extraDescription: string | null;
  assignCreatorId: Guid | null;
  assignCreatorNickName: string | null;
  assignCreatorUrl: string | null;
}
