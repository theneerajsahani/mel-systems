import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { AspectRatio } from "@/components/ui/aspect-ratio"
  import Image from 'next/image'

export default function product_card() {
    return (
        <Card>
            <AspectRatio ratio={16 / 9}>`
                <Image src="" alt="Image" className="rounded-md object-cover" /> 
            </AspectRatio>`
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}