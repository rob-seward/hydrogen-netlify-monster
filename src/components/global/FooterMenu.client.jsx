// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Disclosure} from '@headlessui/react';
import {Link} from '@shopify/hydrogen';

import {Heading, IconCaret} from '~/components';

const navigation = {
  solutions: [
    { name: 'Opening Times', href: '/openingtimes' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ],

}
  
export function FooterMenu() {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };
 return (
  <>
  <section className={styles.section}>
  <ul role="list" className="flex justify-between">
    {navigation.solutions.map((item) => (
      <li className={styles.nav} key={item.name}>
        <a href={item.href} className="text-base text-gray-300 hover:text-white">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
  </section>
  
</>
  
    
  );
}
