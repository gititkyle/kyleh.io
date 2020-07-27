<template>
    <div class="terminal">
        <section class="terminal-tb">
            <div class="titlebar-t">{{user}}:{{dirname}}</div>
        </section>
        <section class="terminal-b">
            <div class="terminal-h">
                <Welcome></Welcome>
                <Logo></Logo>
                <div
                    v-for="item in history" :key="item.id">
                    {{user}}:{{dirname}}$ {{item.command}}
                    <div v-if="item.type === HistoryRecordType.Help"><Help></Help></div>
                    <div v-if="item.type === HistoryRecordType.Bio"><Bio></Bio></div>
                    <div v-if="item.type === HistoryRecordType.Links"><Links></Links></div>
                    <div v-if="item.type === HistoryRecordType.Timeline"><History></History></div>
                    <div v-if="item.type === HistoryRecordType.Error"><Error></Error></div>
                    <div v-if="item.type === HistoryRecordType.Quit"><Quit></Quit></div>
                </div>
            </div>
        </section>
        <section class="terminal-c">
            <div>{{user}}:{{dirname}}$</div>
            <input
                class="terminal-cmd"
                ref="text"
                type="text"
                autocomplete="off"
                v-model="command"
                v-on:keyup.enter="submit()">
        </section>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export interface IHistoryRecord {
        id: number,
        type: HistoryRecordType,
        data?: any,
        command: string
    };

    export enum HistoryRecordType {
        Help="help",
        Bio="bio",
        Links="links",
        Timeline="timeline",
        Error="error",
        Quit="quit"
    };

    export const DEFAULT_CMD: string = 'kh --help';
    export const DIRNAME: string = '~/term';
    export const USER: string = 'hi@kyleh.io';

    export let HistoryRecords: IHistoryRecord[] = [];
    export let ParsedCommand: Array<string> = [];

    export default Vue.extend({
        name: 'Terminal',
        data () {
            return {
                history: HistoryRecords,
                dirname: DIRNAME,
                user: USER,
                command: DEFAULT_CMD,
                parsed: ParsedCommand,
                HistoryRecordType: HistoryRecordType,
                countdown: 5
            };
        },
        mounted () {
            this.focusInput();
        },
        methods: {
            submit () {
                const scrollable = this.$el.querySelector('.terminal-b');

                this.parsed = this.parse();

                this.history.push({
                    id: this.getId(),
                    type: this.getType(),
                    command: this.getCmd()
                });

                setTimeout(() => {
                    if(scrollable) {
                        scrollable.scrollTop = scrollable.scrollHeight;
                    }
                });

                this.clear();
                this.focusInput();
            },
            parse () {
                return this.command.split(' ');
            },
            clear () {
                this.command = 'kh ';
            },
            focusInput () {
                // @ts-ignore
                this.$refs.text.focus();
            },
            getId () {
                return Date.now();
            },
            getType () {
                switch((this.parsed[1] || '').trim()) {
                    case '--help':
                    case '-h':
                        return this.HistoryRecordType.Help;
                    case '--bio':
                    case '-b':
                        return this.HistoryRecordType.Bio;
                    case '--links':
                    case '-l':
                        return this.HistoryRecordType.Links;
                    case '--timeline':
                    case '-t':
                        return this.HistoryRecordType.Timeline;
                    case '--quit':
                    case '-q':
                        return this.HistoryRecordType.Quit;
                    default:
                        return this.HistoryRecordType.Error;
                }
            },
            getCmd () {
                return this.command;
            }
        }
    });
</script>
<style lang="scss" scoped>
    .terminal {
        position: relative;
        height: 64vh;
        opacity: .95;
        background-color: $dark-theme-5;

       .terminal-tb {
           width: 100%;
           height: 3vh;
           display: flex;
           align-items: center;
           justify-content: center;
           color: $dark-theme-text-dark;
           background-color: $dark-theme-4;
       }

       .terminal-b {
           width: 100%;
           height: 85%;
           overflow-y: scroll;
           scrollbar-width: 0px;
           position: relative;
           padding: 8px;
           color: $dark-theme-text-light;

            &::-webkit-scrollbar {
                width: 0px;
                background: transparent;
            }

           .terminal-card, .terminal-alert, .terminal-timeline {
               margin: 16px 0;
           }
       }

       .terminal-c {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 4vh;
            padding: 8px;
            color: $dark-theme-text-light;

            .terminal-cmd, .terminal-cmd:focus {
                outline: none;
            }

            .terminal-cmd {
                width: 50%;
                margin: 0 4px;
                background: transparent;
                border: none;
                color: $dark-theme-text-light;
            }
        }
    }
</style>
