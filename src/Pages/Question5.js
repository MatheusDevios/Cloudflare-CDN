/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Question5() {
  return (
    <div>
      <h1>5. Subject: Content not Being Cached </h1>
      <h2>
        After activating Cloudflare on my site, I am seeing that resources on my
        pages are not being cached:
      </h2>
      <br />
      <br />
      <p className='email'>
        Hi dear,
        <br />
        <br /> Thank you for getting in touch with us, I can see that you’ve got
        a concern about not caching after starting activating Cloudflare, and
        I’m happy to help you with that. <br /> <br />
        Going straight into your query, it seems that the origin Cach-Control is
        overriding the cache rules as we can see on the part of the response you
        received “ Cache-Control: no-store, no-cache, must-revalidate,
        post-check=0, pre-check=0, max-age=0”. <br /> <br />
        To understand more about it, please refer to the link below. <br />{' '}
        <br />
        <a
          target='_blank'
          href='https://developers.cloudflare.com/cache/concepts/cache-control/'
        >
          https://developers.cloudflare.com/cache/concepts/cache-control/
        </a>{' '}
        <br /> <br />
        In order to override that and customize your cache, please refer to the
        link below. <br /> <br />{' '}
        <a
          target='_blank'
          href='https://developers.cloudflare.com/cache/concepts/customize-cache/'
        >
          https://developers.cloudflare.com/cache/concepts/customize-cache/
        </a>
        <br /> <br />I hope that helps with your concern. Please do not hesitate
        to contact us back.
        <br />
        <br /> Regards,
        <br /> Matheus.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        <i>
          <b>THOUGHT PROCESS:</b>
        </i>{' '}
        Go to the developer’s Cloudflare page related to Caches to understand
        more about Cache-Control, as on the response the customer sent us, the
        Cache-control mentioned no-store, no-cache and mainly must-revalidade.
        That indicated that some commands were either being overridden or not
        called. Also found in the same Big section under the Concepts for the
        cache, “Default cache behaviour” and “Customize cache” which helped to
        understand more and also how to possibly change it.
      </p>
    </div>
  );
}

export default Question5;
