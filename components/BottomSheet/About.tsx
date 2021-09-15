import { WorkStack } from "../../data/stack";
import React, { Fragment, memo } from "react";
import HeaderText from "../HeaderText";
import SubHeader from "../SubHeader";
import StackList from "../StackList";
import BaseBottomSheet, { BaseBottomSheetProps } from "./Base";
import { personal, Personal } from "../../data/personalDetails";

interface AboutBottomSheetProps extends BaseBottomSheetProps {}

function AboutBottomSheet(props: AboutBottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

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
      <SubHeader title="About" description={about} />
      <StackList />
    </BaseBottomSheet>
  );
}

export default memo(AboutBottomSheet);
