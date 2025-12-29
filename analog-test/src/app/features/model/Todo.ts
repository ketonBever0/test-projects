export type Todo = {
  id: number;
  title: string;
  details: string;
  until: Date | null;
  done: boolean;
};
