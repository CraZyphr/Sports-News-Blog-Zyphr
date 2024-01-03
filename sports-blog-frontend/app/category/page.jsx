import React from 'react';

import { fetchDataFromStrapi, processCategoryBlocks } from '@/utils/strapi.utils';
import Category from './Category';


export default async function Home() {

  const categoryData = await fetchDataFromStrapi("category-block-cat?populate=deep");
  const categoryBlockData = processCategoryBlocks(categoryData);
  // Render only the first three items from categoryBlockData
  const categoryDataToRender = categoryBlockData.length > 2 ? categoryBlockData.slice(0, 10) : [];

  return (
    <div>
      <Category categoryData={categoryDataToRender} />
    </div>
  );
}

export const revalidate = 300;
