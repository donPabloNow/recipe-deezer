module.exports = Franz => Franz;

module.exports = (Franz) =>
  class Deezer extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          },
          requestFilters: {
            urls: ['*://*/*'],
          }
        }
      ]
    }
  };
