export const renderChatMessageHTML = (message: ChatMessage<"base" | any>, html: HTMLElement, context: any) => {
    if (!message.speaker.actor && !message.speaker.token) {
        $(html).attr('data-type', 'ooc');
    }
    // @ts-ignore
    else if (message.type === 'action' || message.type === 'check' || message.rolls.length > 0) {
        $(html).attr('data-type', 'roll');
    } else if ((message.content?.match(/data-roll/g) ?? []).length >= game.tc.inlineRollThreshold) {
        // if message.content contains the string 'data-roll' >= the inlineRollThreshold
        $(html).attr('data-type', 'roll');
    } else if ((message.content?.match(/item-card/g) ?? []).length >= 1) {
        // If message is a PF1 item card roll
        $(html).attr('data-type', 'roll');
    } else {
        $(html).attr('data-type', 'chat');
    }
};
