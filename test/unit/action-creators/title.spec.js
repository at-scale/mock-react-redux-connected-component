import actions from '../../../src/actions';
import {expect} from 'code';
import {generateRandomTitle} from '../../../src/action-creators/title';

describe('Given the Title Actions', () => {
    it('should generate a random title', () => {
        const actualAction = generateRandomTitle();

        expect(actualAction.type).equal(actions.GENERATE_RANDOM_TITLE);
        expect(actualAction.title).string();
    });
});
