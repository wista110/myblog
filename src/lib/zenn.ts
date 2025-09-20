// Zenn RSS を取得解析するヘルパー
// 参考: https://zenn.dev/dfuji (RSS: /feed)
import Parser from "rss-parser"

export type ZennArticle = {
  title: string
  link: string
  isoDate?: string
}

const RSS_URL = "https://zenn.dev/dfuji/feed"

export async function fetchZennArticles(limit: number = 5): Promise<ZennArticle[]> {
  try {
    const parser: Parser = new Parser()
    const feed = await parser.parseURL(RSS_URL)
    const items = (feed.items ?? []).slice(0, limit)
    return items.map((it) => ({
      title: it.title ?? "Untitled",
      link: it.link ?? "#",
      isoDate: it.isoDate,
    }))
  } catch {
    return []
  }
}
