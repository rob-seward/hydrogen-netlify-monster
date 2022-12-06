
import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Seo,
  useShopQuery,
  Image
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

import {StrapLine,Faq, NicePic } from '~/components';

import {Layout} from '~/components/index.server';

export default function OpeningTimesPage() {
  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <FaqContent />
      </Suspense>
    </Layout>
  );
}

function FaqContent() {

  return (
    <>
   <Faq />
    <StrapLine />
    <NicePic />
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: FAQPAGE_SEO_QUERY,
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

const FAQPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;

  