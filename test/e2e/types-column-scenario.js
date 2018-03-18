import {Selector} from 'testcafe';
import {pluginPort} from '../../gulp/utils/config';

fixture `Types Column`
    .page `http://localhost:${pluginPort}/`;

const findItems = Selector(() => document.querySelectorAll('.TypeList---type-row span'));

test('Initial rendering of type column', async t => {
    await t
        .expect(Selector('.TypeList---type-column-title').innerText).eql('Types');
    await t
        .expect(Selector('.ItemsCount---message').innerText).eql('Found 741 type(s)');
    await t
        .expect(findItems.nth(0).innerText).eql('aws.Cloud');
    await t
        .expect(findItems.nth(1).innerText).eql('aws.ec2.Cloud');
});

test('Should be able to search types', async t => {
    await t
        .typeText('.TypeList---search input', 'aws')
        .expect(Selector('.ItemsCount---message').innerText).eql('Found 70 type(s)');

    await t
        .click('.AdvancedSearchModal---filter-icon')
        .expect(Selector('.modal-title').innerText).eql('Advanced Search Modal')
        .typeText('[placeholder="Select interfaces"]', 'template.udm.Container')
        .pressKey('enter')
        .click('.apply-search-criteria')
        .expect(Selector('.ItemsCount---message').innerText).eql('Found 2 type(s)');

    await Selector('.AdvancedSearchModal---applied-advanced-filter-icon').with({ visibilityCheck: true })();
});