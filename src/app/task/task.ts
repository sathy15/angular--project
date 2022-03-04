export class Task {
  id: number;
  taskname: string;
  description: string;
  assigneto: string;
  assignedate: string;
  duedate: string;
  status: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
