import {Selector} from 'testcafe';

fixture `Types Column`
    .page `http://localhost:2222/`;

const findItems = Selector(() => document.querySelectorAll('.TypeList---type-row_0 span'));

test('Options have to be sorted', async t => {

    await t
        .expect(findItems.nth(0).innerText).eql('aws.Cloud');
    await t
        .expect(findItems.nth(1).innerText).eql('aws.ec2.Cloud');
});