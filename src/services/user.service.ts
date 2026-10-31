import { parse } from 'node-html-parser';
import { CSFDUser } from '../dto/user';
import { fetchPage } from '../fetchers';
import { extractId, normalizeUserId } from '../helpers/global.helper';
import {
  getUserAbout,
  getUserAvatar,
  getUserFanclub,
  getUserId,
  getUserLocation,
  getUserMemberSince,
  getUserNick,
  getUserProfileUrl,
  getUserRealName,
  getUserSectionCount
} from '../helpers/user.helper';
import { CSFDOptions } from '../types';
import { userProfileUrl } from '../vars';

export class UserScraper {
  public async user(user: string | number, options?: CSFDOptions): Promise<CSFDUser> {
    const userId = normalizeUserId(user);
    const url = userProfileUrl(userId, { language: options?.language });
    const response = await fetchPage(url, { ...options?.request });
    const html = parse(response);

    return {
      id: getUserId(html) ?? extractId(userId),
      user: getUserNick(html),
      userRealName: getUserRealName(html),
      avatar: getUserAvatar(html),
      url: (getUserProfileUrl(html) ?? url).replace(/(prehled|prehlad|overview)\/$/, ''),
      location: getUserLocation(html),
      about: getUserAbout(html),
      memberSince: getUserMemberSince(html),
      ratingsCount: getUserSectionCount(html, 'ratings'),
      reviewsCount: getUserSectionCount(html, 'reviews'),
      ...getUserFanclub(html)
    };
  }
}
