// import { SigninSchema, SignupSchema } from '@workspace/common/types';
import { prisma } from '@workspace/db/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import { JWT_SECRET } from '@workspace/backend-common/config';
import { SignInSchema, SignUpSchema } from '@workspace/common/types';
import jwt from 'jsonwebtoken'

export const UserSignUp = async (req: Request, res: Response) => {
    try {
        const result = SignUpSchema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json(result.error.format());
        } else {
            const user = await prisma.user.findFirst({
                where: {
                    OR: [
                        { username: req.body.username },
                        { email: req.body.email },
                    ],
                }
            })
            if (user) {
                res.status(409).json({ message: "User Already Exists!" })
                return;
            }
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            await prisma.user.create({
                data: {
                    username: req.body.username,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hashedPassword,
                }
            })
            res.status(201).json({ message: "Signup Successfully!" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
export const UserSignIn = async (req: Request, res: Response) => {
    try {
        const result = SignInSchema.safeParse(req.body);
        if (!result.success) {
            res.send(result.error.format());
        } else {
            const user = await prisma.user.findFirst({ where: { username: req.body.username } })
            var token = jwt.sign({ id: user?.id }, JWT_SECRET, { expiresIn: "1h" })
            if (!user) {
                res.status(404).json({ message: "User Doesn't Exists!" })
                return;
            }
            const isCompared = await bcrypt.compare(req.body.password, user.password)
            if (!isCompared) {
                res.status(401).json({ message: "Invalid Credentials!" });
            } else {
                res.status(200).json({ token });
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}