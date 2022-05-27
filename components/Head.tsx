import React from "react";
import Head from "next/head";

export interface HTMLHeadProps {
  title: string
  description?: string
  keywords?: string
  children?: React.ReactNode
}

const HTMLHead: React.FC<HTMLHeadProps> = ({
  title, 
  description = 'Signage App With Next JS', 
  keywords = 'Signage, Media, Commercial, Advertise, Advertisement',
  children
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {children}
  </Head>
)

export default HTMLHead