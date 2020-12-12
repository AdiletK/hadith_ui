<template>
  <v-data-table
    :headers="headers"
    :items="hadiths"
    sort-by="id"
    class="elevation-1"
    show-expand
    :loading="loading"
    loading-text="Loading... Please wait"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Hadith</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    v-model="editedItem.title"
                    label="Title"
                    :rules="rules"
                    required
                  ></v-text-field>
                  <v-select
                    v-model="editedItem.status"
                    :items="statuses"
                    :rules="rules"
                    label="Status"
                    required
                  ></v-select>
                   <v-select
                    v-model="editedItem.categoryId"
                    :items="categories"
                    :rules="rules"
                    label="Category"
                    item-text="title"
                    item-value="id"
                    required
                  ></v-select>
                   <v-select
                    v-model="editedItem.bookId"
                    :items="books"
                    :rules="rules"
                    label="Book"
                    item-text="title"
                    item-value="id"
                    required
                  ></v-select>
                    <v-textarea
                    v-model="editedItem.description"
                    label="Description"
                    :rules="rules"
                    required
                  ></v-textarea>
                </v-form>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :disabled="!valid"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-card-title>No data available</v-card-title>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">{{ item.description }}</td>
    </template>
  </v-data-table>
</template>

<script>
import * as categoryApi from "../../api/category";
import * as statusApi from "../../api/status";
import * as hadithApi from "../../api/hadith";
import * as bookApi from "../../api/book"
export default {
  data: () => ({
    loading: true,
    valid: true,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Title", value: "title" },
      { text: "Status", value: "status" },
      { text: "Category", value: "categoryName" },
      { text: "Book", value: "bookTitle" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    hadiths: [],
    categories: [],
    statuses: [],
    books: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      title: "",
      status: "",
      description: "",
      categoryId: "",
      bookId: "",
    },
    defaultItem: {
      title: "",
      status: "",
      description: "",
      categoryId: "",
      bookId: "",
    },
    rules: [(v) => !!v || "Field is required"],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New" : "Edit";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  async created() {
    this.initialize();
    this.getNeedData();
  },

  methods: {
    async initialize() {
      this.hadiths = await hadithApi.getAll() || [];
      this.loading = false;
    },
    async getNeedData() {
      this.categories = await categoryApi.getAll() || [];
      this.statuses = await statusApi.getAll();
      this.books = await bookApi.getAll() || [];
    },
    editItem(item) {
      this.editedIndex = this.hadiths.indexOf(item);
      console.log(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.hadiths.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.hadiths.splice(this.editedIndex, 1);
      hadithApi.deleteById(this.editedItem.id);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          await hadithApi.update(this.editedItem.id, this.editedItem);
        } else {
          await hadithApi.add(this.editedItem);
        }
        this.initialize();

        this.close();
      }
    },
  },
};
</script>
