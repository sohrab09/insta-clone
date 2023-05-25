import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/328666553_724689402401065_5668862451541808429_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFMkWqsm6POgc7JpAkpRL2H8kGcYhAzll_yQZxiEDOWX_mLCSwGRUcnNkHqxXtmQgjswL-m92_OKt0WXJUGjIsd&_nc_ohc=SPFgpYSZugoAX_YBT6_&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCdOX_plM8tRHNLcYjsHLDl6EHA9Sd0UXZ0shgNwFv_Vg&oe=64728D68",
        user: USERS[0].user,
        likes: 7807,
        caption: "Amazing view! This is my first post!",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: "commenter1",
                comment: "Beautiful picture!"
            },
            {
                user: "commenter2",
                comment: "I wish I could be there!"
            }
        ]
    },
    {
        imageUrl: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/344434126_522809486538872_7310906959096919229_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGu1L73IHtWoJxZ8fdXjk-aiBdylFgJ-9qIF3KUWAn72nn-UoXYy8BD1Q-T97iOgyySieod9L-8WflQlkkq8iYA&_nc_ohc=ZxFHAyLc9UIAX-BOksg&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAmMnWsaEZUVSx10Gyf3HN9ShGa4M1C-rQ2sCBLD3SxJA&oe=64731865",
        user: USERS[1].user,
        likes: 35,
        caption: "Sunset vibes",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: "commenter3",
                comment: "Stunning colors!"
            },
            {
                user: "commenter4",
                comment: "Where was this taken?"
            }
        ]
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        user: USERS[2].user,
        likes: 72,
        caption: "Exploring the city",
        profile_picture: USERS[2].image,
        comments: [
            {
                user: "commenter5",
                comment: "Looks like a fun day!"
            },
            {
                user: "commenter6",
                comment: "I love the architecture!"
            }
        ]
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3552&q=80",
        user: USERS[3].user,
        likes: 91,
        caption: "Chasing waterfalls",
        profile_picture: USERS[3].image,
        comments: [
            {
                user: "commenter7",
                comment: "This is breathtaking!"
            },
            {
                user: "commenter8",
                comment: "I need to visit this place!"
            }
        ]
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        user: USERS[4].user,
        likes: 19,
        caption: "Morning coffee",
        profile_picture: USERS[4].image,
        comments: [
            {
                user: "commenter9",
                comment: "That latte art is amazing!"
            },
            {
                user: "commenter10",
                comment: "I love starting my day with coffee!"
            }
        ]
    }
]


