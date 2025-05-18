// dynamic-card.js   — Step 1: minimal version
export default {
    name: 'DynamicCard',
  
    /* Props */
    props: {
      /** Plain object to show in the card */
      data: { type: Object, required: true }
    },
  
    /* Template */
    template: `
      <v-card class="ma-4">
        <v-card-text>
          <div
            v-for="(value, key) in data"
            :key="key"
            style="margin-bottom:4px"
          >
            <strong>{{ key }}:</strong> {{ value }}
          </div>
        </v-card-text>
      </v-card>
    `
  };
  