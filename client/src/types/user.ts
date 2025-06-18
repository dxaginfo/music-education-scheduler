export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  profileImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  bio?: string;
  preferences?: Record<string, any>;
  notificationSettings?: Record<string, any>;
}

export interface TeacherProfile {
  id: string;
  userId: string;
  specializations: string[];
  qualifications?: string;
  hourlyRate: number;
  availability?: Record<string, any>;
  bio?: string;
  profileImageUrl?: string;
}

export interface StudentProfile {
  id: string;
  userId: string;
  age?: number;
  skillLevel?: string;
  primaryInstrument?: string;
  secondaryInstruments: string[];
  learningGoals?: string;
  parentUserId?: string;
}

export interface UserWithProfile extends User {
  profile?: Profile;
  teacherProfile?: TeacherProfile;
  studentProfile?: StudentProfile;
}