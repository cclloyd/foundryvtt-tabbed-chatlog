import { ns } from '#tc/module/lib/config';

export const renderChatInput = async (app: any, elements: any, context: any) => {
    const content = $(app.element);
    const existing = $(app.element).find('#tabbed-chat-wrapper');
    // const styles = await foundry.applications.handlebars.renderTemplate(`modules/${ns}/templates/styles.hbs`, {});
    const markup = await foundry.applications.handlebars.renderTemplate(`modules/${ns}/templates/tabs.hbs`, {});

    if (existing.length === 0) {
        game.tc.chatLog = app;
        // $('head').append(styles);
        content.prepend(markup);
        $('#chat .chat-log').attr('data-chattab', 'chat');
    }
};
