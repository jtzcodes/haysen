import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  icon?: string
  color?: string
  image?: string
  category: string
  content: string
  readingTime: string
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = matterResult.content.split(/\s+/g).length
    const readingTime = `${Math.ceil(wordCount / 200)} min de lectura`

    // Combine the data with the id
    return {
      slug,
      readingTime,
      content: matterResult.content,
      ...(matterResult.data as { title: string; date: string; excerpt: string; category: string; icon?: string; color?: string; image?: string }),
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostData(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  const wordCount = matterResult.content.split(/\s+/g).length
  const readingTime = `${Math.ceil(wordCount / 200)} min de lectura`

  return {
    slug,
    content: matterResult.content,
    readingTime,
    ...(matterResult.data as { title: string; date: string; excerpt: string; category: string; icon?: string; color?: string; image?: string }),
  }
}
