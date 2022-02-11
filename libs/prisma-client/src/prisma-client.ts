// create a single client to handle whole app
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()