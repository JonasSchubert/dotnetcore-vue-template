import {
  ActionTypes, GetterTypes, ModuleType, MutationTypes, RouteTypes
} from '@/examples/store/types';

describe('ActionTypes', () => {
  test('should not change unexpected', () => {
    // Assert
    expect(ActionTypes).toMatchSnapshot();
  });
});

describe('GetterTypes', () => {
  test('should not change unexpected', () => {
    // Assert
    expect(GetterTypes).toMatchSnapshot();
  });
});

describe('ModuleType', () => {
  test('should not change unexpected', () => {
    // Assert
    expect(ModuleType).toMatchSnapshot();
  });
});

describe('MutationTypes', () => {
  test('should not change unexpected', () => {
    // Assert
    expect(MutationTypes).toMatchSnapshot();
  });
});

describe('RouteTypes', () => {
  test('should not change unexpected', () => {
    // Assert
    expect(RouteTypes).toMatchSnapshot();
  });
});
