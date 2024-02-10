import { Screen } from "@src/components";
import { useGetProjectsApi } from "@src/core";
import { RootStackScreenProps } from "@src/navigation";
import * as React from "react";

import Content from "./Content";
import Header from "./Header";

export default React.memo((props: RootStackScreenProps<"Project">) => {
  const { route } = props;
  const { params } = route;
  const { project: projectId } = params ?? {};

  const { data: allPages, isLoading } = useGetProjectsApi();

  const projectsList = allPages?.pages
    ?.map((page) => (page.data ? page.data : []))
    ?.flat();

  const project = projectsList?.find((proj) => proj.id === projectId);

  return (
    <Screen>
      <Header project={project} />
      <Content isLoading={isLoading} project={project} />
    </Screen>
  );
});
