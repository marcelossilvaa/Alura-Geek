interface LinkProps {
  title: string
  link: string
}

export function Link({ title, link }: LinkProps) {
  return (
    <a className="font-medium" href={link}>
      {title}
    </a>
  )
}
