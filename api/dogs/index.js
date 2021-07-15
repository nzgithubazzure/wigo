module.exports = async function (context, req) {
    context.log('Sent list of dogs');

    const dogs = [
        { name: 'Azure' },
        { name: 'Sammy' },
        { name: 'Roscoe' },
    ];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { dogs: dogs },
        header: { 'Content-Type': 'application/json' }
    };
}