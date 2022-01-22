import { Prisma } from "@prisma/client"

export const ustensils: Prisma.UstensilCreateInput[] = [
    {
        name: "Knife",
        description: "Used to chop things, basically. Pro tip: do not use it on humans",
    },
    {
        name: "Pan",
        description: "Hot piece of metal you can shake to throw your crepes and stick them to the roof",
    },
    {
        name: "Blender",
        description: "Tool thats goes 'vroom vroom' and chop things",
    },
    {
        name: "Rolling ping",
        description: "Used to roll all kind of pasta or to threaten your noisy ass neighbor"
    },

]