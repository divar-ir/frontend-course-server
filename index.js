const fastify = require('fastify')({
    ignoreTrailingSlash: true,
});
const widgets = require('./widgets');
const fullWidgets = require('./full-widgets');
const prefix = '/api/v1';

fastify.get(`${prefix}/widgets`, () => {
    return widgets;
});

fastify.get(`${prefix}/widgets/actions`, () => {
    return fullWidgets;
});

// Run the server!
const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000);
        console.log(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();
