import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import Video from '../components/Video'
import CustomImage from '../components/CustomImage'

type FileTree = {
    tree: [{ path: string }]
}

export async function getPostByName(filename: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/Rashy-hub/blogpost-davegray/main/${filename}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

    if (!res.ok) return undefined
    const rawMDX = await res.text()
    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX<{
        title: string
        date: string
        tags: string[]
        image: string
    }>({
        source: rawMDX,

        components: {
            Video,
            CustomImage,
        },

        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypePrettyCode,
                    rehypeSlug,
                    [
                        rehypeAutolinkHeadings,
                        {
                            behavior: 'wrap',
                        },
                    ],
                ],
            },
        },
    })
    const id = filename.replace(/\.mdx$/, '')
    const blogObject: BlogPost = {
        meta: {
            id,
            title: frontmatter.title,
            date: frontmatter.date,
            tags: frontmatter.tags,
            image: frontmatter.image,
        },
        content,
    }

    return blogObject
}
export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/Rashy-Hub/blogpost-davegray/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

    if (!res.ok) return undefined
    const JsonTrees: FileTree = await res.json()

    const fileNames = JsonTrees.tree
        .map((file) => {
            return file.path
        })
        .filter((path) => path.endsWith('.mdx'))
    const metaData: Meta[] = []
    for (const filename of fileNames) {
        const post = await getPostByName(filename)
        if (post) {
            const { meta } = post
            metaData.push(meta)
        }
    }

    return metaData
}
