import { shallowMount } from '@vue/test-utils';
import i18n from '@/core/i18n';
import vuetify from '@/core/plugins/vuetify.plugin';
import { createStore } from '@/core/store';
import { Example } from '@/examples/models';
import Examples from '@/examples/views/Examples.vue';

const store = createStore(vuetify);

// Mount the component
const wrapper = shallowMount(Examples, {
  i18n,
  store,
  vuetify
});

describe('Examples', () => {
  describe('computed', () => {
    describe('headers', () => {
      test('should not change unexpected', () => {
        // Arrange && Act
        const { headers } = wrapper.vm as any;

        // Assert
        expect(headers).toMatchSnapshot();
      });
    });
  });

  describe('methods', () => {
    describe('onDeleteConfirmed', () => {
      test('should call $store.dispatch', () => {
        // Arrange
        const item: Example = {
          id: 2,
          value: 42
        } as unknown as Example;
        store.dispatch = jest.fn();

        // Act
        (wrapper.vm as any).onDeleteConfirmed(item);

        // Assert
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith('examples/delete', { item });
      });
    });

    describe('requestDelete', () => {
      test('should call $refs.deleteConfirmDialog.open', () => {
        // Arrange
        const item: Example = {
          id: 2,
          value: 42
        } as unknown as Example;
        (wrapper.vm as any).$refs = {
          deleteConfirmDialog: { open: jest.fn() }
        };

        // Act
        (wrapper.vm as any).requestDelete(item);

        // Assert
        expect((wrapper.vm as any).$refs.deleteConfirmDialog.open).toHaveBeenCalledTimes(1);
        expect((wrapper.vm as any).$refs.deleteConfirmDialog.open).toHaveBeenCalledWith({
          buttons: {
            cancel: {
              text: "message.cancel"
            },
            confirm: {
              text: "message.delete",
              textColor: "error"
            }
          },
          message: "message.delete-message",
          messageParams: ["42"],
          meta: item,
          title: "message.delete-title"
        });
      });
    });
  });
});
