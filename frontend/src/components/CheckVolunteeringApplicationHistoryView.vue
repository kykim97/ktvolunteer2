<template>

    <v-data-table
        :headers="headers"
        :items="checkVolunteeringApplicationHistory"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'CheckVolunteeringApplicationHistoryView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            checkVolunteeringApplicationHistory : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/checkVolunteeringApplicationHistories'))

            temp.data._embedded.checkVolunteeringApplicationHistories.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.checkVolunteeringApplicationHistory = temp.data._embedded.checkVolunteeringApplicationHistories;
        },
        methods: {
        }
    }
</script>

