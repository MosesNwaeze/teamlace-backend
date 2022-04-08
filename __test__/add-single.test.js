const addProduct = require("./test-files/add-product");
const data = require("./test-files/test_data");

const mockRequest = (payload) => ({
  body: { payload },
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test("Addition of item into the collection", async () => {
  const req = mockRequest();
  const res = mockResponse();
  const initialLength = data.length;
  await addProduct(req, res);
  const finalLength = data.length;
  expect(finalLength).toBeGreaterThan(initialLength);
});
