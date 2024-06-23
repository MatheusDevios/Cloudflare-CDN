/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Question3() {
  return (
    <div>
      <h1>3. Subject: Workers not applied</h1>
      <h2>
        I've just added a Worker on the Cloudflare Dashboard for my website: it
        works in the debugger but doesn't work when I query the site. Why is
        that? Is there anything to activate or anything I could check?
      </h2>
      <br />
      <br />
      <p className='email'>
        Hi dear,
        <br />
        <br /> Thank you for getting in touch with us, I can see you’ve got a
        concern about the Workers you just added not being applied when you
        query your website, and I’m happy to help you with that.
        <br />
        <br /> After you set up a Custom Domain for your Worker, Cloudflare will
        create DNS records and issue necessary certificates on your behalf. It
        is possible that these certificates take some time to be issued. <br />
        <br /> To know more about it, please refer to the link below.
        <br />
        <br />
        <a
          href='https://developers.cloudflare.com/workers/configuration/routing/custom-domains/'
          target='_blank'
        >
          https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
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
        Go to the developer’s Cloudflare page related to workers and search
        about using it on your website as mentioned above. Provided the user
        with the answer and also with the link for more detailed information
        about it.
      </p>
    </div>
  );
}

export default Question3;
