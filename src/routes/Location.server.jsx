

import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Image,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
 
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

import {StrapLine, LocationMap} from '~/components';

import {Layout, ProductSwimlane} from '~/components/index.server';

export default function Location() {
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <WerehereContent />
      </Suspense>
    </Layout>
  );
}

function WerehereContent() {
 
  return (
    <>
<div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Location
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Find us on Gloucester Road by the Royal Oak pub, BS7 8TN  
            </p>
          </div>
        </div>
        <div className="mt-10 bg-white ">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-50" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg ">
                  
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    
                  <LocationMap />
          
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
    query: LOCATIONPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: name,
        description,
        titleTemplate: '%s - Location',
      }}
    />
  );
}


const LOCATIONPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;

  