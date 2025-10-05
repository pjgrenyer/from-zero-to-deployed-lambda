# Code change 1

export const handler = async (event: { text: string }) => {
    console.log(event);
    const response = {
        body: {
            text: event.text,
            output: event.text
        },
    };
    return response;
};

