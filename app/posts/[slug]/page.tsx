import { PostPageComponent } from "@/components/app/posts/post-page"
import { Button } from "@/components/ui/button"
import client from "@/tina/__generated__/client"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries
    .post({
      relativePath: `${params.slug}.mdx`,
    })
    .then((result) => result)
    .catch((err) => {
      console.error(err)
      return notFound()
    })

  return <PostPageComponent {...result} />
}
