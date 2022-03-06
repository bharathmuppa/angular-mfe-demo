// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    microfrontends: {
        myTeams: {
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            remoteName: 'myTeams',
            exposedModule: ['TeamsModule'],
        },
        layout: {
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'layout',
            exposedModule: ['Header', 'Footer', 'LayoutModule'],
        }
    }
};
