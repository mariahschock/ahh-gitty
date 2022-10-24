/* eslint-disable no-console */
const exchangeCodeForToken = async (code) => {
  console.log(`MOCK INVOKED: exchangeCodeForToken(${code})`);
  return `MOCK_TOKEN_FOR_CODE_${code}`;
};

const getGithubProfile = async (token) => {
  console.log(`MOCK INVOKED: exchangeCodeForToken(${token})`);
  return {
    login: 'git-this',
    avatar_url: 'https://www.placecage.com/gif/300/300',
    email: 'git-this@me.com',
  };
};

module.exports = { exchangeCodeForToken, getGithubProfile };
