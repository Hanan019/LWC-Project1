import { createElement } from 'lwc';
import ChildComponentForApiDecorator from 'c/childComponentForApiDecorator';

describe('c-child-component-for-api-decorator', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-child-component-for-api-decorator', {
            is: ChildComponentForApiDecorator
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});