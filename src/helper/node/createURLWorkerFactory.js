import {WorkerClass} from '\0rollup-plugin-web-worker-loader::helper::node::WorkerClass';

export function createURLWorkerFactory(url) {
    return function WorkerFactory(options) {
        return new WorkerClass((options.loadPath || '') + url, options);
    };
}
