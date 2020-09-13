import { Example, ExamplesState } from '@/examples/models';
import { createMutations } from '@/examples/store/mutations';
import { MutationTypes } from '@/examples/store/types';

describe('examples/mutations', () => {
  let state: ExamplesState;
  const mutations = createMutations();

  beforeEach(() => {
    state = {
      error: undefined,
      isLoading: false,
      list: []
    };
  });

  describe(`${MutationTypes.setError}`, () => {
    test('should set error', () => {
      // Arrange
      const error: Error = {
        message: 'message',
        name: 'name'
      };

      // Act
      mutations[MutationTypes.setError](state, { error });

      // Assert
      expect(state.error).toMatchSnapshot({
        message: 'message',
        name: 'name'
      });
    });
  });

  describe(`${MutationTypes.setIsLoading}`, () => {
    test('should set isLoading', () => {
      // Arrange
      const isLoading = true;

      // Act
      mutations[MutationTypes.setIsLoading](state, { isLoading });

      // Assert
      expect(state.isLoading).toBeTruthy();
    });
  });

  describe(`${MutationTypes.setList}`, () => {
    test('should set list', () => {
      // Arrange
      const list: Example[] = [
        { id: '1' } as Example
      ];

      // Act
      mutations[MutationTypes.setList](state, { list });

      // Assert
      expect(state.list).toMatchSnapshot([
        { id: '1' }
      ]);
    });
  });
});
