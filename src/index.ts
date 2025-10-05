export const handler = async (event: { text: string }) => {
    console.log(event);
    const response = {
        body: {
            text: event.text,
            output: event.text.split("").reverse().join("")
        },
    };
    return response;
};
