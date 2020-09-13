import { MutationTree } from 'vuex';
import { Example, ExamplesState } from '@/examples/models';
import { MutationTypes } from './types';

export const createMutations = (): MutationTree<ExamplesState> => ({
  [MutationTypes.setError]: (state: ExamplesState, { error }: { error: Error }): void => { state.error = error; },
  [MutationTypes.setIsLoading]: (state: ExamplesState, { isLoading }: { isLoading: boolean }): void => { state.isLoading = isLoading; },
  [MutationTypes.setList]: (state: ExamplesState, { list }: { list: Example[] }): void => { state.list = list; }
});
