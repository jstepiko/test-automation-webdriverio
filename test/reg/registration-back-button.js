import assert from 'assert';

describe('Registration', function () {

    describe('Back Button', function () {

        it('Get text', function () {
            browser.url('/');
            $('#registration').click();
            let text = $('#back').getText();
            assert.equal(text, '< Back');
        });

        it('Get button aligning', function () {
            let aligning = $('#back').getCSSProperty('align-items').value;
            assert.equal(aligning, 'flex-start');
        });

        it('Get button font size', function () {
            let fontSize = $('#back').getCSSProperty('font-size').value;
            assert.equal(fontSize, '16px');
        });

        it('Get button font weight', function () {
            let fontWeight = $('#back').getCSSProperty('font-weight').value;
            assert.equal(fontWeight, '400');
        });

        it('Get button font family', function () {
            let fontFamily = $('#back').getCSSProperty('font-family').value;
            assert.equal(fontFamily, 'segoe ui');
        });

        it('Get button font color', function () {
            let fontColor = $('#back').getCSSProperty('color').parsed.hex;
            assert.equal(fontColor, '#ffffff');
        });

        it('Get button color', function () {
            let color = $('#back').getCSSProperty('background-color').parsed.hex;
            assert.equal(color, '#17a2b8');
        });

        it('Get button hover color', function () {
            $('#back').moveTo();
            browser.pause(2000);
            let hoverColor = $('#back').getCSSProperty('background-color').parsed.hex;
            console.log(hoverColor);
            assert.equal(hoverColor, '#138496');
        });

    });
});