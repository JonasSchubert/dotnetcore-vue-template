import { ExamplesState } from '@/examples/models';
import { BaseState } from "@/libs/core/models";
import { I18nState } from "@/libs/i18n/models";
import { LocalStorageState } from "@/libs/local-storage/models";

export interface RootState extends BaseState {
  examples?: ExamplesState;
  i18n?: I18nState;
  localStorage?: LocalStorageState;
}
