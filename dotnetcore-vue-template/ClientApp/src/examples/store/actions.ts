import axios, { AxiosResponse } from 'axios';
import { ActionTree } from 'vuex';
import { RootState } from '@/core/models';
import { Example, ExamplesState } from '@/examples/models';
import { snackbar } from '@/libs/core/controls/app-snackbar/snackbar';

import { ActionTypes, MutationTypes, RouteTypes } from './types';

export const createActions = (): ActionTree<ExamplesState, RootState> => ({
  [ActionTypes.add]({ commit, dispatch }, { item }: { item: Example }): Promise<boolean> {
    commit(MutationTypes.setIsLoading, { isLoading: true });

    return new Promise((resolve) => {
      axios.put<boolean>(RouteTypes.examples, item)
        .then((response: AxiosResponse<boolean>) => {
          if (response.data) {
            snackbar.success({ message: 'message.add-success', messageParams: [item.value.toString()] });
            dispatch(ActionTypes.load);
          } else {
            snackbar.error({ message: 'message.add-failure', messageParams: [item.value.toString()] });
            const error: Error = {
              name: 'AddFailure',
              message: `Failed to add ${item.value.toString()}`
            };
            commit(MutationTypes.setError, { error });
          }
        })
        .catch((error) => {
          commit(MutationTypes.setError, { error });
          snackbar.error({ message: 'message.add-failure', messageParams: [item.value.toString()] });
        })
        .finally(() => {
          commit(MutationTypes.setIsLoading, { isLoading: false });
          resolve();
        });
    });
  },
  [ActionTypes.delete]({ commit, dispatch }, { item }: { item: Example }): Promise<boolean> {
    commit(MutationTypes.setIsLoading, { isLoading: true });

    return new Promise((resolve) => {
      axios.delete<boolean>(`${RouteTypes.examples}/${item.id}`)
        .then((response: AxiosResponse<boolean>) => {
          if (response.data) {
            snackbar.success({ message: 'message.delete-success', messageParams: [item.value.toString()] });
            dispatch(`${ActionTypes.load}`);
          } else {
            snackbar.error({ message: 'message.delete-failure', messageParams: [item.value.toString()] });
            const error: Error = {
              name: 'DeleteFailure',
              message: `Failed to delete ${item.value.toString()}`
            };
            commit(MutationTypes.setError, { error });
          }
        })
        .catch((error) => {
          commit(MutationTypes.setError, { error });
          snackbar.error({ message: 'message.delete-failure', messageParams: [item.value.toString()] });
        })
        .finally(() => {
          commit(MutationTypes.setIsLoading, { isLoading: false });
          resolve();
        });
    });
  },
  [ActionTypes.load]({ commit }): Promise<Example[]> {
    commit(MutationTypes.setIsLoading, { isLoading: true });

    return new Promise((resolve) => {
      axios.get<Example[]>(RouteTypes.examples)
        .then((response: AxiosResponse<Example[]>) => {
          const list: Example[] = response.data;
          commit(MutationTypes.setList, { list });
          commit(MutationTypes.setError, { error: undefined });
        })
        .catch((error) => commit(MutationTypes.setError, { error }))
        .finally(() => {
          commit(MutationTypes.setIsLoading, { isLoading: false });
          resolve();
        });
    });
  },
  [ActionTypes.update]({ commit, dispatch }, { item }: { item: Example }): Promise<boolean> {
    commit(MutationTypes.setIsLoading, { isLoading: true });

    return new Promise((resolve) => {
      axios.post<boolean>(RouteTypes.examples, item)
        .then((response: AxiosResponse<boolean>) => {
          if (response.data) {
            snackbar.success({ message: 'message.update-success', messageParams: [item.value.toString()] });
            dispatch(`${ActionTypes.load}`);
          } else {
            snackbar.error({ message: 'message.update-failure', messageParams: [item.value.toString()] });
            const error: Error = {
              name: 'UpdateFailure',
              message: `Failed to update ${item.value.toString()}`
            };
            commit(MutationTypes.setError, { error });
          }
        })
        .catch((error) => {
          commit(MutationTypes.setError, { error });
          snackbar.error({ message: 'message.update-failure', messageParams: [item.value.toString()] });
        })
        .finally(() => {
          commit(MutationTypes.setIsLoading, { isLoading: false });
          resolve();
        });
    });
  }
});
