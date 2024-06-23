/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Question4() {
  return (
    <div>
      <h1>4. Subject: Cloudflare Nameservers</h1>
      <h2>
        How are Cloudflare's nameservers different from the DNS provided by
        Google DNS or OpenDNS? Can I delegate to Cloudflare nameservers while
        still using my host’s DNS?
      </h2>
      <br />
      <br />
      <p className='email'>
        Hi dear,
        <br />
        <br /> Thank you for getting in touch with us, I can see that you’d like
        to know if you can delegate a nameserver in Cloudflare while using your
        host’s DNS, and I’m happy to help you with that.
        <br /> <br /> In short, yes. You can do that by delegating subdomains
        outside of Cloudflare. Subdomain delegation allows different
        individuals, teams, or organizations to manage different subdomains of a
        site.
        <br /> <br /> By following the steps provided on the link below you’d be
        able to create NS records for the subdomain you mentioned.
        <br /> <br />
        <a
          target='_blank'
          href='https://developers.cloudflare.com/dns/manage-dns-records/how-to/subdomains-outside-cloudflare/'
        >
          https://developers.cloudflare.com/dns/manage-dns-records/how-to/subdomains-outside-cloudflare/
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
        Go to the developer’s Cloudflare page related to DNS and search about
        how to delegate subdomains to Cloudflare. Found a section called How to
        -{'>'} Delegating subdomains a section where it explains how to create
        an NS for the External Host subdomain as the customer had mentioned
        they’d like to do.
      </p>
    </div>
  );
}

export default Question4;
