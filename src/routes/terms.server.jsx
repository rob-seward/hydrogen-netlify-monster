
import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Seo,
  useShopQuery,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

import { Terms } from '~/components';

import {Layout} from '~/components/index.server';

export default function TermsPage() {
  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <TermsContent />
      </Suspense>
    </Layout>
  );
}

function TermsContent() {

  return (
    <>
   <Terms />
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: TERMSPAGE_SEO_QUERY,
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

const TERMSPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;

  