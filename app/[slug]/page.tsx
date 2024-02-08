import { PageComponent } from "@/components/app/page"
import { Button } from "@/components/ui/button"
import client from "@/tina/__generated__/client"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries
    .page({
      relativePath: `${params.slug}.mdx`,
    })
    .then((result) => result)
    .catch((err) => {
      console.error(err)
      return notFound()
    })

  return <PageComponent {...result} />
}
