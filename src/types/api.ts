export interface DrillItem {
  id: number;
  name?: string;  
  title?: string; 
  body?: string;  
}

export interface AppState {
  level: number;
  id: number | null;
  name: string;
}