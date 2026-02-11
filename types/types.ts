

interface UserPost  { 
    name: string;
    username: string;
    avatar_url: string;
    created_at: string;
}

export interface Post  {
    content: string;
    user: UserPost
    created_at: string;
}

