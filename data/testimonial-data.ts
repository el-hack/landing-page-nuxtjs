export type TestimonialSectionType = {
    user:{
        name: string
        role: string
        alt: string
        avatar: string
    }
    message: string
}

export const testimonials: TestimonialSectionType[] = [
    {
        message: "Our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions",
        user: {
            name: "Cham",
            role: "Product designer",
            alt: "avatar",
            avatar: "/images/avatar-1.png"
        }
    },
    {
        message: "We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured",
        user: {
            name: "Scopic Software",
            role: "Custom IT Solutions Firm",
            alt: "avatar",
            avatar: "/images/avatar-2.png"
        }
    },
    {
        message: "It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.",
        user: {
            name: "Russell Lee",
            role: "Writer",
            alt: "avatar",
            avatar: "/images/avatar-3.png"
        }
    },
    {
        message: "At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.",
        user: {
            name: "Solace Engineers Inc.",
            role: "Engineering Firm",
            alt: "avatar",
            avatar: "/images/avatar-4.png"
        }
    }
]