import { ns } from './config.js';

export async function preloadTemplates() {
    const templatePaths: string[] = [
        'tabs.hbs',
        'styles.hbs',
    ];
    return foundry.applications.handlebars.loadTemplates(templatePaths.map((t) => `modules/${ns}/templates/${t}`));
}
