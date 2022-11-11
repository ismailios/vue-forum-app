export type Thread = {
    contributors?: string[]
    firstPostId: string
    forumId: string
    lastPostAt: number
    lastPostId: string
    posts: string[]
    publishedAt: number
    slug: string
    title: string
    userId: string
    id: string
}

export type Category = {
    forums: string[]
    name: string
    slug: string,
    id: string
}

export type Forum = {
    categoryId: string
    description: string
    lastPostId?: string
    name: string
    slug: string
    threads?: string[],
    id: string
}

type Edited = {
    at: number,
    by: string,
    moderated: boolean
}

export type Post = {
    edited?: Edited,
    publishedAt: number
    text: string
    userId: string
    id: string
    threadId?: string
}

export type Stat = {
    postsCount: number
    threadsCount: number
    usersCount: number,
    usersOnline: number
}

export type User = {
    avatar: string
    bio?: string
    email: string
    lastVisitAt: number
    name: string
    registeredAt: number
    username: string
    usernameLower: string
    website?: string
    twitter?: string
    isModerator?: boolean,
    id: string
    postsCount?: number,
    threadsCount?: number,
    threads?: string[]
}

export type StoreShape = {
    threads: Thread[]
    forums: Forum[]
    categories: Category[]
    users: User[]
    posts: Post[]
    authId: string
}