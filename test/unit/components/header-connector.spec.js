import * as actions from '../../../src/action-creators/title';
import Chance from 'chance';
import Header from '../../../src/components/header';
import HeaderConnector from '../../../src/components/header-connector';
import React from 'react';
import {expect} from 'code';
import {mockReduxStore} from '../../utils';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <Header/> connector', () => {
    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    const requiredProps = () => ({
        title: chance.string()
    });

    const render = (props = requiredProps()) => {
        const mockStore = mockReduxStore(props);

        return shallow(<HeaderConnector store={mockStore}/>);
    };

    beforeEach(() => {
        sandbox.stub(actions, 'generateRandomTitle');
    });

    afterEach(() => sandbox.restore());

    it('should be connecting the right component', () => {
        const props = requiredProps();

        const component = render(props);

        expect(component.type()).equal(Header);
        expect(component.props().title).equal(props.title);
    });

    it('should add an action to generate a random title', () => {
        const component = render();

        component.props().handleHeaderClick();

        sinon.assert.calledOnce(actions.generateRandomTitle);
    });
});
