"use client"

import LinkCard from "@/components/LinkCard"
import { ProjectConnectionQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

export default function ProjectListPageComponent(props: {
  data: ProjectConnectionQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)
  const projectList = data.projectConnection.edges
  if (!projectList) {
    return
  }
  return (
    <>
      <h3>프로젝트</h3>
      <p className="text-lg text-zinc-500">활동을 기록합니다.</p>
      <div className="mx-auto grid  grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {projectList
            .filter((_: any, i: number) => i % 3 === 0)
            .map((project: any) => (
              <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
                img={project.node.project_image}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectList
            .filter((_: any, i: number) => i % 3 === 1)
            .map((project: any) => (
              <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
                img={project.node.project_image}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectList
            .filter((_: any, i: number) => i % 3 === 2)
            .map((project: any) => (
              <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
                img={project.node.project_image}
              />
            ))}
        </div>
      </div>
    </>
  )
}
