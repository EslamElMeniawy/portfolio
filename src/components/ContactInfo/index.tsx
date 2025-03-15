import * as React from "react";

import GithubButton from "./GithubButton";
import LinkedinButton from "./LinkedinButton";
import MailButton from "./MailButton";
import MobileButton from "./MobileButton";
import { Props } from "./types";

export default React.memo((props: Props) => {
  const { data } = props;

  return data ? (
    <>
      <MailButton data={data} />
      <MobileButton data={data} />
      <GithubButton data={data} />
      <LinkedinButton data={data} />
    </>
  ) : null;
});
