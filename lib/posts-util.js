// File System
import fs from "fs"
// Path maker
import path from "path"
// Meta info from md and mdx files
import matter from "gray-matter"

// Create absolute path from current directory of the project + posts folder
const postsDirectory = path.join(process.cwd(), "posts")

/**
 * Get all posts inside the posts folder
 * @returns array of posts fileNames
 */
export function getPostsFiles() {
  const postsFiles = fs.readdirSync(postsDirectory)

  return postsFiles
}

/**
 * Get post data from one md file
 * @param {*} fileName
 * @returns javascript object with slug, all data and all metadata
 */
export function getPostData(fileName) {
  // Generate the slug removing md extension with regular expression from filename (if have)
  const postSlug = fileName.replace(/\.md$/, "") // Removes the file extension

  // Create path from postsDirectory + filename (with extension)
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  // Read syncronous file content (Sync = dont stop before finish reading file) making sure that is utf-8 encoded
  const fileContent = fs.readFileSync(filePath, "utf-8")

  // Get data (Metadata) and content from md file
  const { data, content } = matter(fileContent)

  /* READING TIME */
  // Calc reading time of text post
  const setReadingTime = (postText) => {
    // Call to function to return the total words on the post content
    const wordCount = getWordCount(postText)

    // Divide words / words/minute and round it
    return Math.ceil(wordCount / 200)
  }

  // Get word count from post content text
  const getWordCount = (postText) => {
    return postText.match(/\w+/g).length
  }

  // Calculate the reading time for the post
  const readingTime = setReadingTime(content)

  /* FORMAT DATE */
  // Format post date to spanish
  const dateNotFormatted = new Date(data.date)
  // New date format options
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  const formattedDate = dateNotFormatted.toLocaleDateString(
    "es-ES",
    dateOptions
  )

  // Create new object to return with slug, all metadata and content of the md file
  const postData = {
    slug: postSlug,
    formattedDate,
    readingTime,
    ...data,
    content,
  }

  // Return the object
  return postData
}

/**
 * Read info inside posts files
 * @returns sorted array of objects with all posts
 */
export function getAllPosts() {
  // Call to function to get all files inside posts directory
  const postFiles = getPostsFiles()

  // Map and return array of javascript objects from all files passing filename to getPostData function
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile)
  })

  // Sort all posts by post date
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  )

  // Return array of javascript objects with sorted posts by date
  return sortedPosts
}

/**
 * Get all featured posts filtered
 * @returns array of objects with featured posts
 */
export function getFeaturedPosts() {
  // Get all posts array of objects
  const allPosts = getAllPosts()

  // Filter all posts returning only featured
  const featuredPosts = allPosts.filter((post) => post.isFeatured)

  // Return array with featured posts
  return featuredPosts
}
