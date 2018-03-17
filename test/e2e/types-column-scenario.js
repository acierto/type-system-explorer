import {Selector} from 'testcafe';

fixture `Types Column`
    .page `http://localhost:2222/`;

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

test('Should be able search types', async t => {
    await t
        .typeText('.TypeList---search input', 'aws')
        .expect(Selector('.ItemsCount---message').innerText).eql('Found 70 type(s)');
});