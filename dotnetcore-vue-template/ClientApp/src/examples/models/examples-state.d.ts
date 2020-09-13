import { Example } from './example';

export interface ExamplesState {
  error?: Error;
  isLoading: boolean;
  list: Example[];
}
