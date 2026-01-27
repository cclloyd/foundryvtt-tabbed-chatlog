import { ns } from '#tc/module/lib/config';

export class TabbedChatlogManager {
    static identifier = `module.${ns}`;
    inlineRollThreshold = 3;
    scrollToBottom = true;
    chatLog: any = undefined;
    initialized = false;

    constructor() {}

    init() {
        // @ts-ignore
        this.inlineRollThreshold = Number(game.settings.get(ns, 'inlineRollThreshold') ?? 3);
        this.scrollToBottom = game.settings.get(ns, 'scrollToBottom') ?? true;
        this.initialized = true;
    }
}
