const env = require('env.json');

export const environment = {
    PUSHER_APP_ID: env.development.PUSHER_APP_ID,
    PUSHER_APP_KEY: env.development.PUSHER_APP_KEY,
    PUSHER_APP_SECRET: env.development.PUSHER_APP_SECRET,
    PUSHER_HOST: env.development.PUSHER_HOST,
    PUSHER_PORT: env.development.PUSHER_PORT,
    PUSHER_SCHEME: env.development.PUSHER_SCHEME,
    PUSHER_APP_CLUSTER: env.development.PUSHER_APP_CLUSTER
}