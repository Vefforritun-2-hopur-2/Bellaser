import React from 'react';
import Image from 'next/image';
import dog1 from '../../image/dogPhoto-1.jpg'
import dog2 from '../../image/dogPhoto-2.jpg'
import dog3 from '../../image/dogPhoto-3.jpg'


export default function About() {
  return (
    <div className='umOkkur'>
      <h1>
      Velkomin á Bellaser – um gæludýrirð þitt!
      </h1>
      <div className='umOkkurTexti'>

      <p>
    Við bjóðum upp á nýja og áreiðanlega leið til að hjálpa gæludýraeigendum að finna umönnun fyrir fjölskylduvinina á fjórufætlingaformi. Með Bellaser appinu getur þú snúið þér til þeirra sem bjóða þjónustu í hundapössun og göngutúra, og það allt á einfaldan og áreiðanlegan hátt.
    </p>
    <Image src={dog2} alt='labbaHund' height={500}></Image>
    Fyrir okkur er hver gæludýr sérstakt, og okkar markmið er að tryggja hamingju og heilbrigði þeirra með áreiðanlega umönnun. Með Bellaser appinu getur þú verið viss um að gæludýrið þitt fær bestu mögulegu umönnunina, hvort sem það er í formi göngutúra eða heimilisfóstrar.
    <div className='umOkkurMyndir'>
    <Image src={dog3} alt='labbaHund' height={500}></Image>
    <Image src={dog1} alt='labbaHund' height={500}></Image>
    </div>
    <h2>Takk fyrir að vera hluti af Bellaser samfélaginu!</h2>
    </div>
    </div>
  );
};