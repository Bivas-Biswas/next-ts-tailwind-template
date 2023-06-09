import Head from 'next/head'
import { DefaultSeo, DefaultSeoProps, NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'

const common = {
  title: 'Next TS Tailwind Template',
  longTitle: 'next-ts-tailwind-template',
  desc: '',
  logo: '',
  banner: '',
  link: ''
} as const

const seoConfig: DefaultSeoProps = {
  defaultTitle: common.longTitle,
  description: common.desc,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: common.logo
    }
  ],
  openGraph: {
    url: common.link,
    title: common.longTitle,
    description: common.desc,
    site_name: common.title,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: common.logo,
        width: 512,
        height: 512,
        alt: 'Logo',
        type: 'image/png'
      },
      {
        url: common.banner,
        width: 1920,
        height: 1080,
        alt: 'Banner',
        type: 'image/svg'
      }
    ]
  },
  twitter: {
    site: common.link,
    handle: '',
    cardType: 'summary'
  }
}

const HeadManager = (props: NextSeoProps) => {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        {/* <link rel="icon" href="/favicon.svg" /> */}
        <title>{common.title}</title>
      </Head>
      <DefaultSeo {...seoConfig} />
      <NextSeo {...props} />
    </>
  )
}

export default HeadManager
