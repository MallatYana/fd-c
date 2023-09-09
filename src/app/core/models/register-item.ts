export interface RegisterItem {
  nickName: string;
  email: string;
  type: 'viewer' | 'painter' | 'writer'[];
  password: string; //research later
  role: 'admin' | 'moderator' | 'user';
}
