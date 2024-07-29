export type NavigationT = {
  bannerText: string;
  links: LinkT;
};

export type LinkT = {
  href: string;
  label: string;
  text: string;
};

export type UserT = {
  given_name: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
  sid: string;
};
