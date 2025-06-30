export interface ITask {
  tasks: {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
    priority: "high" | "low" | "medium";
  }[];
}
