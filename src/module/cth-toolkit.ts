import { initModule } from '#cth/module/hooks/init';
import { ready } from '#cth/module/hooks/ready';
import { renderChatInput } from '#cth/module/hooks/renderChatInput';
import { combatRound } from '#cth/module/hooks/combatRound';
import { renderPlayers } from '#cth/module/hooks/renderPlayers';

// Initialize module
Hooks.once('init', initModule);
// Hooks.once('i18nInit', initLocalization);
Hooks.once('ready', ready);

// @ts-ignore
Hooks.on('renderChatInput', renderChatInput);
// @ts-ignore
Hooks.on('combatRound', combatRound);

Hooks.on('renderPlayers', renderPlayers);
