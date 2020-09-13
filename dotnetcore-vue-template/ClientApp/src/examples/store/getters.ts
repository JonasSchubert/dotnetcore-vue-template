import { GetterTree } from 'vuex';
import { RootState } from '@/core/models';
import { Example, ExamplesState } from '@/examples/models';
import { GetterTypes } from './types';

export const createGetters = (): GetterTree<ExamplesState, RootState> => ({
  [GetterTypes.error]: (state: ExamplesState): Error | undefined => state.error,
  [GetterTypes.isLoading]: (state: ExamplesState): boolean => state.isLoading,
  [GetterTypes.list]: (state: ExamplesState): Example[] => state.list
});
