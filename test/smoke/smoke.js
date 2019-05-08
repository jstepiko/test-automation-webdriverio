import { assert } from 'chai';

describe('Login', function () {

    describe('Page Level', function () {

        it('Works', function () {
            browser.url('/');
            $('#email').setValue('testreacttest@gmail.com');
            $('#pass').setValue('testTest');
            $('#login').click();
            let newBug = $('#new_bug');
            newBug.waitForDisplayed(2000);
            assert.equal(newBug.isDisplayed(), true);

        })

    });

});
