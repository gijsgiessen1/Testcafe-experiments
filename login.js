import { Selector} from 'testcafe';
import { Role } from 'testcafe';
import { adminLogin } from './helper';









//test('My first test', async t => {

export async function login (t){
 await t
 .useRole(adminLogin)

};


// If pulled from github, the login information is ignored by git. If wanting to use this file one should write their own user Role.