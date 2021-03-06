import { RootState } from '@/core/models';
import { createMutations } from '@/core/store/mutations';
import { MutationTypes } from '@/core/store/types';
import { ExamplesState } from '@/examples/models';
import { LocalStorageState } from "@/libs/local-storage/models";
import { I18nState } from "@/libs/i18n/models";

describe('mutations', () => {
  const mutations = createMutations();

  describe(`${MutationTypes.increaseRequests}`, () => {
    test('should increase requests by one', () => {
      // Arrange
      const state: RootState = {
        examples: {} as ExamplesState,
        i18n: {} as I18nState,
        localStorage: {} as LocalStorageState,
        requests: 0
      };

      // Act
      mutations[MutationTypes.increaseRequests](state);

      // Assert
      expect(state.requests).toBe(1);
    });
  });

  describe(`${MutationTypes.decreaseRequests}`, () => {
    test('should decrease requests by one', () => {
      // Arrange
      const state: RootState = {
        examples: {} as ExamplesState,
        i18n: {} as I18nState,
        localStorage: {} as LocalStorageState,
        requests: 3
      };

      // Act
      mutations[MutationTypes.decreaseRequests](state);

      // Assert
      expect(state.requests).toBe(2);
    });
  });
});
