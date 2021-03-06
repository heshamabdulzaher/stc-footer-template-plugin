const footerTemplate = (footerContent, footerTheme) => {
  return `
    <div class="stc-footer--about-stc">
        <div class="stc-footer--logo">
            <img src="https://assets.laywagif.com/assets/img/${
              footerTheme === 'dark' ? 'stc-logo-white' : 'stc-logo'
            }.png" alt="STC logo" />
            <p>${footerContent.stc_initiatives}</p> 
        </div>
        <div class="stc-footer--follow-us">
            <p>${footerContent.follow_us}</p>
            <ul>
                <li>
                    <a href="https://twitter.com/stc" target="_blank" rel="noopener">
                        <img src="https://assets.laywagif.com/assets/img/social/${
                          footerTheme === 'dark' ? 'twitter-white' : 'twitter'
                        }.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.youtube.com/user/STCsaudiarabia"
                       target="_blank"
                       rel="noopener">
                        <img src="https://assets.laywagif.com/assets/img/social/${
                          footerTheme === 'dark' ? 'youtube-white' : 'youtube'
                        }.png" alt="Youtube" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.facebook.com/STC/"
                       target="_blank"
                       rel="noopener">
                        <img src="https://assets.laywagif.com/assets/img/social/${
                          footerTheme === 'dark' ? 'facebook-white' : 'facebook'
                        }.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.instagram.com/stc/"
                       target="_blank"
                       rel="noopener">
                        <img src="https://assets.laywagif.com/assets/img/social/${
                          footerTheme === 'dark'
                            ? 'instagram-white'
                            : 'instagram'
                        }.png" alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.snapchat.com/add/stcnow"
                       target="_blank"
                       rel="noopener">
                        <img src="https://assets.laywagif.com/assets/img/social/${
                          footerTheme === 'dark' ? 'snapchat-white' : 'snapchat'
                        }.png" alt="Snapchat" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.linkedin.com/company/stc"
                       target="_blank"
                       rel="noopener">
                        <img src="https://assets.laywagif.com/assets/img/social/${
                          footerTheme === 'dark' ? 'linkedin-white' : 'linkedin'
                        }.png" alt="Linkedin" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="stc-footer--copyright">
        <div class="stc-footer--copyright-content">
            <a href="http://stc.com.sa" target="_blank" rel="noopener">
                <img
                     src="https://assets.laywagif.com/assets/img/stc-logo-copyright.png"
                     alt="stc logo copyright" />
            </a>
            <p>${footerContent.copyright}</p>
        </div>

        <div class="stc-footer--copyright-links">
            <a
               href="${footerContent.copyright_links.contact_us.url}"
               target="_blank"
               rel="noopener">${
                 footerContent.copyright_links.contact_us.text
               }</a>
            <span>.</span>
            <a
               href="${footerContent.copyright_links.privacy_policy.url}"
               target="_blank"
               rel="noopener">${
                 footerContent.copyright_links.privacy_policy.text
               }</a>
            <span>.</span>
            <a
               href="${footerContent.copyright_links.terms_and_conditions.url}"
               target="_blank"
               rel="noopener">${
                 footerContent.copyright_links.terms_and_conditions.text
               }</a>
        </div>
    </div>
    `;
};

export default footerTemplate;
