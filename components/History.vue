<template>
    <Timeline
        :cards="cards">
    </Timeline>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { getKey } from './Table.vue';

    export default Vue.extend({
        name: 'History',
        data() {
            return {
                cards: [
                    {
                        key: getKey(),
                        title: 'Jan \'85',
                        body: 'Born in SLC, Ut'
                    },
                    {
                        key: getKey(),
                        title: 'Jan \'09',
                        body: 'Leaves the Marine Corps after 5 years of active duty'
                    },
                    {
                        key: getKey(),
                        title: 'Dec \'12',
                        body: 'Builds first website'
                    },
                    {
                        key: getKey(),
                        title: 'June \'15',
                        body: 'Starts engineering internship @ reputation.com'
                    },
                    {
                        key: getKey(),
                        title: 'Dec \'15',
                        body: 'Offered a full-time engineering position @ reputation.com'
                    },
                    {
                        key: getKey(),
                        title: 'Today',
                        body: 'Has awesome people checking out this cli'
                    }
                ]
            };
        }
    });
</script>
