 const supertest = require('supertest');

const app = 'https://api.megarabat.eu:5000';
const request = supertest(app);

describe('API', () => {
    it('gets the projects endpoint', async () => {
        const response = await request
          .get('/vouchers')
        expect(response.status).toBe(200);
      });

      it("Verify voucher", async () => {
          let numberOfVoucher = 0;
          let numberOfWithourCode = 0;
        const response = await request
            .get('/vouchers')
            expect(response.status).toBe(200)
            response.body.map(res => {
                if(res.code.length >= 0){ numberOfVoucher++}
                if(res.code.length < 1) {numberOfWithourCode++} 
            })
            expect(numberOfVoucher).toBe(numberOfWithourCode)
            
      })
})
