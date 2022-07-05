import readmeio from 'readmeio';

readmeio.metrics(
  'README_IO_TOKEN',
  () => ({
    apiKey: 'key',
    email: 'mail@domain.com',
    label: 'Label',
  }),
  {
    development: false,
  }
);
