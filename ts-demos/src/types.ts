export type Info = {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  online: boolean;
};

export type AdminInfoList = Info & {
  rank: string;
};
