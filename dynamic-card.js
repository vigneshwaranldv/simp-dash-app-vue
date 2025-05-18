// dynamic-card.js — styled version (Vue 3 + Vuetify 3, ESM)
export default {
  name: "DynamicCard",

  /* ---------- props ---------- */
  props: {
    data: { type: Object, required: true },
    titleField: { type: String, default: null },
    icon: { type: String, default: "mdi-card-text-outline" },
    color: { type: String, default: "secondary" }, // toolbar color
    elevation: { type: [Number, String], default: 5 },
  },

  /* ---------- computed ---------- */
  computed: {
    cardTitle() {
      return this.titleField && this.data[this.titleField]
        ? this.data[this.titleField]
        : "Details";
    },
  },

  /* ---------- template ---------- */
  template: /*html*/ `
      <v-card
        class="ma-4 rounded-lg"
        :elevation="elevation"
        hover
      >
        <!-- Colored title bar -->
        <v-card-title
          :class="color"
          class="text-white"
          style="min-height: 44px;"
        >
         <v-icon size="18" class="mr-2">{{ icon }}</v-icon>
          {{ cardTitle }}
        </v-card-title>
  
        <v-divider></v-divider>
  
        <!-- two-column grid of key/value pairs -->
        <v-card-text>
          <v-row
            v-for="(value, key) in data"
            :key="key"
            dense
            class="mb-2"
          >
            <v-col cols="4" class="text-caption text-medium-emphasis font-weight-medium">
              {{ key }}
            </v-col>
            <v-col cols="8" class="text-body-2">
              {{ value }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    `,
};
