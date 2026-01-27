import { modLogger } from '#tc/module/lib/logger';
import { registerSettings } from '#tc/module/lib/settings';
import { localize } from '#tc/module/lib/util';

export const ready = () => {
    modLogger.log(localize('tc.log.ready'));

    // Register custom module settings
    registerSettings();

    game.tc.init();
};
