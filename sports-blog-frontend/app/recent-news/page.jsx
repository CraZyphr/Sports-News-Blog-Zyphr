
import React from 'react';
import InfoBlock from '../_components/InfoBlock';
import { fetchDataFromStrapi, processInfoBlocks, processRecentBlocks, processRecentHighlightBlocks } from '@/utils/strapi.utils';
import RecentNews from '../_components/RecentNews';
import RecentTrending from '../_components/Blog/RecentTrending';

export default async function Home() {

//  hero section of trending page
  const recentData = await fetchDataFromStrapi("newsblocks-new?populate=deep");
  const recentBlockData = processRecentBlocks(recentData);
  // Render only the first three items from heroBlockData
  const recentDataToRender = recentBlockData.length > 2 ? recentBlockData.slice(0, 3) : [];

  // highlight section of trending page
  const recenthighlightData = await fetchDataFromStrapi("news-highlightblocks-new?populate=deep");
  const recenthighlightBlockData = processRecentHighlightBlocks(recenthighlightData);
  // Render only the first three items from highlightBlockData
  const recenthighlightDataToRender = recenthighlightBlockData.length > 2 ? recenthighlightBlockData.slice(0, 8) : [];


const data=await fetchDataFromStrapi("infoblocks-trending-new?populate=deep")
const infoBlockData=processInfoBlocks(data)


  return (
    <div>
      <RecentNews recentData={recentDataToRender} />
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
      <RecentTrending recenthighlightData={recenthighlightDataToRender}/>
    </div>
  );
}
export const revalidate=300