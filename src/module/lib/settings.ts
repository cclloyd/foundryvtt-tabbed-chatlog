import { modLogger } from '#tc/module/lib/logger';
import { ns } from '#tc/module/lib/config';
import { localize } from '#tc/module/lib/util';

export function registerSettings() {
    modLogger.log('Registering settings');
    if (!game.settings) {
        modLogger.warn('Game settings not initialized yet.  Skipping module setting initialization.');
        return;
    }

    game.settings.register(ns, 'inlineRollThreshold', {
        name: localize('tc.settings.label.inlineRollThreshold'),
        hint: localize('tc.settings.hint.inlineRollThreshold'),
        scope: 'world',
        config: true,
        type: Number,
        default: 3,
    });

    game.settings.register(ns, 'scrollToBottom', {
        name: localize('tc.settings.label.scrollToBottom'),
        hint: localize('tc.settings.hint.scrollToBottom'),
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
    });

}
