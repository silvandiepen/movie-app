export interface Movie {
    id: number;
    title: string;
    description: string;
  }
  
  export interface MoviesState {
    movies: Movie[];
    loading: boolean;
    error: any;
  }
  