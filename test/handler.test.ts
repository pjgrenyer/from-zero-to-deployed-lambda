import { handler } from '../src/index';

describe.skip('Handler Test', () => {
    it('should return input text and reversed text', async () => {
        const event = { text: 'Hello, World!' };
        expect(await handler(event)).toEqual({
            body: {
                text: 'Hello, World!',
                output: '!dlroW ,olleH',
            },
        });
    });

    it('should return input text and reversed text for http request', async () => {
        const event = { body: JSON.stringify({ text: 'Hello, World!' }) };
        expect(await handler(event)).toEqual({
            body: {
                text: 'Hello, World!',
                output: '!dlroW ,olleH',
            },
        });
    });
});
