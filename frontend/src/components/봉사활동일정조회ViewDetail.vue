<template>

    <v-card outlined>
        <v-card-title>
            봉사활동일정조회 # {{$route.params.id }}
        </v-card-title>

        <v-card-text>
        </v-card-text>
    </v-card>

</template>

<script>
  const axios = require('axios').default;

  export default {
    name: '봉사활동일정조회ViewDetail',
    props: {
      value: Object,
    },
    data: () => ({
        item : [],
    }),
    async created() {
      var params = this.$route.params;
      var temp = await axios.get(axios.fixUrl('/봉사활동일정조회/' + params.id))

      this.item = temp.data;

    },
    methods: {
    }
  }
</script>

