import {useUrl} from '@shopify/hydrogen';

import {Section, Heading, FooterMenu, CountrySelector} from '~/components';
import {FooterBanner} from '~/components/global';


/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}) {
  const {pathname} = useUrl();
  

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    
   <>
   <FooterBanner />
    <Section
    
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 
        border-b md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    >
      
      <FooterMenu menu={menu} />
      
      <section className="grid self-start w-full md:max-w-[355px] md:ml-auto">
      
        <Heading  size="lead" className="self-end font-normal pt-8 opacity-50 md:col-span-4"  as="h3">
          0772 4107641
        </Heading>
        <Heading size="lead" className="font-normal pt-1 opacity-50 md:col-span-3" as="p">
        379c Gloucester Road, Horfield, Bristol, BS7 8TN
        
        </Heading>
        
      </section>
      <div
        className={`self-end pt-8 opacity-50 md:col-span-4 lg:col-span-${itemsCount}`}
      >
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"></div>
        &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
        Licensed Open Source project. This website is carbon&nbsp;neutral.
      </div>
    </Section>
    
    </>
    
  );
}
