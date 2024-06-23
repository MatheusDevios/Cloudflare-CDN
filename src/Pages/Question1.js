import React from 'react';

function Question1() {
  return (
    <div>
      <h1>1. Subject: Site down, your name servers are down</h1>
      <h2>
        I am having trouble reaching my website http://example.com/ from
        different networks. Are your nameservers working properly?
      </h2>
      <br />
      <br />
      <p className='email'>
        Hi dear,
        <br />
        <br /> Thank you for getting in touch with us, I can see you are
        encountering some problems when connecting to your website from other
        networks different from yours, and I’m happy to help you with that.{' '}
        <br />
        <br />I can see here that your DNS is configured and the nameservers are
        working properly.
        <br /> Please try the following steps to see if the problem is solved.
        <br />
        <br />
        Please, can you clear the cache and cookies when using the network that
        is not working?
        <br />
        <br /> Can you please try and use a VPN to enter your website? I’m
        asking that because if the website works normally when doing what was
        mentioned above, I may mean that the network that you are using when
        your website is not working may be blocking a range of IP addresses that
        the IP address that Cloudflare has for your website is among them and a
        way to solve that is by contacting them and informing them about the
        issue as on Cloudflare side seems to be working perfectly as well as
        when using another network.
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
        First I would check their DNS/Cloudflare settings to see if everything
        seems fine, such as nameservers, if they have the redirects set.
        However, as they said that they are having trouble reaching their
        website from “different networks”, it probably means that they can
        access their website through another network.
      </p>
    </div>
  );
}

export default Question1;
