const Register = artifacts.require('Register.sol');

contract('Register', () => {

    let contract = null;
    before(async () => {
         contract = await Register.deployed();
    });

    it('Should update data', async() => {
        const storage = await Register.new();
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        await storage.save(address);
        const value = await storage.get(address);
        console.log(`address: ${value}`);
        assert(value);
    });

    it('Should update', async() => {
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        const tx = await contract.save(address);
        console.log(tx);
        assert.notEqual(tx, null);
    });

    it('Should get', async() => {
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        const value = await contract.get(address);
        assert(value);
    });
});