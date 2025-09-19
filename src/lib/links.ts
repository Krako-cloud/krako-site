/**
 * Canonical waitlist link (Bitly). We append UTM parameters per placement.
 * You can create more variants below if you want channel-specific links.
 */
const BASE_WL = 'https://bit.ly/krako2-waitlist';

/** Website (hero / nav) */
export const WAITLIST_URL =
  `${BASE_WL}?utm_source=website_nav&utm_medium=web&utm_campaign=krako2_poc&utm_content=hero`;

/** Token page CTA – using the same form for now (you can replace later) */
export const TOKEN_UPDATES_URL =
  `${BASE_WL}?utm_source=token_nav&utm_medium=web&utm_campaign=krako2_token&utm_content=token_cta`;

/** Optional: channel-specific variants you can paste into social posts */
export const WL_LINKS = {
  x_main:              `${BASE_WL}?utm_source=x_main&utm_medium=social&utm_campaign=krako2_poc&utm_content=cover`,
  linkedin_company:    `${BASE_WL}?utm_source=linkedin_company&utm_medium=social&utm_campaign=krako2_poc&utm_content=carousel`,
  telegram_global:     `${BASE_WL}?utm_source=telegram_global&utm_medium=community&utm_campaign=krako2_poc`,
  discord_announce:    `${BASE_WL}?utm_source=discord_announce&utm_medium=community&utm_campaign=krako2_poc`
};
