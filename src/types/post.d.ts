interface Post {
  id: number
  type: string
  attributes: PostAttributes
}

interface PostAttributes {
  content: string,
  updated_at: Date
}