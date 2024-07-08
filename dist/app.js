"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const routes_1 = require("./presentation/routes");
const server_1 = require("./presentation/server");
(() => {
    main();
})();
function main() {
    const server = new server_1.Server({
        port: envs_1.envs.PORT,
        public_path: envs_1.envs.PUBLIC_PATH,
        routes: routes_1.AppRoutes.routes,
    });
    server.start();
}
