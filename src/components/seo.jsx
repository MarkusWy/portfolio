import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, linkedInUsername, noIndex = false } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    linkedInUsername,
  }
  //@todo properly fill in the linkedin fields
  return (
    <>
      <title>{seo.title}</title>
      { noIndex &&
        <meta name="robots" content="noindex, nofollow" />
      }
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="linkedIn:card" content="summary_large_image" />
      <meta name="linkedIn:title" content={seo.title} />
      <meta name="linkedIn:url" content={seo.url} />
      <meta name="linkedIn:description" content={seo.description} />
      <meta name="linkedIn:image" content={seo.image} />
      <meta name="linkedIn:creator" content={seo.linkedInUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}

export default Seo;