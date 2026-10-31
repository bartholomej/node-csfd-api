export interface CSFDUser {
  id: number;
  /** Nickname */
  user: string;
  userRealName: string | null;
  avatar: string | null;
  url: string;
  /** City, region and country as written on the profile */
  location: string | null;
  /** The short line under the name */
  about: string | null;
  /** YYYY-MM-DD */
  memberSince: string | null;
  ratingsCount: number | null;
  reviewsCount: number | null;
  /** People who added the user to their favourites */
  fans: number | null;
  points: number | null;
}
