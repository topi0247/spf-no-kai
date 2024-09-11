export const Config = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
  API_V1_URL: process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1`
    : "",
};

export const Routes = {
  Login: "/",
  Top: "/top",
  MyPortfolio: "/myportfolio",
  ProfileEdit: "/edit",
  WebApps: "/myportfoilo/web_applications",
  WebApp: (id: string) => `/myportfoilo/web_applications/${id}`,
  TechArticles: "/myportfoilo/tech_articles",
  TechArticle: (id: string) => `/myportfoilo/tech_articles/${id}`,
  RunteqEvents: "/myportfoilo/runteq_events",
  RunteqEvent: (id: string) => `/myportfoilo/runteq_events/${id}`,
  NotFound: "/404",
};
