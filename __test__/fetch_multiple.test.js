const fetchMultiple = require("./test-files/fetch-multiple");
const data = require("./test-files/test_data")
const mockRequest = () => ({});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
test("fetchMultiple should return a status of 200 and a data payload", async () => {
  const req = mockRequest();
  const res = mockResponse();
  await fetchMultiple(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    status: "success",
    data,
  });
});
