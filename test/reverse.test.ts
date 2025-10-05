import { reverse } from '../src/reverse';

describe('Reverse Test', () => {
    it('should revedrse string', () => {
        expect(reverse("Reverse me!")).toEqual("!em esreveR");
    });
});
