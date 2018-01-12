import React from 'react';

const TermsPage = () => {

  window.scrollTo(0, 0);
  document.title = 'Community Policy';

  let style = {
    backgroundImage: 'url(/static/img/contact-us.jpg)'
  };

  return (
    <div>
      <div className="bg-holder full text-center text-white infoPageWrapper">
        <div className="bg-mask"></div>
        <div style={style} className="bg-img infoImg" ></div>
        <div className="bg-front full-center">
          <div className="owl-cap">
            <h1 className="owl-cap-title fittext">Community Guidelines</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-wrap">
          <div className="gap gap-small"></div>
          <div className="col-md-12">
          <p>Triperoo helps networks of people connect and share information on travel. The following ground
            rules will help ensure an enjoyable and safe experience for our community. Our members are expected
            to participate with common sense, courtesy, and respect. Your use of this site is subject to these
            guidelines and our Terms of Service.</p>

            <p className="mb-3">User content on Triperoo reflects the opinions of those users and not of Triperoo UK Ltd.</p>

            <h4>General Guidelines</h4>
            <hr />

            <h5>Your Triperoo Account</h5>
            <p>Triperoo accounts are intended for your personal use, to contribute content that you have created yourself. Since
              the best travel advice comes from the people you trust, you will get the most out of your Triperoo experience by providing
              accurate information about yourself. Use of Triperoo accounts for any other purpose may be considered an infringement of
              our <a href="/terms-of-use">Terms of Use.</a></p>

            <h5>Courtesy & Respect</h5>
            <p>Treat others with courtesy and respect. Remember that your tone can easily be misinterpreted in print, so take care
              in your choice of language. Triperoo is a global travel community so you are likely to encounter people of various
              opinions, experiences, budgets, and preferences. Show respect for these differences, and don't take things personally.</p>

            <h5>Lead by Example</h5>
            <p>Make newcomers feel welcome, be helpful to others, and keep it constructive. The best way to deal with members trying to get a reaction
              or trolls is to ignore them and report them to Triperoo. By being a positive member, you encourage others to do the same.</p>

            <h5>Integrity</h5>
            <p>Community members are looking to you for travel advice, so be sincere and truthful. Refrain from defaming and harassing
              people, impersonating others, spamming, ticket scalping, violating the privacy of others, and engaging in illegal activities.</p>

            <h5>Common Sense</h5>
            <p>Use your common sense when seeking travel advice, especially around the topics of health and safety. Be safe and smart
              if arranging any meetups with other travel companions, and don't post personal information about yourself in public spaces.
              Triperoo is not responsible for the actions of our community members.</p>

            <h5>Reviews and Recommendations</h5>
            <p>The best reviews and recommendations are insightful, personal, informative, and readable. Triperoo offers a rich community
              experience because our members take the time to share their personal stories. Here are some tips for writing great reviews
              and recommendations.</p>
            <ol>
              <li><b>Share your experience:</b> The community benefits when you share your unique, personal experiences. Describe what you liked and disliked, and what it meant to you.</li>
              <li><b>Be informative:</b> Try to be as accurate as possible, and include relevant and useful details. Share something novel or surprising that isn't usually covered in travel guidebooks.</li>
              <li><b>Be constructive:</b> It's ok to share negative feedback, but be constructive and include relevant facts and details. Do not post false information as this may have legal consequences.</li>
              <li><b>Use good grammar and spelling:</b> A good recommendation is a readable one. Use complete sentences and write clearly. Go easy on capitalization and resist the urge to write entire novels.</li>
            </ol>

            <p>Triperoo rarely removes reviews, but when we do below are some possible reasons why. We reserve the right to remove any content that we feel
              violates our  <a href="/terms-of-use">Terms of Use</a> or these guidelines, or violates the spirit of these guidelines. Read more
              in our  <a href="/terms-of-use">Terms of Use</a>.</p>

            <ol>
              <li><b>Inappropriate content:</b> Bad language, adult content, or otherwise objectionable content.</li>
              <li><b>Plagiarism:</b> Copying a review from another person or website and posting as your own.</li>
              <li><b>Conflict of interest:</b> Posting favorable reviews for your own business or posting reviews in exchange for money or freebies. You should also refrain from reviewing your employer or any business in which you have a commercial interest.</li>
              <li><b>Fake or malicious recommendations:</b> Posting bad reviews about your competitors.</li>
              <li><b>Off-topic:</b> Reviews that are unrelated to the topic page it is listed under.</li>
            </ol>

            <h5>Reporting Abuse </h5>
            <p>If you see something that may be in violation of these guidelines or our  <a href="/terms-of-use">Terms of Use</a>, please
              email <a href="mailto:abuse@triperoo.co.uk">abuse@triperoo.co.uk</a> with a clear description of what's happened along with the webpage address.</p>
            <p>We do not arbitrate disputes among business owners, competitors, customers, ex-employees, or other entities. We remove only the
              reviews that we consider to be in violation of our guidelines and <a href="/terms-of-use">Terms of Use</a>.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
