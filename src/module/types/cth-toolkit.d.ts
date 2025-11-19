// src/module/types/cth-toolkit.d.ts
import type { CTHManager } from '#cth/module/lib/manager';

declare global {
    // Extend each game phase in fvtt-types
    interface UninitializedGame {
        readyCheck: CTHManager;
    }

    interface InitGame {
        readyCheck: CTHManager;
    }

    interface I18nInitGame {
        readyCheck: CTHManager;
    }

    interface SetupGame {
        readyCheck: CTHManager;
    }

    interface ReadyGame {
        readyCheck: CTHManager;
    }

    namespace ClientSettings {
        interface Values {
            'cth-toolkit': {
                [key: string]: unknown;
            };
        }
    }

    // Add namespace-specific overloads instead of generic ones.
    // This avoids the conflict with the "core" overloads in fvtt-types.
    interface ClientSettings {
        get(namespace: 'cth-toolkit', key: string): unknown;
        set(namespace: 'cth-toolkit', key: string, value: unknown): Promise<unknown>;
        register(namespace: 'cth-toolkit', key: string, data: any): void;
    }
}

export {};
