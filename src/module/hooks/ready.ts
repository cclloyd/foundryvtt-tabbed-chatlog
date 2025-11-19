import { modLogger } from '#cth/module/lib/logger';
import { registerSettings } from '#cth/module/lib/settings';
import { localize } from '#cth/module/lib/util';

export const ready = () => {
    modLogger.log(localize('cth.log.ready'));

    // Register custom module settings
    registerSettings();

    game.cth.init();
};
