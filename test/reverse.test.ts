import { reverse } from '../src/reverse';

describe('Reverse Test', () => {
    it('should reverse string', () => {
        expect(reverse('Reverse me!')).toEqual('!em esreveR');
    });
});
