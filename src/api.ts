const RESOURCE_API_URL = import.meta.env.VITE_API_BASE_URL + "/api";
const ENDPOINT_SECURE = "/secure";

export const getMoreFromServer = async (accessToken: string) => {
  const response = await fetch(RESOURCE_API_URL + ENDPOINT_SECURE, {
    headers: [["Authorization", "Bearer " + accessToken]],
  });
  return response.text();
};
