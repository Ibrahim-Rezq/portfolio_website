declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production"
    MAIL?: string
    MAIL_PASS?: string
    NEXT_PUBLIC_SERVE_URL?: string
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN?: string
    NEXT_PUBLIC_CONTENTFUL_SPACE?: string
  }
}
