import { modLogger } from '#tc/module/lib/logger';
import { preloadTemplates } from '#tc/module/lib/preloadTemplates';
import { TabbedChatlogManager } from '#tc/module/lib/manager/manager';

export const initModule = () => {
    modLogger.log('Initializing Tabbed Chatlog');

    // Preload Handlebars templates
    preloadTemplates().then();

    game.tc = new TabbedChatlogManager();
};
