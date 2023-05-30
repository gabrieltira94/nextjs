import { normalizeSlug } from "app/_utils/string.utils";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const goal = params.goal;

  return {
    title: `Your |${normalizeSlug(goal)}| goal`,
  };
}

interface Props {
  params: {
    goal: string;
  };
}

export default function Goal(props: Props) {
  const { params: { goal } } = props;

  return (
    <>
      <h2>Goal page for `{normalizeSlug(goal)}`</h2>
    </>
  );
}
