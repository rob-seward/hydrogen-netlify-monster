
import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Seo,
  useShopQuery,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

import {StrapLine,OpeningTimes, NicePic } from '~/components';

import {Layout} from '~/components/index.server';

export default function OpeningTimesPage() {
  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <OpeningTimesContent />
      </Suspense>
    </Layout>
  );
}

function OpeningTimesContent() {

  return (
    <>
   <OpeningTimes />
    <StrapLine />
   
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: OPENTIMESPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: name,
        description,
        titleTemplate: '%s - Openning Times',
      }}
    />
  );
}

const OPENTIMESPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;

  