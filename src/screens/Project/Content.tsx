import { ListEmptyComponent, ScrollContainer } from "@src/components";
import * as React from "react";
import { useTranslation } from "react-i18next";

import Description from "./Description";
import Info from "./Info";
import Screenshots from "./Screenshots";
import { ProjectProps } from "./types";

export default React.memo((props: ProjectProps) => {
  const { project } = props;

  const { t: translate } = useTranslation();

  return (
    <ScrollContainer>
      {project ? (
        <>
          <Info {...props} />
          <Description {...props} />
          <Screenshots {...props} />
        </>
      ) : (
        <ListEmptyComponent
          data={translate("project")}
          isLoadingError={false}
        />
      )}
    </ScrollContainer>
  );
});
