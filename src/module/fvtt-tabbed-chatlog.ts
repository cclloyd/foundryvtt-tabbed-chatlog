import { initModule } from '#tc/module/hooks/init';
import { ready } from '#tc/module/hooks/ready';
import { renderChatMessageHTML } from '#tc/module/hooks/renderChatMessageHTML';
import { renderChatInput } from '#tc/module/hooks/renderChatInput';

// Initialize module
Hooks.once('init', initModule);
// Hooks.once('i18nInit', initLocalization);
Hooks.once('ready', ready);

Hooks.on('renderChatMessageHTML', renderChatMessageHTML);
Hooks.on('renderChatInput', renderChatInput);
