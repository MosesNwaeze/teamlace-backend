const fetchSingleController = require("./test-files/fetch-single");

const mockRequest = (productId) => ({
   params: { productId } ,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test(`On successful request should return a status code of 200 and json payload`, async () => {
   const req = mockRequest();
   const res = mockResponse();
   await fetchSingleController(req,res);
   expect(res.status).toHaveBeenCalledWith(200);
   expect(res.json).toHaveBeenCalledWith({status:"success"});
});
