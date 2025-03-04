export interface ProjectMember {
  id: string;
  name: string;
  role: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  members: ProjectMember[];
}

export interface ProjectFormState {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  members: ProjectMember[];
}

export interface ProjectStore {
  projects: Project[];
  currentProject: Project | null;
  formState: ProjectFormState;
  setCurrentProject: (project: Project | null) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  updateFormState: (state: Partial<ProjectFormState>) => void;
  resetFormState: () => void;
} 