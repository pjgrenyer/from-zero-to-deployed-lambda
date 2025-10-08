export const handler = async (event: { text: string }) => {
    console.log(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
    return response;
};
