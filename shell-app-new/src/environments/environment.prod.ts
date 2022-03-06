export const environment = {
  production: true,
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
