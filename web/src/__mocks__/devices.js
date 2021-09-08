export const devicesResponse = {
  data: [
    {
      type: "access_guest",
      attributes: {
        name: "Ines Walter",
        email: "example@email.com",
        phone: null,
        pin: "8248",
        status: "current",
        starts_at: "2019-07-22T20:58:22",
        ends_at: "2019-07-29T20:58:22",
        device_time_zone: "America/Denver",
      },
      id: "1c65eb9c-0981-424b-a46e-9103a07f47f6",
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(devicesResponse),
};
