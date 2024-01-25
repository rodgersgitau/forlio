import BaseLayout from "@/components/layouts/base-layout";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <BaseLayout>{children}</BaseLayout>;
}
