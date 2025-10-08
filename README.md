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

# Code Change 3

import { reverse } from './reverse';
import { HttpRequest, toBody } from './to-body';

interface Body {
    text: string;
}

export const handler = async (event: Body | HttpRequest) => {
    console.log(event);

    const body = toBody<Body>(event);

    const response = {
        body: {
            text: body.text,
            output: reverse(body.text),
        },
    };
    return response;
};



