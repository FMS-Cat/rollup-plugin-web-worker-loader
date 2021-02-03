export function createURLWorkerFactory(url) {
    return function WorkerFactory(options) {
        return new Worker((options.loadPath || '') + url, options);
    };
}
