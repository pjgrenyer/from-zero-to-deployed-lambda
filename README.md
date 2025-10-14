# Code change 1 - all in one

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

# Code change 2 - github actions

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

# Code Change 3 - http call

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



