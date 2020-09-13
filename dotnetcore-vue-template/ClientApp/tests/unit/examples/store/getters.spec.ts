import { RootState } from '@/core/models';
import { Example, ExamplesState } from '@/examples/models';
import { createGetters } from '@/examples/store/getters';
import { GetterTypes } from '@/examples/store/types';

describe('examples/getters', () => {
  let state: ExamplesState;
  const getters = createGetters();

  beforeEach(() => {
    state = {
      error: {
        message: 'message',
        name: 'name'
      },
      isLoading: true,
      list: [
        { id: '1' } as Example
      ]
    };
  });

  describe(`${GetterTypes.error}`, () => {
    test('should return error as expected', () => {
      // Arrange && Act
      const actual = getters[GetterTypes.error](state, getters, {} as RootState, {});

      // Assert
      expect(actual).toMatchSnapshot({
        message: 'message',
        name: 'name'
      });
    });
  });

  describe(`${GetterTypes.isLoading}`, () => {
    test('should return isLoading as expected', () => {
      // Arrange && Act
      const actual = getters[GetterTypes.isLoading](state, getters, {} as RootState, {});

      // Assert
      expect(actual).toBeTruthy();
    });
  });

  describe(`${GetterTypes.list}`, () => {
    test('should return list as expected', () => {
      // Arrange && Act
      const actual = getters[GetterTypes.list](state, getters, {} as RootState, {});

      // Assert
      expect(actual).toMatchSnapshot([
        { id: '1' } as Example
      ]);
    });
  });
});
