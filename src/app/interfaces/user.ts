import { JobPosition } from '../enums/job-position';

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  isActive: boolean;
  jobPosition: JobPosition;
  createdAt: Date;
  updatedAt: Date;
}
