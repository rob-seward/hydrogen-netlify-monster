import {Link, Image} from '@shopify/hydrogen';

import {Heading, Section, Grid} from '~/components';

export function FeaturedCollections({data, title = 'Collections', ...props}) {
  const items = data.filter((item) => item.image).length;
  console.log(items);
  const haveCollections = data.length > 0;
  console.log(haveCollections);

  if (!haveCollections) return null;

  return (
    <Section {...props}>
      
      <Grid items={items}>
        {data.map((collection) => {
          if (!collection?.image) {
            return null;
          }
          // TODO: Refactor to use CollectionCard
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div className="grid gap-4">
                <div className="card-image bg-primary/5 aspect-[3/2]
                transition ease-in-out delay-150 backdrop-opacity-50 hover:-translate-y-1 hover:scale-110 hover:backdrop-opacity-50 duration-300
                ">
                  {collection?.image && (
                    <Image
                    
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      height={400}
                      sizes="(max-width: 32em) 100vw, 33vw"
                      width={600}
                      widths={[400, 500, 600, 700, 800, 900]}
                      loaderOptions={{
                        scale: 2,
                        crop: 'center',
                      }}
                    />
                  )}
                </div>
                <Heading size="copy">{collection.title}</Heading>
              </div>
            </Link>
          );
        })}
      </Grid>
    </Section>
  );
}
