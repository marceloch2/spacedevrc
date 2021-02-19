/**
 * @param  {string} endpoint
 * @returns Promise
 */
const spaceDevFetchService = async (url: string): Promise<any> => {
  let finalUrl = `https://ll.thespacedevs.com/2.0.0/${url}/`;
  console.log(
    '🚀 ~ file: spacedevService.ts ~ line 7 ~ spaceDevFetchService ~ finalUrl',
    finalUrl,
  );

  const spacedevFetch = await fetch(finalUrl);

  if (!spacedevFetch.ok) {
    throw new Error(
      `Failed getting ${url} with status: ${spacedevFetch.status}`,
    );
  }

  const res = await spacedevFetch.json();

  return res.results;
};

export default spaceDevFetchService;
