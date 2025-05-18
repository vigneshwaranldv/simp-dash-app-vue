// dynamic-table.js
export default {
    name: 'DynamicTable',
  
    /* ---- Props ---- */
    props: { items: { type: Array, required: true } },
  
    /* ---- Computed ---- */
    computed: {
      /** Build headers from the first item’s keys */
      headers() {
        if (!this.items.length) return [];
        return Object.keys(this.items[0]).map(k => ({
          title: k
            .replace(/_/g, ' ')
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, c => c.toUpperCase())
            .trim(),
          value: k
        }));
      }
    },
  
    /* ---- Template ---- */
    template: `
      <v-card class="ma-4">
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    `
  };
  