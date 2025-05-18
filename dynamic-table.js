// dynamic-table.js  ── styled version (Vue 3 + Vuetify 3, ESM)

/*
  New goodies:
  • Compact density + striped rows + subtle hover highlight
  • Sticky header (so column titles stay visible when you scroll)
  • Search box (client-side filter) in a toolbar
  • Rows-per-page selector + pagination
  • Optional props to adjust elevation, height, density
*/

export default {
    name: 'DynamicTable',
  
    /* ---------- Props ---------- */
    props: {
      items:        { type: Array,  required: true },
      /* customisable bits */
      title:        { type: String, default: ''    },
      dense:        { type: Boolean, default: true },
      elevation:    { type: [Number, String], default: 5 },
      height:       { type: [Number, String], default: 500 }
    },
  
    /* ---------- Data ---------- */
    data() {
      return { search: '' };
    },
  
    /* ---------- Computed ---------- */
    computed: {
      /* Build headers from first item’s keys */
      headers() {
        if (!this.items?.length) return [];
        return Object.keys(this.items[0]).map(k => ({
          title: k
            .replace(/_/g, ' ')
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, c => c.toUpperCase())
            .trim(),
          value: k
        }));
      },
  
      /* Simple client-side filter */
      filtered() {
        if (!this.search) return this.items;
        const term = this.search.toLowerCase();
        return this.items.filter(row =>
          Object.values(row).some(
            v => String(v).toLowerCase().includes(term)
          )
        );
      }
    },
  
    /* ---------- Template ---------- */
    template: `
      <v-card
        :elevation="elevation"
        class="ma-4"
        outlined
      >
        <!-- Optional title bar + search -->
        <v-toolbar
          v-if="title || true"
          flat
          density="compact"
          class="px-4"
        >
          <v-toolbar-title v-if="title">
            {{ title }}
          </v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <v-text-field
            v-model="search"
            density="compact"
            prepend-inner-icon="mdi-magnify"
            label="Search…"
            single-line
            hide-details
            style="max-width: 220px"
          ></v-text-field>
        </v-toolbar>
  
        <!-- The table -->
        <v-data-table
          :headers="headers"
          :items="filtered"
          :density="dense ? 'compact' : undefined"
          :items-per-page="10"
          :height="height"
          class="striped-table"
          fixed-header
          hover
          show-current-page
          page-text="{0}-{1} of {2}"
        >
          <!-- empty state -->
          <template #no-data>
            <v-alert type="info" class="ma-4">
              No matching records
            </v-alert>
          </template>
        </v-data-table>
      </v-card>
    `
  };
  