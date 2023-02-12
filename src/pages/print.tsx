import React from 'react';
import Navbar from '../components/navbar/Navbar';
import gootenClient from '../services/gooten/client';
import {PreconfiguredProducts} from '../services/gooten/models';

const Print: React.FC = () => {
  const testProduct: PreconfiguredProducts = {
    Sku: 'ProPrint-Gloss-8x10-Test-gashfyukagewyifberiup;b',
    Name: 'ProPrint-Gloss-8x10',
    Description: 'Test space id 3',
    Items: [
      {
        ProductId: null,
        ProductVariantSku: 'ProPrint-Gloss-8x10',
        TemplateName: null,
        Preconfigurations: [
          {
            SpaceDesc: 'Test Space',
            SpaceId: '123',
            Url: 'https://navigo-ai.github.io/react-web',
          },
        ],
      },
    ],
    Images: [
      {
        Url: 'https://navigo-ai.github.io/react-web/static/media/ai.625d049a71b3e6c9bce0.webp',
        Index: 0,
        Id: 'image1',
      },
    ],
  };
  console.log(testProduct);
  gootenClient.variants().then((res) => console.log(res));
  //gootenClient.template("ProPrint-Gloss-8x10").then(res => console.log(res));
  //gootenClient.createPRP(testProduct).then(res => console.log(res));

  return (
    <>
      <Navbar />
      <section />
    </>
  );
};

export default Print;
