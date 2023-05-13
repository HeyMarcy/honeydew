import Link from 'next/link'
import '../globals.css'
import { getPages } from '@/sanity/sanity-utils'

export const metadata = {
    title: 'Iconic Archives presents David Gahr',
    description: 'David Gahr photographer',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pages = await getPages()
    console.log('pages', pages)
    return (
        <html lang="en">
            <body className="max-w-3xl mx-auto py-10">
                <header className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-large font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent py20"
                    >
                        Iconic Archives
                    </Link>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        {pages.map((page) => (
                            <Link
                                key={page._id}
                                href={`/${page.slug}`}
                                className="hover:underline"
                            >
                                {page.title}
                            </Link>
                        ))}
                    </div>
                </header>
                <main className="py-20">{children}</main>
            </body>
        </html>
    )
}
