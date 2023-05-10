import { getProject } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project'
import { PortableText } from '@portabletext/react'

type Props = {
    params: {
        project: string
    }
}

export default async function Project({ params }: Props) {
    const slug = params.project

    const project = await getProject(slug)
    return (
        <div>
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl">
                    {project.name}
                </h1>
                <a
                    href={project.url}
                    title="View Project"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View
                </a>
            </header>
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content} />
            </div>
        </div>
    )
}
