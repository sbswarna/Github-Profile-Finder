class Github {
    constructor() {
        this.clientID = 'f4c1f58649ac635cdbc1';
        this.clientSecret = '13b417a0a0b1ee1c04b90ad35b342d7712be2b67';
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clientID=${this.clientID}&clientSecret=${this.clientSecret}`)
        const repositoryResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}&clientID=${this.clientID}&clientSecret=${this.clientSecret}`)

        const profile = await profileResponse.json();
        const repositories = await repositoryResponse.json();

        return {
            profile,
            repositories
        }
    }
}