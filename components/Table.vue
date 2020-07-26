<template>
    <table>
        <thead>
            <th>
                <tr v-repeat="row in data.header.rows">
                    <td v-repeat="column in row.columns">{{column.label}}</td>
                </tr>
            </th>
        </thead>
        <tbody>
            <tr v-repeat="row in data.body.rows">
                <td v-repeat="column in row.columns">{{column.label}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Table',
        props: ['table-data'],
        data: function () {
            return {
                data: {
                    header: {
                        rows: [
                            {
                                columns: [
                                    {
                                        label: 'header-column-1'
                                    },
                                    {
                                        label: 'header-column-2'
                                    }
                                ]
                            }
                        ]
                    },
                    body: {
                        rows: [
                            {
                                columns: [
                                    {
                                        label: 'body-column-1'
                                    },
                                    {
                                        label: 'body-column-2'
                                    }
                                ]
                            }
                        ]
                    }
                }
            };
        }
    });
</script>
