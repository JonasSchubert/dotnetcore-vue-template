import { ExamplesState } from '@/examples/models';
import { createState } from '@/examples/store/state';

describe('examples/state', () => {
  test('should not change unexpected', () => {
    // Arrange && Act
    const examplesState: ExamplesState = createState();

    // Assert
    expect(examplesState).toMatchSnapshot();
  });
});
