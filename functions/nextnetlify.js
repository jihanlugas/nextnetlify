exports.handler = async () => {
    console.log('function run')

    const data = {
        name: 'Jihan Lugas',
        age: 24,
        job: 'None'
    }

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}