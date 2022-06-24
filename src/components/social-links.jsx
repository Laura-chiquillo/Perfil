import React from 'react'
import classnames from 'clsx'

const SOCIAL_LINKS = [
  {
    name: `Facebook`,
    url: `https://www.facebook.com/profile.php?id=100007151804821`,
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M5 3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2H19c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5zm0 2h14l.002 14h-4.588v-3.965h2.365l.352-2.724H14.43v-1.737c0-.788.22-1.32 1.35-1.32h1.427V6.822a20.013 20.013 0 00-2.092-.103c-2.074 0-3.494 1.266-3.494 3.59v2.005H9.277v2.725h2.344V19H5V5z"></path>
  </svg>`,
  },
  {
    name: `linkedin`,
    url: `http://www.linkedin.com/in/Lchiquillo`,
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.083"
    height="24"
    version="1.1"
    viewBox="0 0 144.083 144"
    xmlSpace="preserve"
  >
    <path d="M72.041 11.166c-33.543 0-60.833 27.29-60.833 60.834 0 33.545 27.29 60.834 60.833 60.834 33.544 0 60.835-27.289 60.835-60.834-.001-33.544-27.292-60.834-60.835-60.834zm0 115.668c-30.235 0-54.833-24.598-54.833-54.834 0-30.235 24.598-54.834 54.833-54.834S126.876 41.765 126.876 72c-.001 30.236-24.6 54.834-54.835 54.834z"></path>
    <path d="M41.143 59.11H55.221000000000004V95.844H41.143z"></path>
    <ellipse cx="48.042" cy="46.75" rx="7.125" ry="6.5"></ellipse>
    <path d="M90.608 58.28c-2.883 0-5.326.525-7.334 1.574-2.006 1.05-3.988 2.796-5.949 5.24V59.11h-13.11v36.734h14.078V78.203c0-3.344.531-5.66 1.592-6.952 1.061-1.291 2.443-1.937 4.15-1.937 1.545 0 2.744.479 3.598 1.436.854.957 1.279 2.588 1.279 4.895v20.199h14.148V72.497c0-4.843-1.102-8.423-3.305-10.741-2.2-2.318-5.251-3.476-9.147-3.476z"></path>
  </svg>`,

  },
  {
    name: `github`,
    url: `https://github.com/Laura-chiquillo`,
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z"></path>
  </svg>`,
  },
]

export function SocialLinks({ className }) {
  return (
    <ul className={classnames('list-reset', className)}>
      {SOCIAL_LINKS.map((link) => (
        <SocialLinkItem key={link.name} link={link} />
      ))}
    </ul>
  )
}

export function SocialLinkItem({ link }) {
  const { name, url, svg } = link

  return (
    <li className="ml-4">
      <a href={url}>
        <span className="sr-only">{name}</span>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </a>
    </li>
  )
}
