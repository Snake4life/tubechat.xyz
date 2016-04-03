module.exports = {
    servers: {
        one: {
            host: "13.92.131.114",
            username: "mupx",
            password: "@Binhminh2"
        }
    },

    meteor: {
        name: 'tubechat',
        path: '/home/nxcong/Projects/tubechat.xyz/',
        servers: {
            one: {
                host: "13.92.131.114",
                username: "mupx",
                password: "@Binhminh2"
            }
        },
        env: {
            PORT: 80,
            ROOT_URL: "http://tubechat.xyz",
            MONGO_URL : "mongodb://gnocxn:123456978@ds028679.mlab.com:28679/tubechat"
        },
        deployCheckWaitTime: 60 //default 10
    },

   /* mongo: { //optional
        oplog: true,
        port: 27017,
        servers: {
            one: {},
        },
    },*/
};