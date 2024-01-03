
import React from 'react';
import InfoBlock from '../_components/InfoBlock';
import { fetchDataFromStrapi, processInfoBlocks, processTrendingBlocks, processTrendingHighlightBlocks } from '@/utils/strapi.utils';
import TrendingNews from '../_components/TrendingNews';
import TrendingHighlight from '../_components/Blog/TrendingHighlight';
import Link from 'next/link';

export default async function Home() {

//  hero section of trending page
  const trendingData = await fetchDataFromStrapi("trendingblocks-new?populate=deep");
  const trendingBlockData = processTrendingBlocks(trendingData);
  // Render only the first three items from heroBlockData
  const trendingDataToRender = trendingBlockData.length > 2 ? trendingBlockData.slice(0, 3) : [];

  // highlight section of trending page
  const trendinghighlightData = await fetchDataFromStrapi("trending-highlightblocks-new?populate=deep");
  const trendinghighlightBlockData = processTrendingHighlightBlocks(trendinghighlightData);
  
  // Render only the first three items from highlightBlockData
  const trendinghighlightDataToRender = trendinghighlightBlockData.length > 2 ? trendinghighlightBlockData.slice(0, 8) : [];

const data=await fetchDataFromStrapi("infoblocks-trending-new?populate=deep")
const infoBlockData=processInfoBlocks(data)


  return (
    
    <div>
      <TrendingNews trendingData={trendingDataToRender} />
      <h1 style={{
   width: '90%',
  maxWidth: '1240px',
   margin: '0 auto',
   padding: '20px 4px',
   fontFamily: "system-ui"
 }}>NEWS</h1>
  {infoBlockData.map((data)=>
        <InfoBlock key={data.id} data={data} />
      )}
      <TrendingHighlight trendinghighlightData={trendinghighlightDataToRender}/>
    </div>
   
  );
}
export const revalidate=300