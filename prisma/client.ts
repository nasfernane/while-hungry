// create a single client to handle whole app
import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient()

export default prisma