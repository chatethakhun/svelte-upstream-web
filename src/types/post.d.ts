interface Post {
  id: number
  type: string
  attributes: PostAttributes
  meta: PostMeta
  relationships: PostRelations
}

interface PostAttributes {
  content: string,
  updated_at: Date
}

interface PostMeta {
  comment_count: number,
  like_count: number,
}

interface PostRelations {
  user: {
    id: number
  },
  tags: Tag
}