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

# Code change 2
import { reverse } from "./reverse";

export const handler = async (event: { text: string }) => {
    console.log(event);
    const response = {
        body: {
            text: event.text,
            output: reverse(event.text)
        },
    };
    return response;
};



