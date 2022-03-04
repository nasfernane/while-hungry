import { Prisma } from "@prisma/client"

export const users: Prisma.UserCreateInput[] = [
    {
        nickname: 'Gwen',
        email: 'gwen@seed.com',
        password: '$2b$10$k17nOFwCgO38m.7NB5o.1OjJaKQuPRgg63BvQgmtPh7wh.qgR6ksu',
        bio: 'Well known for being a top EU vicuna',
        role: "Admin",
        avatar: "avatar2",
        posts: {
            create: [
                {
                    title: 'A post about organic hummus',
                    picture :'/posts/hummus.jpg',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id felis et lorem tempor tincidunt. Pellentesque velit purus, fermentum sed ante in, maximus convallis tellus. Fusce ac nisi et elit finibus bibendum. Ut hendrerit ornare arcu, id finibus felis molestie sed. Sed nec lorem at ipsum sodales ultricies. In euismod egestas commodo. Donec maximus et justo eu convallis. Nam finibus consequat pulvinar. Vivamus ut ex augue. Duis venenatis placerat nibh, sed aliquet ex malesuada nec. Aenean quis orci leo. Donec ac odio et nibh efficitur hendrerit. Vivamus odio dolor, egestas non ornare sit amet, auctor id sem. Vestibulum arcu sapien, posuere ac consectetur vitae, gravida id nisi. Praesent justo orci, placerat eu magna sit amet, vestibulum posuere felis.

                    Vestibulum lacinia augue sed nisl tincidunt, eget sagittis urna accumsan. Proin eu ornare risus. Donec efficitur justo at imperdiet semper. Vivamus tempor velit vitae dignissim tincidunt. Nulla dapibus nisi elit, eu feugiat nisi dignissim a. Mauris ullamcorper posuere magna et auctor. Cras at gravida purus.
                    
                    Nullam efficitur ligula ac odio placerat placerat. Pellentesque metus est, ultrices vitae dolor quis, dapibus lacinia ipsum. Pellentesque laoreet est vitae lorem laoreet iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce imperdiet sem nec felis vulputate, sed suscipit nibh malesuada. Morbi lacinia egestas lorem, a sodales ipsum bibendum rhoncus. Mauris vulputate ut tortor nec semper. Quisque iaculis, libero sed lacinia venenatis, lacus augue dignissim felis, sed dignissim lorem dui eu lacus.`,
                    published: true,

                },
            ],
        },
    },
    {
        nickname: 'Furimi',
        email: 'furimi@seed.com',
        password: '$2b$10$k17nOFwCgO38m.7NB5o.1OjJaKQuPRgg63BvQgmtPh7wh.qgR6ksu',
        bio: 'Driven by her passions for naps and being petted',
        avatar: "avatar3",
        posts: {
            create: [
                {
                    title: 'A post about humans',
                    picture :'/posts/humans.jpg',
                    content: `Ut porta quam at massa iaculis placerat. Vestibulum suscipit porta hendrerit. Suspendisse non dapibus tellus. Nulla mollis diam vel lectus pretium volutpat. Fusce commodo luctus consequat. Aenean ac elementum arcu. Aliquam quis tortor sollicitudin, ullamcorper risus at, mattis lectus. Etiam scelerisque turpis et consequat rutrum. Duis arcu nibh, sodales eget bibendum eget, gravida bibendum tellus. Vivamus sem nisl, condimentum eget tellus vel, porta pellentesque lacus. Phasellus vel luctus libero.

                    Phasellus vel eros volutpat mauris aliquam varius et sit amet quam. Etiam dictum ante mi. Donec quis lobortis orci. Proin at magna laoreet, viverra enim ut, cursus ligula. Morbi posuere, diam quis cursus dignissim, orci justo feugiat lacus, nec accumsan mauris mauris eget diam. In a lorem non est mollis euismod volutpat et est. Aenean a ultrices ligula, nec ornare quam. Vestibulum nunc erat, sagittis sed egestas et, elementum tempus neque. Praesent gravida dolor eros, sed pellentesque lorem viverra eget. Nunc ultrices nisl metus, at lacinia nisl eleifend ac. Sed eleifend augue sit amet lorem varius, nec commodo sem imperdiet. Quisque viverra arcu rhoncus, fermentum metus nec, sodales sapien. Curabitur convallis cursus velit, non ultricies lectus rhoncus sed. Aliquam lacinia tempus orci, eu congue ligula porta volutpat. Proin rhoncus tincidunt eleifend. Mauris posuere ligula quam, at scelerisque ipsum pretium at.
                    
                    Donec consequat lobortis orci, sit amet tincidunt ipsum porta sed. Ut quis pulvinar diam, vitae semper lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sodales elit. Ut consequat risus odio, ac porta est molestie id. Cras congue magna erat, sit amet elementum urna convallis non. Sed volutpat ullamcorper sem, non aliquam lacus elementum non. Maecenas vestibulum est et laoreet pellentesque.`,
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
        }
    },
    {
        nickname: 'Nassim',
        email: 'nassim@seed.com',
        password: '$2b$10$k17nOFwCgO38m.7NB5o.1OjJaKQuPRgg63BvQgmtPh7wh.qgR6ksu',
        role: 'Creator',
        avatar: "avatar5",
        bio: "Chops portobello mushrooms like a Samuraï",
        posts: {
            create: [
                {
                    title: 'A post about parsnips',
                    picture :'/posts/parsnips.jpg',
                    content: `Lorem ipsum nunc risus ligula, aliquet a arcu et, bibendum molestie odio. Curabitur sit amet nisl euismod, mattis ante nec, rhoncus arcu. Nullam vel efficitur nisl, sit amet mollis enim. In pulvinar condimentum dui, vitae tempus lorem lobortis in. Quisque ac nisi vitae est efficitur interdum a quis tortor. Suspendisse potenti. Proin pellentesque dictum velit, sit amet facilisis risus venenatis vitae. Nunc finibus condimentum quam, interdum pulvinar mauris dictum a. Proin facilisis neque non lorem maximus blandit. Aenean eu placerat erat, non dapibus arcu. Donec viverra nisi diam, ac rhoncus arcu auctor eget. Donec imperdiet porta volutpat. Sed egestas auctor finibus. Sed non nisi sit amet odio dignissim sagittis.

                    Cras auctor urna id ornare imperdiet. Phasellus sit amet lacinia dui. In dapibus mollis ligula, vel consectetur nunc iaculis vel. Maecenas mollis leo vel interdum aliquam. In elementum congue vestibulum. Vestibulum condimentum euismod nunc, placerat pulvinar nunc tincidunt nec. Sed eget molestie magna, congue fermentum sapien. Phasellus dapibus ligula arcu, eget posuere urna faucibus sed. Vestibulum sed purus at dolor mattis blandit. Pellentesque dictum dapibus est ut laoreet. Maecenas lobortis tincidunt dui nec convallis. Fusce imperdiet diam et ipsum imperdiet pellentesque. Nunc a ligula augue. Duis eget auctor elit. In ornare ante id sem pellentesque, a interdum dui blandit.
                    
                    Morbi id gravida ante. Nullam posuere mattis tincidunt. Vivamus vitae euismod nulla, vel sollicitudin turpis. Quisque in arcu mollis neque congue pellentesque in eu mauris. Etiam viverra sem elit, et commodo mauris faucibus ac. Proin in odio vitae dolor placerat luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque non nibh massa. Cras condimentum urna ut turpis ultricies, quis congue quam porttitor.`,
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
        }
    }
]