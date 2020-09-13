import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
import { createI18nModule } from '@/core/i18n/module-helper';
import { RootState } from '@/core/models';
import { createModule as createExamplesModule } from '@/examples/store';
import { ModuleType as ExamplesModule } from '@/examples/store/types';
import { ModuleType as LocalStorageModule } from "@/libs/local-storage/store/types";
import { createLocalStorageModule } from "@/libs/local-storage/store";
import { createGetters } from './getters';
import { createMutations } from './mutations';
import { createState } from './state';

Vue.use(Vuex);

export const createStore = (vuetify: any): Store<RootState> => {
  const store: StoreOptions<RootState> = {
    getters: createGetters(),
    modules: {
      [ExamplesModule]: createExamplesModule(),
      i18n: createI18nModule(),
      [LocalStorageModule]: createLocalStorageModule<RootState>('dotnetcore-vue-template', vuetify)
    },
    mutations: createMutations(),
    state: createState(),
    strict: process.env.NODE_ENV !== 'production'
  };

  return new Store<RootState>(store);
};
