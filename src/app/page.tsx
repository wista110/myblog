import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto">
      <Hero />
      <About />
      <Projects />
      {/* Blog �̓r���h���� Zenn RSS ���擾���܂� */}
      {/* �L������ł��\���͌p�����܂� */}
      {/* ��ŃX�^�C����A�j���[�V�������������܂� */}
      {/* once. �̕��͋C�ɍ��킹�Ēi�K�I�ɒ��� */}
      {/* Mobile-first �Ń^�C�|��]���𒲐� */}
      <Blog />
      <Contact />
    </main>
  )
}
