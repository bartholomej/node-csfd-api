export const parseIdFromUrl = (url: string): number => {
  const idSlug = url.split('/')[2];
  const id = idSlug.split('-')[0];
  return +id;
};
