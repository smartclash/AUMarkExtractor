import * as puppet from 'puppeteer';

export const getSecurityToken = async () => {
    const browser = await puppet.launch();
    const page = await browser.newPage();

    await page.goto('https://coe1.annauniv.edu/home/index.php');
    const cookies = await page.cookies();
    //@ts-ignore
    const securityImage = await page.evaluate(_ => document.getElementsByClassName('small')[0].src);

    await page.close();
    await browser.close();

    console.log({
        name: cookies[0].name,
        value: cookies[0].value,
        image: securityImage
    });

    return {
        name: cookies[0].name,
        value: cookies[0].value,
        image: securityImage
    };
}

export const login = async (number: string, dob: string, session: string, code: string) => {
    const browser = await puppet.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://coe1.annauniv.edu/home/index.php');
    await page.deleteCookie({ name: 'PHPSESSID' });
    await page.setCookie({
        name: 'PHPSESSID',
        value: session,
        domain: 'coe1.annauniv.edu',
        path: '/',
        expires: -1,
        httpOnly: false,
        secure: false,
        session: true
    });
    await page.type('input#register_no', number, { delay: 100 });
    await page.type('input#dob', dob, { delay: 100 });
    await page.type('input#security_code_student', code, { delay: 100 });
    await page.waitFor(5000);
    await page.click('form#login_stu input#gos');
}
