<template>
    <Table
        :captions="captions"
        :header="header"
        :body="body">
    </Table>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { ITable, getKey } from './Table.vue';

    export default Vue.extend({
        name: 'Help',
        data(): ITable {
            return {
                captions: [
                    {
                        key: getKey(),
                        label: 'Usage: kh [option] (kh is added for you)'
                    }
                ],
                header: [
                    {
                        key: getKey(),
                        columns: [
                            {
                                key: getKey(),
                                label: 'Option'
                            },
                            {
                                key: getKey(),
                                label: 'Alias'
                            },
                            {
                                key: getKey(),
                                label: 'Description'
                            }
                        ]
                    }
                ],
                body: [
                    {
                        key: getKey(),
                        columns: [
                            {
                                key: getKey(),
                                label: '--bio'
                            },
                            {
                                key: getKey(),
                                label: '-b'
                            },
                            {
                                key: getKey(),
                                label: 'Display kyle\'s bio'
                            }
                        ]
                    },
                    {
                        key: getKey(),
                        columns: [
                            {
                                key: getKey(),
                                label: '--links'
                            },
                            {
                                key: getKey(),
                                label: '-l'
                            },
                            {
                                key: getKey(),
                                label: 'Display kyle\'s profile links'
                            }
                        ]
                    },
                    {
                        key: getKey(),
                        columns: [
                            {
                                key: getKey(),
                                label: '--timeline'
                            },
                            {
                                key: getKey(),
                                label: '-t'
                            },
                            {
                                key: getKey(),
                                label: 'Display a brief timeline of kyle\'s career'
                            }
                        ]
                    },
                    {
                        key: getKey(),
                        columns: [
                            {
                                key: getKey(),
                                label: '--help'
                            },
                            {
                                key: getKey(),
                                label: '-h'
                            },
                            {
                                key: getKey(),
                                label: 'Display this table with available options'
                            }
                        ]
                    },
                    {
                        key: getKey(),
                        columns: [
                            {
                                key: getKey(),
                                label: '--quit'
                            },
                            {
                                key: getKey(),
                                label: '-q'
                            },
                            {
                                key: getKey(),
                                label: 'Quit the cli and return to the main page'
                            }
                        ]
                    }
                ]
            };
        }
    });
</script>
