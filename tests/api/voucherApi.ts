import { homeUrl } from '../../lib/Main';
import { incorrectVoucher,  incorrectVoucherMessage} from '../../lib/apiConfig';
const supertest = require('supertest');

const app = homeUrl;
const request = supertest(app);

describe('API Test - Voucher', () => {
    it('Should type incorrect voucher and verify response', async () => {
        const response = await request
          .get(`zakupy/kuponajax2.cgi?nr=${incorrectVoucher}&efv=1`)
        expect(response.status).toBe(200);
        expect(response.body.text).toEqual(incorrectVoucherMessage)
      });
})
