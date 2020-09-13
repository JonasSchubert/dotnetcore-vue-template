<template>
  <v-row class="fill-height" no-gutters>
    <v-col>
      <v-card height="100%">
        <v-toolbar extension-height="10" flat>
          <v-subheader>{{ $tc("message.example", list.length) }}</v-subheader>
          <v-spacer></v-spacer>
          <v-text-field
            :label="$t('message.search')"
            append-icon="mdi-magnify"
            dense
            hide-details
            single-line
            v-model="search"
          ></v-text-field>
        </v-toolbar>

        <v-data-table
          :footer-props="{
            'items-per-page-options': [5, 15, 25, 50]
          }"
          :headers="headers"
          :items="list"
          :items-per-page="25"
          :loading="isLoading"
          :search="search"
          :sort-by="['dateTimeAdded']"
          :sort-desc="[false]"
          dense
          multi-sort
        >
          <template v-slot:item.actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon color="error" small v-on="on" @click="requestDelete(item)">mdi-delete</v-icon>
              </template>
              <span>{{ $t("message.delete") }}</span>
            </v-tooltip>
          </template>
        </v-data-table>

        <confirm-dialog ref="deleteConfirmDialog" @confirm="onDeleteConfirmed"></confirm-dialog>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Example } from "@/examples/models";
import { ActionTypes, GetterTypes, ModuleType } from "@/examples/store/types";
import { ConfirmDialogConfig } from "@/libs/core/dialogs/confirm-dialog";

@Component({
  name: "examples",
  computed: {
    ...mapGetters(ModuleType, [GetterTypes.isLoading, GetterTypes.list])
  }
})
export default class Examples extends Vue {
  $refs!: {
    deleteConfirmDialog: any;
  };

  search = "";

  get headers(): any[] {
    return [
      { text: this.$tc("message.id", 1), value: "id", sortable: false },
      { text: this.$tc("message.value", 1), value: "value", sortable: true },
      { text: this.$t("message.date-time-added"), value: "dateTimeAdded", sortable: true },
      { text: this.$t("message.date-time-updated"), value: "dateTimeUpdated", sortable: true },
      { text: "", value: "actions", sortable: false }
    ];
  }

  onDeleteConfirmed(item: Example): void {
    this.$store.dispatch(`${ModuleType}/${ActionTypes.delete}`, { item });
  }

  requestDelete(item: Example): void {
    const config: ConfirmDialogConfig<Example> = {
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
      messageParams: [item.value.toString()],
      meta: item,
      title: "message.delete-title"
    };
    this.$refs.deleteConfirmDialog.open(config);
  }
}
</script>
