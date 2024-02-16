const { query } = require("@/lib/db");

export const getUserByUsername = async (username) => {
  const usernameSearchResult = await query({
    query: `
            SELECT * FROM users WHERE  username = ?;
        `,
    values: [username],
  });

  return usernameSearchResult;
};
export const getUserById = async (id) => {
  const usernameSearchResult = await query({
    query: `
            SELECT * FROM users WHERE  id = ?;
        `,
    values: [id],
  });

  return usernameSearchResult;
};
