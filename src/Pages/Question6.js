/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Question6() {
  return (
    <div>
      <h1>6. Subject: Redirection based on user agent </h1>
      <h2>
        I want to redirect visitor with specific user agent (*MSIE 8.0* for
        example) to a different page. It seems this is not possible with
        Cloudflare Page Rules. Is there any other way to achieve that using
        Cloudflare?
      </h2>
      <br />
      <br />
      <p className='email'>
        Hi dear,
        <br />
        <br /> Thank you for getting in touch with us, I can see that you’d like
        to redirect a specific visitor to a different page, and I’m happy to
        help you with that.
        <br /> <br />
        Going straight into your query, yes, you would be able to achieve that
        using Cloudflare by “Conditional Response”, returning a response based
        on the incoming request’s URL, HTTP method, User Agent, IP address, ASN
        or device type.
        <br /> <br />
        Having said that, and also with the example you provided. You’d be able
        to do that by following the code example mentioned o the below link.
        <br /> <br />
        <a
          target='_blank'
          href='https://developers.cloudflare.com/workers/examples/conditional-response/'
        >
          https://developers.cloudflare.com/workers/examples/conditional-response/
        </a>
        <br /> <br />
        With the example given, you could use something like:
        <br /> <br />
        <i style={{ fontSize: 14 }}>
          {`export default {`}
          <br />
          {`fetch (request) {`}
          <br />
          {`// Redirect clients using Agent.`}
          <br />
          {`
    const userAgent = request.headers.get('User-Agent') || '';`}
          <br /> <br />
          {`
    if (userAgent.includes('MSIE 8.0’)) { `}
          <br />
          {`
      return Response.redirect(‘https://desiredMSIE8.0-page.com');`}
          <br />
          {`
    }`}
          <br /> <br />
          {`
    // Default`}
          <br />
          {`    return new Response('Hey and welcome, $ {userAgent}!') `}
          <br />
          {`  }}`}
          <br />
        </i>
        <br /> <br />
        If the user agent is provided by the browser, then it will be saved to
        userAgent, and then you will be able to use it to redirect them to a
        different page as desired.
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
        As the user would like to conditionally choose the route the user agent
        would be redirected to, and knowing the usually a user agent is sent
        through HTTP requests from the browser, had to search if there was any
        conditional way to redirect or do something when receiving a response
        from the HTTP request sent, then found on developers Cloudflare by
        searching that on google the link mentioned above as it describes
        exactly what I was in mind about conditionally routing the user.
      </p>
    </div>
  );
}

export default Question6;
