export interface IConfig {
    client: {
        token: string;
    }
    db: {
        user: string;
        pass: string;
        host: string;
        port: number;
        dbName: string;
        userCollection: string;
        guildCollection: string;
        optionsCollection: string;
    }
    cooldownLengthMs: number;
    botOwnerId: string;
    defaultPrefix: string;
}