import site from './site.json';

// Single source of truth for brand/contact details. Edit site.json to change them everywhere.
export const SITE = {
  ...site,
  url: `https://${site.domain}`,
  appUrl: `https://app.${site.domain}`,
  loginUrl: `https://${site.domain}/members/login`,
  phoneHref: `tel:${site.phone.replace(/[^\d+]/g, '')}`,
  emailHref: `mailto:${site.email}`,
};
