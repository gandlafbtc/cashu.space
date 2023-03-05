import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const resources = [
  {
    href: '/resources/media',
    name: 'Cashu in the Media',
    description: 'Listen to Podcasts and read Articles about Cashu and Chaumian ecash.',
  },
  {
    href: '/projects',
    name: 'Explore Projects',
    description:
      'Explore the different Open Source Cashu apps that have been built so far.',
  },
  {
    href: '/protocol',
    name: 'Cashu Protocol',
    description: 'Go deeper into how the Cashu protocol works.',
  },
]

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <div key={resource.href}>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
              {resource.name}
            </h3>
            <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
              {resource.description}
            </p>
            <p className="mt-4">
              <Button href={resource.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
