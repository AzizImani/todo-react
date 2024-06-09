export interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
    dueDate: string;
  }

 export interface TodoPropsWithRemove extends TodoProps {
    onRemove: (id: number) => void;
  }