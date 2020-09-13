import { ExamplesState } from '@/examples/models';

export const createState = (): ExamplesState => ({
  error: undefined,
  isLoading: false,
  list: []
});
