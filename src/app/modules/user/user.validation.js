import { z } from "zod";

export const signupValidation = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required"
        }),
        email: z.string({
            required_error: "Email is required"
        }),
        phone: z.string({
            required_error: "Phone is required"
        }),
        password: z.string({
            required_error: "Password is required"
        }),
        profileImg: z.string({
            required_error: "Profile image is required"
        })
    })
})

export const loginValidation = z.object({
    body: z.object({
        email: z.string({
            required_error: "Email is required"
        }),
        password: z.string({
            required_error: "Password is required"
        })
    })
})

export const updateUser = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        password: z.string().optional(),
        profileImg: z.string().optional()
    }),
})