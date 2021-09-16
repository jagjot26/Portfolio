import { WorkStack } from "../../data/stack";
import React, { Fragment, memo } from "react";
import HeaderText from "../HeaderText";
import SubHeader from "../SubHeader";
import StackList from "../StackList";
import BaseBottomSheet, { BaseBottomSheetProps } from "./Base";
import { personal, Personal } from "../../data/personalDetails";
import { Project } from "../../data/projects";
import Screenshots from "../Screenshots";

interface ProjectBottomSheetProps extends BaseBottomSheetProps {
  activeProject: Project;
}

function ProjectBottomSheet(
  props: ProjectBottomSheetProps
): React.ReactElement {
  const { open, onDismiss } = props;

  const {
    title,
    banner,
    description,
    repository,
    stack,
    screenshots,
    deployment,
  } = props.activeProject;

  const about = (
    <Fragment>
      <span>{personal.about}</span>
      <p className="mt-4">
        <HeaderText classes="px-2" text="Resume" bgColor="bg-purple-100" />
      </p>
    </Fragment>
  );

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader title={title} description={description} />
      <StackList stackList={stack} />
      <Screenshots screenshots={screenshots} />
    </BaseBottomSheet>
  );
}

export default memo(ProjectBottomSheet);
