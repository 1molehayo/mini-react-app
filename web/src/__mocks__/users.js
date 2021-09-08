const usersResponse = {
  data: [
    {
      type: "lock",
      attributes: {
        name: "Home",
        power_source: "alkaline_battery",
        connected_at: "2019-04-10T08:02:36Z",
        firmware_version: "5.01.181217.1",
        serial_number: "AC000W001635336",
        programming_code: "2806",
        state: "locked",
        model_number: "BG (LS-3i)",
      },
      id: "457dd414-9661-4aad-8cf4-3fbd1aea2653",
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(usersResponse),
};
