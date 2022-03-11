exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'Herypy',
            ages: 85,
            email: 'thesecon@gmail.com'
        })
    }
}