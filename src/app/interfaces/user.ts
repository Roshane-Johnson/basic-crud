enum JobPostition {
  Intern = 'Intern',
  Senior = 'Senior',
  Executive = 'Executive',
  CEO = 'CEO',
  Founder = 'Founder',
}

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  isEmployed: boolean;
  jobPosition: JobPostition;
  createdAt: Date;
  updatedAt: Date;
}
