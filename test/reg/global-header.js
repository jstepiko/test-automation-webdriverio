import assert from 'assert';

describe('Global Header', function () {

    describe('General', function () {

        /*it('Global Header is on the top of the page', function () {
            browser.url('/');
            //let title = browser.getTitle();
            //assert.equal(title, 'Bug Tracker');
        })*/

        it('Header width', function () {
            browser.url('/');

            let cont = $('.container');
            let pageContainer = cont.getCSSProperty('width').parsed.value;
            let paddingLeft = cont.getCSSProperty('padding-left').parsed.value;
            let paddingRight = cont.getCSSProperty('padding-right').parsed.value;

            let pageWidth = pageContainer - paddingLeft - paddingRight;

            let headerWidth = $('.custom-header').getCSSProperty('width').value;
            assert.equal(headerWidth, pageWidth + 'px');
        })

        it('Icon format', function (){
            let text = $('span').getText();
            console.log(text);
            assert.equal(text, 'BugTracker');
        })

        it('Verify favicon', () => {
            browser.url('/favicon.ico');
            let icon = $('img');
            let width = icon.getCSSProperty('width').parsed.value;
            let height = icon.getCSSProperty('height').parsed.value;
            let size = `${width}x${height}`;
            assert.equal(size, '256x256');
        })

    });

});