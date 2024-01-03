import React from 'react';
import HeroSection from './_components/HeroSection';
import InfoBlock from './_components/InfoBlock';
import { fetchDataFromStrapi, processHeroBlocks, processHighlightBlocks, processInfoBlocks } from '@/utils/strapi.utils';
import HighlightArticle from './_components/Blog/HighlightArticle';

export default async function Home() {

  const data = await fetchDataFromStrapi("infoblocks-home?populate=deep");
  const infoBlockData = processInfoBlocks(data);

  const heroData = await fetchDataFromStrapi("heroblocks-home?populate=deep");
  const heroBlockData = processHeroBlocks(heroData);
  // Render only the first three items from heroBlockData
  const heroDataToRender = heroBlockData.length > 2 ? heroBlockData.slice(0, 3) : [];

  const highlightData = await fetchDataFromStrapi("highlightblocks-home?populate=deep");
  const highlightBlockData = processHighlightBlocks(highlightData);
  // Render only the first three items from highlightBlockData
  const highlightDataToRender = highlightBlockData.length > 2 ? highlightBlockData.slice(0, 8) : [];

  return (
    <div>
      <HeroSection heroData={heroDataToRender} />
      <h1 style={{
        width: '90%',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '20px 4px',
        fontFamily: "system-ui"
      }}>MORE NEWS</h1>

      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
      <HighlightArticle highlightData={highlightDataToRender}/>
    </div>
  );
}

export const revalidate = 300;
