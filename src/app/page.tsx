import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto">
      <Hero />
      <About />
      <Projects />
      {/* Blog はビルド時に Zenn RSS を取得します */}
      {/* 記事が空でも表示は継続します */}
      {/* 後でスタイルやアニメーションを強化します */}
      {/* once. の雰囲気に合わせて段階的に調整 */}
      {/* Mobile-first でタイポや余白を調整 */}
      <Blog />
      <Contact />
    </main>
  )
}
