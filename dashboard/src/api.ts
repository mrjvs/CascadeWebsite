// returns servers with title and member count.
export function getServers(): string {
    // TODO: get graphql server to make this.
    return 'oof, didnt code this yet';
}

// returns all server data from id.
export function getServerData(id: number): object {
    // TODO: get graphql server to make this.
    return {id};
}

// returns if autheticated and user if authenticated.
export function isAuthenticated(): boolean {
    // TODO: make auth system with tokens and discord.
    return false;
}

export const auth: object = {
    isAuthenticated,
};

export const cascade: object = {
    getServers,
    getServerData,
};
