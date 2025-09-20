import { fetchZennArticles } from '@/lib/zenn'

export default async function Blog() {
  const items = await fetchZennArticles(5)
  return (
    <section id='blog' className='px-4 py-12 sm:py-16'>
      <h2 className='text-2xl sm:text-3xl font-semibold'>Blog (Zenn)</h2>
      <ul className='mt-6 space-y-3'>
        {items.length === 0 && (
          <li className='text-gray-500'>まだ記事がありません。</li>
        )}
        {items.map((a, i) => (
          <li key={i}>
            <a href={a.link} target='_blank' rel='noreferrer' className='text-blue-600 hover:underline'>
              {a.title}
            </a>
            {a.isoDate && <span className='ml-2 text-xs text-gray-400'>{new Date(a.isoDate).toLocaleDateString()}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
