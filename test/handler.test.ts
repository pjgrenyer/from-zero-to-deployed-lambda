import { handler } from '../src/index';

describe('Handler Test', () => {
    it.skip('should return input text and reversed text', async () => {
        const event = { text: 'Hello, World!' };
        expect(await handler(event)).toEqual({
            body: {
                text: 'Hello, World!',
                output: '!dlroW ,olleH',
            },
        });
    });
});
