import { createElement } from 'lwc';
import ParentComponentForApiDecorator from 'c/parentComponentForApiDecorator';

describe('c-parent-component-for-api-decorator', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-parent-component-for-api-decorator', {
            is: ParentComponentForApiDecorator
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});