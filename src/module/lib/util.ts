
export const localize = (key: string) => {
    if (!game.i18n) return key;
    return game.i18n.localize(key);
};
