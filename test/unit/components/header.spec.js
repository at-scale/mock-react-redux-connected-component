import Chance from 'chance';
import Header from '../../../src/components/header';
import {MockReactHeaderComponent} from '@at-scale/mock-react-components';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <Header/> component', () => {
    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    const requiredProps = () => {
        return {
            handleHeaderClick: sandbox.stub(),
            title: chance.string()
        };
    };

    const render = (props = requiredProps()) => {
        return shallow(<Header {...props}/>);
    };

    it('should be a header', () => {
        const component = render();

        expect(component.type()).equal('div');
        expect(component.props().className).equal('header');
    });

    it('should have <MockReactHeaderComponent/>', () => {
        const props = requiredProps();
        const component = render(props);

        expect(component.contains(<MockReactHeaderComponent title={props.title}/>)).true();
    });

    it('should have a button to generate a random title', () => {
        const props = requiredProps();
        const button = render(props).find('button');

        button.simulate('click');
        sinon.assert.calledOnce(props.handleHeaderClick);

        expect(button.text()).equal('Generate RandomTitle');
    });
});
