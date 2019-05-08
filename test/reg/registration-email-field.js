import assert from 'assert';
let maxLenght = 45;

describe('Registration', function () {

    describe('Email field', function () {

        it('Placeholder text', function () {
            browser.url('/');
            $('#registration').click();
            let text = $('#email').getAttribute('placeholder');
            assert.equal(text, 'Email *');
        });

        it('Placeholder font color', function () {
            let text =  $('#email').shadow$('div#placeholder');
                //$('input#email.form-control').getCSSProperty('border-bottom-color');
            console.log(text.getText());
            //assert.equal(text, '#6c757d');
        });
/*
        it('Max Characters', function () {
            let input = $('#email');
            input.addValue('j'.repeat(maxLenght));
            let actual = input.getValue().length;
            input.clearValue();
            assert.equal(actual, maxLenght);
        });

        it('Max Characters + 1', function () {
            let input = $('#email');
            input.addValue('j'.repeat(maxLenght + 1));
            let actual = input.getValue().length;
            assert.equal(actual, maxLenght);
        });

        it('Font size', function () {
            let text = $('#email').getCSSProperty('font-size').value;
            assert.equal(text, '16px');
        });

        it('Font weight', function () {
            let text = $('#email').getCSSProperty('font-weight').value;
            console.log(text);
            assert.equal(text, '400');
        });

        it('Font family', function () {
            let text = $('#email').getCSSProperty('font-family').value;
            console.log(text);
            assert.equal(text, 'segoe ui');
        });

        it('Font color', function () {
            let text = $('#email').getCSSProperty('color').parsed.hex;
            console.log(text);
            assert.equal(text, '#495057');
        });

        it('Box shadow', function () {
            let text = $('#email').getCSSProperty('box-shadow').parsed.hex;
            console.log(text);
            assert.equal(text, '#007bff');
        });
*/
    });

});