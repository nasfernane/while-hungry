import { Prisma } from "@prisma/client"

export const users: Prisma.UserCreateInput[] = [
    {
        nickname: 'Gwen',
        email: 'gwen@seed.com',
        password: '$2b$10$k17nOFwCgO38m.7NB5o.1OjJaKQuPRgg63BvQgmtPh7wh.qgR6ksu',
        profile: {
            create: {
                bio: 'Well known for being a top EU vicuna'
            }
        },
        role: "Admin",
        posts: {
            create: [
                {
                    title: 'A post about organic hummus',
                    content: 'Lets face it : hummus is pretty good',
                    published: true,

                },
            ],
        },
    },
    {
        nickname: 'Furimi',
        email: 'furimi@seed.com',
        password: '$2b$10$k17nOFwCgO38m.7NB5o.1OjJaKQuPRgg63BvQgmtPh7wh.qgR6ksu',
        posts: {
            create: [
                {
                    title: 'A post about humans',
                    content: 'How to find servile humans thats feed you salmon every day',
                    published: false,
                    postComments: {
                        create: [
                            {
                                comment: "Humans are adorable !",
                                authorId: 1,
                            },
                            {
                                comment: "Where do you find the cheapest humans on the market ?",
                                authorId: 1,
                            },
                        ]
                    }
                }
            ]
        },
        profile: {
            create: {
                bio: 'Driven by her passions for naps and being petted'
            }

        }
    },
    {
        nickname: 'Nassim',
        email: 'nassim@seed.com',
        password: '$2b$10$k17nOFwCgO38m.7NB5o.1OjJaKQuPRgg63BvQgmtPh7wh.qgR6ksu',
        role: 'Creator',
        posts: {
            create: [
                {
                    title: 'A post about about parsnips',
                    content: 'THose weird looking vegetables are full of surprises',
                    published: true,
                    postComments: {
                        create: [
                            {
                                comment: "If it bleeds, i can kill it",
                                authorId: 2,
                            },
                            {
                                comment: "Would you have a good recipe for thoses weirdos ?",
                                authorId: 1,
                            },
                        ]
                    }
                }
            ]
        },
        profile: {
            create: {
                bio: 'Driven by her passions for naps and being petted'
            }

        }
    }
]