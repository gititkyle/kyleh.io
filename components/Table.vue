<template>
    <table>
        <caption
            v-for="caption in captions"
            :key="caption.key">
            {{caption.label}}
        </caption>
        <thead>
            <tr
                v-for="row in header"
                :key="row.key">
                <td
                    v-for="data in row.columns"
                    :key="data.key">
                    {{data.label}}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="row in body"
                :key="row.key">
                <td
                    v-for="data in row.columns"
                    :key="data.key">
                    {{data.label}}
                </td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
</template>
<script lang="ts">
    import Vue from 'vue';

    export function getKey (): number {
        return Math.floor(Date.now() * (Math.random() * 10));
    }

    export interface ITable {
        captions?: ITableColumn[];
        header: ITableHeader[];
        body: ITableBody[];
        footer?: ITableFooter[];
    }

    export interface ITableColumn {
        key: number;
        label: string;
    }

    export interface ITableHeader {
        key: number;
        columns: ITableColumn[];
    }

    export interface ITableBody {
        key: number;
        columns: ITableColumn[];
    }

    export interface ITableFooter {
        key: number;
        columns: ITableColumn[];
    }

    export default Vue.extend({
        name: 'Table',
        props: {
            captions: Array,
            header: Array,
            body: Array,
            footer: Array
        }
    });
</script>
