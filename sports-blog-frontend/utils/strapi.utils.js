import axios from 'axios';
import Link from 'next/link';

const BASE_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337';

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export function processHeroBlocks(data) {
  const heroBlockRaw = data.attributes.hero_blocks.data;
  heroBlockRaw.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt));
  return heroBlockRaw.map((heroBlock) => ({
    ...heroBlock.attributes,
    imgSrc: BASE_URL + heroBlock?.attributes?.image?.data?.attributes?.url,
    id: heroBlock.id,
    slug: heroBlock.attributes.slug,
  }));
}

export function processTrendingBlocks(data) {
  const trendingBlockRaw = data.attributes.trending_blocks.data;
  trendingBlockRaw.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt));
  return trendingBlockRaw.map((trendingBlock) => ({
    ...trendingBlock.attributes,
    imgSrc: BASE_URL + trendingBlock?.attributes?.image?.data[0]?.attributes?.url,
    id: trendingBlock.id,
    slug: trendingBlock.attributes.slug,
  }));
}

export function processHighlightBlocks(data) {
  const highlighBlockRaw = data.attributes.highlight_blocks.data;
  highlighBlockRaw.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt));
  return highlighBlockRaw.map((highlightBlock) => ({
    ...highlightBlock.attributes,
    imgSrc: BASE_URL + highlightBlock?.attributes?.image?.data?.attributes?.url,
    id: highlightBlock.id,
    slug: highlightBlock.attributes.slug,
  }));
}

export function processCategoryBlocks(data) {
  const categoryBlockRaw = data.attributes.category_blocks.data;
  categoryBlockRaw.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt));
  return categoryBlockRaw.map((categoryBlock) => ({
    ...categoryBlock.attributes,
    imgSrc: BASE_URL + categoryBlock?.attributes?.image?.data?.attributes?.url,
    id: categoryBlock.id,
    slug: categoryBlock.attributes.slug,
  }));
}

export function processTrendingHighlightBlocks(data) {
  const trendinghighlighBlockRaw = data.attributes.trendingnewshighlight_blocks.data;
  trendinghighlighBlockRaw.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt));

  return trendinghighlighBlockRaw.map((trendinghighlightBlock) => ({
    ...trendinghighlightBlock.attributes,
    imgSrc: BASE_URL + trendinghighlightBlock?.attributes?.image?.data?.attributes?.url,
    id: trendinghighlightBlock.id,
    slug: trendinghighlightBlock.attributes.slug,
  }));
}

export function processInfoBlocks(data) {
  const infoBlockRaw = data.attributes.info_blocks.data;

  return infoBlockRaw.map((infoBlock) => ({
    ...infoBlock.attributes,
    imgSrc: BASE_URL + infoBlock?.attributes?.image?.data[0]?.attributes?.url,
    id: infoBlock.id,
    slug: infoBlock.attributes.slug,
    button: createInfoBlockButton(infoBlock.attributes.button),
  }));
}

function createInfoBlockButton(buttonData) {
  if (!buttonData) {
    return null;
  }
  return (
    <Link href={`/${buttonData.slug}`}>
      {buttonData.text}
    </Link>
  );
}

export function processRecentBlocks(data) {
  const recentBlockRaw = data.attributes.recent_blocks.data;
  recentBlockRaw.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt));
  return recentBlockRaw.map((recentBlock) => ({
    ...recentBlock.attributes,
    imgSrc: BASE_URL + recentBlock?.attributes?.image?.data?.attributes?.url,
    id: recentBlock.id,
    slug: recentBlock.attributes.slug,
  }));
}

export function processRecentHighlightBlocks(data) {
  const recenthighlighBlockRaw = data.attributes.newshighlight_blocks.data;
  recenthighlighBlockRaw.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt));
  return recenthighlighBlockRaw.map((newshighlightBlock) => ({
    ...newshighlightBlock.attributes,
    imgSrc: BASE_URL + newshighlightBlock?.attributes?.image?.data?.attributes?.url,
    id: newshighlightBlock.id,
    slug: newshighlightBlock.attributes.slug,
  }));
}


