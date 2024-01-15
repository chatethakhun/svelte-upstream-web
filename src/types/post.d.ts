interface Post {
  meta: PostMeta,
  id:number,
  content:string,
  tags: Tag[],
  created_at: DateTime,
  updated_at: DateTime,
  creator: User
}

interface PostMeta {
  comment_count: number,
  like_count: number,
}
