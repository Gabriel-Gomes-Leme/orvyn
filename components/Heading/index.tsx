type HeadingProps ={
    children: React.ReactNode,
    type: 'h1' | 'h2' | 'h3' | 'h4',
    className?: string;
}
export function Heading({
  children,
  type: Tag = "h2",
  className = "",
}: HeadingProps) {
  return (
    <Tag className={`${className} my-3`}>
      {children}
    </Tag>
  );
}
