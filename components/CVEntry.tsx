import { type ReactNode } from "react";

type CVEntryProps = {
  title: string;
  employer: string;
  date: string;
  children?: ReactNode;
};

export default function CVEntry(props: CVEntryProps) {
  return (
    <div>
      <h3>
        {props.title}, {props.employer}
        ({props.date})
      </h3>
      {props.children}
    </div>
  );
}