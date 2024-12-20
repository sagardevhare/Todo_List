export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface Employee {
  id: string;
  name: string;
  data?: {
    year?: number;
    price?: number;
    "CPU model"?: string;
    "Hard disk size"?: string;
    [key: string]: any;
  };
}