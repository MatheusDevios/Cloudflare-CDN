/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Question2() {
  return (
    <div>
      <h1>2. Subject: Why is my site coming from California?!</h1>
      <h2>
        I’m in London, but looking at your IPs it shows that you are serving my
        website from California. Can that be right? Why is that? I thought you
        were supposed to serve my website from some places close to me?
      </h2>
      <br />
      <br />
      <p className='email'>
        Hi dear,
        <br />
        <br /> Thank you for getting in touch with us, I can see you’ve got a
        concern about your site coming from California instead of from London,
        and I’m happy to help you with that.
        <br />
        <br /> Going straight into your question, being an anycast network with
        numerous servers worldwide, Cloudflare routes network and web traffic
        through the Cloudflare Edge point (datacenter) that is nearest to the
        website visitor (you) in order to serve the online content.
        <br />
        <br />
        <a
          href='https://www.cloudflare.com/learning/cdn/glossary/anycast-network/'
          target='_blank'
        >
          https://www.cloudflare.com/learning/cdn/glossary/anycast-network/
        </a>
        <br />
        <br />
        Since Cloudflare runs an anycast network, those IPs are accessible
        anywhere. The address that GeoIP provides you with is typically only the
        address that they were registered at; it is not related to the real
        place where an IP address is being served.
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
        Search on Cloudflare docs, website and community if there was any doc
        explaining how the IP is defined and why the customer received the IP
        from California. I could find that as Cloudflare being a anycast the IP
        registered for the customer is defined by the fastest way to the access.
      </p>
    </div>
  );
}

export default Question2;
