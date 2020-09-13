import { Module } from 'vuex';
import { RootState } from '@/core/models';
import { ExamplesState } from '@/examples/models';
import { createActions } from './actions';
import { createGetters } from './getters';
import { createMutations } from './mutations';
import { createState } from './state';

export const createModule = (): Module<ExamplesState, RootState> => ({
  namespaced: true,
  actions: createActions(),
  getters: createGetters(),
  mutations: createMutations(),
  state: createState()
});
