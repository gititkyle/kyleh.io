<template>
    <div class="terminal">
        <section class="terminal-tb">
            <div class="titlebar-t">{{user}}:{{dirname}}</div>
        </section>
        <section class="terminal-b">
            <div class="terminal-h">
                <div class="terminal-alert terminal-alert-primary">
                    Welcome to kyleh.io's cli. Your first command is inputed for you, just hit Enter.
                </div>
                <div
                    v-for="item in history" :key="item.id">
                    {{user}}:{{dirname}}$ {{item.command}}
                    <div v-if="item.type === ItemTypes.Help"><Help></Help></div>
                    <div v-if="item.type === ItemTypes.Bio"><Bio></Bio></div>
                    <div v-if="item.type === ItemTypes.Links"><Links></Links></div>
                    <div v-if="item.type === ItemTypes.Error"><Error></Error></div>
                    <div v-if="item.type === ItemTypes.Quit">
                        <div v-bind="quit()" class="terminal-alert terminal-alert-primary">
                            Thanks for trying out the cli! I'll redirect you to the main page in 5s
                        </div>
                    </div>
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

    interface IHistoryRecord {
        id: number,
        type: string,
        data?: any,
        command: string
    };

    enum ItemTypes {
        Help="help",
        Bio="bio",
        Links="links",
        Error="error",
        Quit="quit"
    };

    const DEFAULT_CMD: string = 'kh --help';

    let HistoryRecords: IHistoryRecord[];
    let ParsedCommand: Array<string>;

    export default Vue.extend({
        name: 'Terminal',
        data () {
            return {
                history: HistoryRecords,
                dirname: '~/term',
                user: 'hi@kyleh.io',
                command: DEFAULT_CMD,
                parsed: ParsedCommand,
                ItemTypes: ItemTypes,
                countdown: 5
            };
        },
        created () {
            this.history = [];
        },
        mounted () {
            this.focusInput();
        },
        methods: {
            submit () {
                const container = this.$el.querySelector('.terminal-b');

                this.parsed = this.parse();

                this.history.push({
                    id: this.getId(),
                    type: this.getType(),
                    command: this.getCmd()
                });

                setTimeout(() => {
                    if(container) {
                        container.scrollTop = container.scrollHeight;
                    }
                });

                this.clear();
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
                        return this.ItemTypes.Help;
                    case '--bio':
                    case '-b':
                        return this.ItemTypes.Bio;
                    case '--links':
                    case '-l':
                        return this.ItemTypes.Links;
                    case '--quit':
                    case '-q':
                        return this.ItemTypes.Quit;
                    default:
                        return this.ItemTypes.Error;
                }
            },
            getCmd () {
                return this.command;
            },
            quit () {
                setTimeout(() => {
                    document.location.href = '/';
                }, 5000);
            }
        }
    });
</script>
<style lang="scss" scoped>
    .terminal {
        position: relative;
        height: 56vh;
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
           overflow: hidden;
           scrollbar-width: none;
           position: relative;
           padding: 8px;
           color: $dark-theme-text-light;

            ::-webkit-scrollbar {
                display: none;
            }

           .terminal-card, .terminal-alert {
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
