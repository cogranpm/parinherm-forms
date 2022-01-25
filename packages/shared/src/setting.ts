export interface Setting {
    printSettings(): string;
}

export class SettingsLoader implements Setting {
    printSettings(): string {
        return "database is here?"
    }
}
