type Project = {
  title: string
  description: string
  url?: string
  imageUrl?: string | null
}

const projects: Project[] = [
  { title: 'Project Alpha', description: '説明ダミー。', url: '#', imageUrl: null },
  { title: 'Project Beta', description: '説明ダミー。', url: '#', imageUrl: null },
  { title: 'Project Gamma', description: '説明ダミー。', url: '#', imageUrl: null },
]

export default function Projects() {
  return (
    <section id='projects' className='px-4 py-12 sm:py-16'>
      <h2 className='text-2xl sm:text-3xl font-semibold'>Projects</h2>
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((p, i) => (
          <a key={i} href={p.url} className='group block rounded-lg border border-gray-200 p-4 hover:shadow-sm transition'>
            <div className='aspect-video w-full rounded bg-gray-100 flex items-center justify-center text-gray-400'>
              {p.imageUrl ? (
                <img src={p.imageUrl} alt={p.title} className='h-full w-full object-cover rounded' />
              ) : (
                <span className='text-sm'>No Image</span>
              )}
            </div>
            <h3 className='mt-3 font-semibold group-hover:underline'>{p.title}</h3>
            <p className='mt-1 text-sm text-gray-600'>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
