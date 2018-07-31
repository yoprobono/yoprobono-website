import React from 'react'
import Container from '../components/container'
import ContactForm from '../components/contact'
import pic from './logo.png'

export default () => (
  <Container>
    <div
      style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column' }}
    >
      <h1 style={{ borderBottom: 0, textAlign: 'center' }}>
        Join the Fight for Immigrants' Rights!
      </h1>
      <img src={pic} alt="yoprobono-logo"/>

      <h3>
        There is a real need in the immigrant community for high-quality,
        affordable legal services.
      </h3>
      <p>
        So much so that we cannot hope to effectively meet that need without
        more bodies, improving the processes by which we deliver legal services,
        or running ourselves into the ground. This is where you come in!
      </p>
      <h3>Not a lawyer? Don't worry about it!</h3>
      <p>
        We'll match your unique skill set with a qualified nonprofit
        organization that provides high-quality, pro bono legal services. You
        won't be writing briefs or arguing before the Supreme Court, but you can
        support the effort just the same! We're committed to finding an
        opportunity for you to do what you do best in furtherance of protecting
        and expanding immigrants' rights.
      </p>
      <p>
        Like any other organization, legal service providers have needs that
        extend beyond the direct services they provide to their clients. You
        know, things like:
        <ul style={{ marginTop: '1rem', marginBottom: '1rem', columns: 2 }}>
          <li>Software/Web Development</li>
          <li>Data Science</li>
          <li>Social Media</li>
          <li>Graphic Design</li>
          <li>Project Management</li>
          <li>Everything Else!</li>
        </ul>{' '}
        And, as you know as a practitioner, these things and much more can and
        do really add value to an organization, especially with respect to an
        organization's ability to respond quickly and effectively to new
        challenges, as well as to maintain stability and longterm viability.
        Unfortunately, attorneys aren't always all that great at this stuff--ok,
        ok, we're pretty terrible at it. In any event, chances are that you are
        a lot better since it's what you do.
      </p>

      <h3>How does it work?</h3>
      <p>
        Click the 'Sign Up with Linkedin' button below. Log in with Linkedin.
        Relax. We'll take care of the rest. We scrape some data off your public
        profile relevant to matching you with a need (e.g., skills, positions,
        etc), along with your primary email address so we can get in touch. Once
        a need arises, we'll give you a shout. You're always welcome to decline
        or take your name out of the system.
      </p>

      <h3>Who will I get matched with?</h3>
      <p>
        Right now we're signing up orgs to use this program to look for
        volunteers. We can't guarantee which, if any, you will match with. It's
        a pretty crazy world out there right now. As a result, it's hard to
        predict what tomorrow will bring and what will be required to meet its
        challenges.
      </p>
    </div>
    <div style={{ margin: '0 auto', marginBottom: '2rem', marginTop: '2rem' }}>
      <ContactForm />
    </div>
    <p>
      Are you a 501(c)(3) or similar organization operating in the immigration
      sphere and have a need for volunteers? Give us a
      <a href="mailto:michael@edel.mn">shout</a>. If we already know you,
      awesome, we can hook you right up. If we don't, we'll need you to provide
      some documentation and information about how you plan to use your
      volunteers. No hard feelings; we just need to make it work for everyone.
    </p>
    <p style={{ textAlign: 'center' }}>
      Complaints, Comments, Suggestions:{' '}
      <a href="https://twitter.com/Edelman215">@Edelman215</a>
    </p>
  </Container>
)
