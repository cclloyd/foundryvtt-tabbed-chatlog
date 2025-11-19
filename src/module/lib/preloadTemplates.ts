import { ns } from './config.js';

export async function preloadTemplates() {
    const templatePaths: string[] = [
        'dialogs/newToken.hbs',
    ];
    return foundry.applications.handlebars.loadTemplates(templatePaths.map((t) => `modules/${ns}/templates/${t}`));
}
